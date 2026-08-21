import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: { padding: 42, fontFamily: 'Helvetica', color: '#1f2d3a', fontSize: 10 },
  header: { borderBottom: '1px solid #b8952a', paddingBottom: 20, marginBottom: 28 },
  brand: { fontSize: 26, letterSpacing: 2, color: '#0f2f4a' },
  label: { fontSize: 8, letterSpacing: 1.8, color: '#4a74a5', textTransform: 'uppercase' },
  title: { fontSize: 18, marginTop: 24 },
  grid: { flexDirection: 'row', gap: 24, marginBottom: 24 },
  col: { flex: 1 },
  box: { border: '1px solid #d6e3ef', padding: 14, marginBottom: 18 },
  row: { flexDirection: 'row', justifyContent: 'space-between', borderBottom: '1px solid #e6eef5', paddingVertical: 8 },
  total: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 16, paddingTop: 12, borderTop: '1px solid #b8952a', fontSize: 14 },
  muted: { color: '#6f8398', lineHeight: 1.5 },
})

export type InvoicePDFProps = {
  booking: Record<string, any>
  client?: Record<string, any> | null
}

function money(value: unknown, currency = 'GBP') {
  const amount = Number(value || 0)
  return new Intl.NumberFormat('en-GB', { style: 'currency', currency }).format(amount)
}

export default function InvoicePDF({ booking, client }: InvoicePDFProps) {
  const currency = booking.currency || 'GBP'
  const total = booking.total_amount || booking.quoted_amount || 0
  const paid = booking.amount_paid || (booking.deposit_paid ? booking.deposit_amount : 0) || 0
  const balance = booking.balance_due ?? Math.max(Number(total) - Number(paid), 0)

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.brand}>OPV</Text>
          <Text style={styles.label}>Opulent Vault Limited</Text>
          <Text style={styles.title}>Invoice {booking.invoice_ref || booking.booking_ref}</Text>
        </View>

        <View style={styles.grid}>
          <View style={styles.col}>
            <Text style={styles.label}>Bill To</Text>
            <Text>{client?.full_name || 'OPV Client'}</Text>
            <Text style={styles.muted}>{client?.email || booking.email || ''}</Text>
            <Text style={styles.muted}>{client?.phone || ''}</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.label}>Booking</Text>
            <Text>{booking.booking_ref || booking.id}</Text>
            <Text style={styles.muted}>Service: {booking.service}</Text>
            <Text style={styles.muted}>Status: {booking.status}</Text>
          </View>
        </View>

        <View style={styles.box}>
          <Text style={styles.label}>Arrangement</Text>
          <View style={styles.row}>
            <Text>{booking.service_detail?.title || booking.supplier_name || `${booking.service} arrangement`}</Text>
            <Text>{money(total, currency)}</Text>
          </View>
          {booking.deposit_amount ? (
            <View style={styles.row}>
              <Text>Deposit</Text>
              <Text>{money(booking.deposit_amount, currency)}</Text>
            </View>
          ) : null}
          <View style={styles.total}>
            <Text>Balance Due</Text>
            <Text>{money(balance, currency)}</Text>
          </View>
        </View>

        <Text style={styles.muted}>
          Payment terms are confirmed with your OPV guardian. This invoice is issued by Opulent Vault Limited for the private arrangement referenced above.
        </Text>
      </Page>
    </Document>
  )
}
