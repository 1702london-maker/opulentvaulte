'use client'

export default function MapEmbed() {
  return (
    <section className="contact-map-section">
      <iframe
        src="https://maps.google.com/maps?q=14+John+Dalton+Street,+Manchester,+M2+6JR&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="OPV Manchester Office"
      />
      <div className="contact-map-card">
        <span>OPV Manchester</span>
        <p>14 John Dalton Street</p>
        <small>Manchester · M2 6JR · England</small>
        <a href="https://maps.google.com/?q=14+John+Dalton+Street+Manchester" target="_blank" rel="noopener noreferrer">Get directions -&gt;</a>
      </div>
    </section>
  )
}
