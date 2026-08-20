'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import type { Yacht } from './page'

const filters = [['all', 'All'], ['motor', 'Motor'], ['sailing', 'Sailing'], ['superyacht', 'Superyacht'], ['catamaran', 'Catamaran'], ['day-boat', 'Day Boat']] as const

export default function YachtFilter({ yachts }: { yachts: Yacht[] }) {
  const [active, setActive] = useState('all')
  const filtered = useMemo(() => active === 'all' ? yachts : yachts.filter(yacht => yacht.category === active), [active, yachts])

  return (
    <>
      <div className="yacht-filter-row">{filters.map(([value, label]) => <button key={value} type="button" className={active === value ? 'active' : ''} onClick={() => setActive(value)}>{label}</button>)}</div>
      <div className="yacht-listing-grid">
        {filtered.map(yacht => (
          <article className="yacht-card" key={yacht.id}>
            <div className="yacht-card-image"><Image src={yacht.image} alt={yacht.name} fill style={{ objectFit: 'cover' }} /><span className="yacht-card-badge">{yacht.category.replace('-', ' ')}</span>{yacht.available && <span className="yacht-card-available">Available Now</span>}</div>
            <div className="yacht-card-body"><span className="prop-city">{yacht.basedAt}</span><h3>{yacht.name}</h3><small>{yacht.length} · {yacht.type}</small><p>{yacht.description}</p><div className="yacht-chip-row">{yacht.features.slice(0, 4).map(feature => <span key={feature}>{feature}</span>)}</div><div className="yacht-card-meta"><span>{yacht.guests}</span><span>{yacht.crew}</span></div><div className="yacht-card-price"><strong>{yacht.priceFrom}</strong><span>{yacht.priceFrom.includes('/day') ? '/day' : '/week'}</span></div><div className="yacht-card-actions"><a href="#enquiry" className="btn-primary">Enquire</a><Link href="/contact" className="btn-ghost">View details</Link></div></div>
          </article>
        ))}
      </div>
    </>
  )
}
