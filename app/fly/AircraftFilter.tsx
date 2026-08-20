'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'

export type Aircraft = {
  id: string
  name: string
  category: string
  range: string
  seats: string
  route: string
  image: string
}

const filters = ['All', 'Turboprop', 'Light Jet', 'Midsize', 'Heavy Jet', 'Ultra Long Range', 'Helicopter']

export default function AircraftFilter({ aircraft }: { aircraft: Aircraft[] }) {
  const [active, setActive] = useState('All')
  const visible = useMemo(() => active === 'All' ? aircraft : aircraft.filter(item => item.category === active), [active, aircraft])

  return (
    <>
      <div className="fly-filter-row">{filters.map(filter => <button type="button" className={active === filter ? 'active' : ''} onClick={() => setActive(filter)} key={filter}>{filter}</button>)}</div>
      <div className="fly-aircraft-grid">
        {visible.map(item => (
          <article className="fly-aircraft-card" key={item.id}>
            <div className="fly-aircraft-image"><Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover' }} /><span>{item.category}</span></div>
            <div className="fly-aircraft-body">
              <h3>{item.name}</h3>
              <p>{item.route}</p>
              <div><span>{item.range}</span><span>{item.seats} seats</span></div>
              <a href="#fly-enquiry">Request aircraft</a>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
