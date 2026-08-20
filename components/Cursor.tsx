'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return

    const dot  = dotRef.current!
    const ring = ringRef.current!

    let mx = 0, my = 0
    let rx = 0, ry = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      dot.style.left = mx + 'px'
      dot.style.top  = my + 'px'
    }

    const tick = () => {
      rx += (mx - rx) * 0.14
      ry += (my - ry) * 0.14
      ring.style.left = rx + 'px'
      ring.style.top  = ry + 'px'
      requestAnimationFrame(tick)
    }

    const expand = () => ring.classList.add('cursor-expand')
    const shrink = () => ring.classList.remove('cursor-expand')

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button, .prop-card, .service-tile, [data-cursor]')
      .forEach(el => { el.addEventListener('mouseenter', expand); el.addEventListener('mouseleave', shrink) })

    tick()
    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div ref={dotRef} className="opv-cursor-dot" />
      <div ref={ringRef} className="opv-cursor-ring">
        <span ref={labelRef} className="cursor-label">Explore</span>
      </div>
    </>
  )
}
