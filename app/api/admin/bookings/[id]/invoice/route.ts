import { NextRequest, NextResponse } from 'next/server'
import React from 'react'
import { pdf } from '@react-pdf/renderer'
import InvoicePDF from '@/components/admin/InvoicePDF'
import { getSupabaseAdmin, logActivity, requireAdmin } from '@/lib/api'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

async function streamToBuffer(stream: NodeJS.ReadableStream) {
  const chunks: Buffer[] = []
  for await (const chunk of stream) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
  }
  return Buffer.concat(chunks)
}

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const db = getSupabaseAdmin()
    const { data: booking, error } = await db
      .from('bookings')
      .select('*, clients(*)')
      .eq('id', params.id)
      .single()

    if (error) throw error

    const invoiceRef = booking.invoice_ref || `OPV-INV-${Date.now()}`
    const document = React.createElement(InvoicePDF, {
      booking: { ...booking, invoice_ref: invoiceRef },
      client: booking.clients,
    }) as any
    const stream = await pdf(document).toBuffer()
    const buffer = await streamToBuffer(stream)
    const path = `${params.id}/${invoiceRef}.pdf`

    const { error: uploadError } = await db.storage.from('documents').upload(path, buffer, {
      contentType: 'application/pdf',
      upsert: true,
    })
    if (uploadError) throw uploadError

    await db
      .from('bookings')
      .update({
        invoice_ref: invoiceRef,
        documents: [
          ...((Array.isArray(booking.documents) ? booking.documents : []) as any[]),
          { type: 'invoice', path, invoice_ref: invoiceRef, created_at: new Date().toISOString() },
        ],
      })
      .eq('id', params.id)

    const { data: signed, error: signedError } = await db.storage.from('documents').createSignedUrl(path, 3600)
    if (signedError) throw signedError

    await logActivity({
      req,
      action: 'invoice.generated',
      entityType: 'booking',
      entityId: params.id,
      description: `Invoice generated: ${invoiceRef}`,
      metadata: { path, invoice_ref: invoiceRef },
    })

    return NextResponse.json({ invoice_ref: invoiceRef, path, signed_url: signed.signedUrl })
  } catch (error) {
    console.error('Invoice generation error:', error)
    return NextResponse.json({ error: 'Failed to generate invoice' }, { status: 500 })
  }
}
