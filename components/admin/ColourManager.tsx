'use client'

import { useState } from 'react'

interface Props {
  colours: string[]
  onChange: (colours: string[]) => void
}

export default function ColourManager({ colours, onChange }: Props) {
  const [input, setInput] = useState('')

  const add = () => {
    const val = input.trim()
    if (!val || colours.includes(val)) return
    onChange([...colours, val])
    setInput('')
  }

  const remove = (c: string) => onChange(colours.filter(x => x !== c))

  return (
    <div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.75rem' }}>
        Available Colours
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
        {colours.map(c => (
          <span key={c} style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            padding: '0.25rem 0.7rem', background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.78rem',
            color: 'rgba(255,255,255,0.7)',
          }}>
            {c}
            <button onClick={() => remove(c)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.35)', cursor: 'pointer', fontSize: '0.7rem', padding: 0, lineHeight: 1 }}>✕</button>
          </span>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), add())}
          placeholder="e.g. Nardo Grey, Santorini Black..."
          style={{
            flex: 1, padding: '0.6rem 0.9rem', background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.85)',
            fontSize: '0.82rem', fontFamily: 'var(--body)', outline: 'none',
          }}
        />
        <button onClick={add} style={{
          padding: '0.6rem 1.2rem', background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)',
          fontSize: '0.72rem', fontFamily: 'var(--mono)', letterSpacing: '0.1em',
          textTransform: 'uppercase', cursor: 'pointer',
        }}>
          Add
        </button>
      </div>
    </div>
  )
}
