'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'

interface Props {
  images: string[]
  onChange: (images: string[]) => void
  label?: string
}

export default function ImageManager({ images, onChange, label = 'Images' }: Props) {
  const [uploading, setUploading] = useState<number | 'add' | null>(null)
  const [error, setError] = useState('')
  const addRef = useRef<HTMLInputElement>(null)
  const replaceRef = useRef<HTMLInputElement>(null)
  const replaceIdx = useRef<number>(-1)

  const uploadFile = async (file: File): Promise<string | null> => {
    const fd = new FormData()
    fd.append('file', file)
    const res = await fetch('/api/admin/upload', { method: 'POST', body: fd })
    const data = await res.json()
    if (data.url) return data.url
    setError(data.error ?? 'Upload failed')
    return null
  }

  const handleAdd = async (files: FileList) => {
    setUploading('add')
    setError('')
    const urls: string[] = []
    for (const file of Array.from(files)) {
      const url = await uploadFile(file)
      if (url) urls.push(url)
    }
    onChange([...images, ...urls])
    setUploading(null)
    if (addRef.current) addRef.current.value = ''
  }

  const handleReplace = async (files: FileList) => {
    const idx = replaceIdx.current
    if (idx < 0) return
    setUploading(idx)
    setError('')
    const url = await uploadFile(files[0])
    if (url) {
      const next = [...images]
      next[idx] = url
      onChange(next)
    }
    setUploading(null)
    if (replaceRef.current) replaceRef.current.value = ''
  }

  const remove = (idx: number) => onChange(images.filter((_, i) => i !== idx))

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

  const openReplace = (idx: number) => {
    replaceIdx.current = idx
    replaceRef.current?.click()
  }

  return (
    <div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.75rem' }}>
        {label} <span style={{ opacity: 0.4 }}>({images.length})</span>
      </div>

      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
        {images.map((url, idx) => (
          <div key={idx} style={{ position: 'relative', width: 130, height: 95, background: '#000', flexShrink: 0 }}>
            <Image src={url} alt="" fill style={{ objectFit: 'cover', opacity: uploading === idx ? 0.4 : 0.9 }} />

            {uploading === idx && (
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--mono)', fontSize: '0.55rem', color: '#fff' }}>
                Replacing...
              </div>
            )}

            {uploading !== idx && (
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '4px' }}>
                {/* Top row: reorder */}
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <button onClick={() => moveLeft(idx)} disabled={idx === 0} style={iconBtn}>‹</button>
                  <button onClick={() => moveRight(idx)} disabled={idx === images.length - 1} style={iconBtn}>›</button>
                </div>
                {/* Bottom row: replace + delete */}
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <button onClick={() => openReplace(idx)} style={{ ...iconBtn, fontSize: '0.55rem', width: 'auto', padding: '0 5px', background: 'rgba(27,108,168,0.85)' }}>↺</button>
                  <button onClick={() => remove(idx)} style={{ ...iconBtn, background: 'rgba(220,38,38,0.85)' }}>✕</button>
                </div>
              </div>
            )}

            {idx === 0 && (
              <div style={{ position: 'absolute', bottom: 4, left: 4, fontFamily: 'var(--mono)', fontSize: '0.5rem', letterSpacing: '0.1em', textTransform: 'uppercase', background: 'rgba(27,108,168,0.9)', color: '#fff', padding: '1px 5px' }}>
                Cover
              </div>
            )}
          </div>
        ))}

        {/* Add new */}
        <button
          onClick={() => addRef.current?.click()}
          disabled={uploading !== null}
          style={{
            width: 130, height: 95, border: '1px dashed rgba(255,255,255,0.15)',
            background: 'rgba(255,255,255,0.03)', color: 'rgba(255,255,255,0.3)',
            fontSize: uploading === 'add' ? '0.72rem' : '1.8rem', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--mono)',
          }}
        >
          {uploading === 'add' ? 'Uploading...' : '+'}
        </button>
      </div>

      {error && <p style={{ fontSize: '0.72rem', color: '#f87171', marginBottom: '0.5rem' }}>{error}</p>}

      {/* Add files input */}
      <input ref={addRef} type="file" accept="image/jpeg,image/png,image/webp" multiple style={{ display: 'none' }}
        onChange={e => { if (e.target.files?.length) handleAdd(e.target.files) }} />

      {/* Replace single image input */}
      <input ref={replaceRef} type="file" accept="image/jpeg,image/png,image/webp" style={{ display: 'none' }}
        onChange={e => { if (e.target.files?.length) handleReplace(e.target.files) }} />

      <p style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--mono)' }}>
        ‹ › reorder · ↺ replace · ✕ remove · First image is cover
      </p>
    </div>
  )
}

const iconBtn: React.CSSProperties = {
  width: 22, height: 22, background: 'rgba(0,0,0,0.65)', border: 'none',
  color: '#fff', fontSize: '0.9rem', cursor: 'pointer', display: 'flex',
  alignItems: 'center', justifyContent: 'center', lineHeight: 1,
}
