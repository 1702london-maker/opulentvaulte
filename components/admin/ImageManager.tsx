'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'

interface Props {
  images: string[]
  onChange: (images: string[]) => void
  label?: string
}

export default function ImageManager({ images, onChange, label = 'Images' }: Props) {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  const upload = async (files: FileList) => {
    setUploading(true)
    setError('')
    const uploaded: string[] = []
    for (const file of Array.from(files)) {
      const fd = new FormData()
      fd.append('file', file)
      const res = await fetch('/api/admin/upload', { method: 'POST', body: fd })
      const data = await res.json()
      if (data.url) uploaded.push(data.url)
      else setError(data.error ?? 'Upload failed')
    }
    onChange([...images, ...uploaded])
    setUploading(false)
    if (fileRef.current) fileRef.current.value = ''
  }

  const remove = (url: string) => onChange(images.filter(i => i !== url))

  const moveLeft = (idx: number) => {
    if (idx === 0) return
    const next = [...images]
    ;[next[idx - 1], next[idx]] = [next[idx], next[idx - 1]]
    onChange(next)
  }

  const moveRight = (idx: number) => {
    if (idx === images.length - 1) return
    const next = [...images]
    ;[next[idx], next[idx + 1]] = [next[idx + 1], next[idx]]
    onChange(next)
  }

  return (
    <div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.75rem' }}>
        {label} <span style={{ opacity: 0.4 }}>({images.length})</span>
      </div>

      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
        {images.map((url, idx) => (
          <div key={url} style={{ position: 'relative', width: 130, height: 95, background: '#000', flexShrink: 0 }}>
            <Image src={url} alt="" fill style={{ objectFit: 'cover', opacity: 0.9 }} />
            {/* Controls overlay */}
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '4px' }}>
              {/* Order controls */}
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button onClick={() => moveLeft(idx)} disabled={idx === 0} style={iconBtn}>‹</button>
                <button onClick={() => moveRight(idx)} disabled={idx === images.length - 1} style={iconBtn}>›</button>
              </div>
              {/* Delete */}
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={() => remove(url)} style={{ ...iconBtn, background: 'rgba(220,38,38,0.85)' }}>✕</button>
              </div>
            </div>
            {idx === 0 && (
              <div style={{ position: 'absolute', bottom: 4, left: 4, fontFamily: 'var(--mono)', fontSize: '0.5rem', letterSpacing: '0.1em', textTransform: 'uppercase', background: 'rgba(27,108,168,0.9)', color: '#fff', padding: '1px 5px' }}>
                Cover
              </div>
            )}
          </div>
        ))}

        {/* Upload button */}
        <button
          onClick={() => fileRef.current?.click()}
          disabled={uploading}
          style={{
            width: 130, height: 95, border: '1px dashed rgba(255,255,255,0.15)',
            background: 'rgba(255,255,255,0.03)', color: 'rgba(255,255,255,0.3)',
            fontSize: uploading ? '0.72rem' : '1.8rem', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--mono)',
          }}
        >
          {uploading ? 'Uploading...' : '+'}
        </button>
      </div>

      {error && <p style={{ fontSize: '0.72rem', color: '#f87171', marginBottom: '0.5rem' }}>{error}</p>}

      <input
        ref={fileRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        multiple
        style={{ display: 'none' }}
        onChange={e => { if (e.target.files?.length) upload(e.target.files) }}
      />
      <p style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--mono)' }}>
        JPEG · PNG · WebP · Max 5MB each · Drag arrows to reorder · First image is cover
      </p>
    </div>
  )
}

const iconBtn: React.CSSProperties = {
  width: 22, height: 22, background: 'rgba(0,0,0,0.65)', border: 'none',
  color: '#fff', fontSize: '0.9rem', cursor: 'pointer', display: 'flex',
  alignItems: 'center', justifyContent: 'center', lineHeight: 1,
}
