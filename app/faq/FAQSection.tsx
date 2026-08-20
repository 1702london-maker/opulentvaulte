'use client'

import { useMemo, useState } from 'react'

export type FAQ = {
  id: string
  category: string
  question: string
  answer: string
}

function LinkedAnswer({ text }: { text: string }) {
  const parts = text.split(/(\+44 7385 694230|hello@opulentvault\.co\.uk)/g)

  return (
    <>
      {parts.map((part, index) => {
        if (part === '+44 7385 694230') {
          return <a key={`${part}-${index}`} href="tel:+447385694230">{part}</a>
        }

        if (part === 'hello@opulentvault.co.uk') {
          return <a key={`${part}-${index}`} href="mailto:hello@opulentvault.co.uk">{part}</a>
        }

        return part
      })}
    </>
  )
}

export default function FAQSection({ faqs }: { faqs: FAQ[] }) {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null)

  const categories = useMemo(() => ['All', ...Array.from(new Set(faqs.map(faq => faq.category)))], [faqs])

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase()

    return faqs.filter(faq => {
      const matchesCategory = activeCategory === 'All' || faq.category === activeCategory
      const matchesQuery = normalized === '' ||
        faq.question.toLowerCase().includes(normalized) ||
        faq.answer.toLowerCase().includes(normalized)

      return matchesCategory && matchesQuery
    })
  }, [activeCategory, faqs, query])

  const grouped = useMemo(() => {
    return filtered.reduce<Record<string, FAQ[]>>((groups, faq) => {
      groups[faq.category] = groups[faq.category] ?? []
      groups[faq.category].push(faq)
      return groups
    }, {})
  }, [filtered])

  return (
    <>
      <section className="faq-search-section">
        <div className="faq-search-wrap">
          <label className="faq-search-field">
            <input
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Search questions - try 'pricing', 'security', 'aircraft'..."
            />
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </label>

          <div className="faq-category-list" aria-label="FAQ categories">
            {categories.map(category => (
              <button
                key={category}
                type="button"
                className={activeCategory === category ? 'is-active' : ''}
                onClick={() => {
                  setActiveCategory(category)
                  setOpenId(null)
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-accordion-section">
        {filtered.length === 0 ? (
          <div className="faq-empty">
            <p>Nothing found - try calling us instead.</p>
            <a href="tel:+447385694230">+44 7385 694230</a>
          </div>
        ) : (
          Object.entries(grouped).map(([category, items]) => (
            <div key={category} className="faq-group">
              <div className="faq-group-label">{category}</div>
              {items.map(faq => {
                const isOpen = openId === faq.id

                return (
                  <article key={faq.id} className="faq-item">
                    <button
                      type="button"
                      className="faq-question"
                      aria-expanded={isOpen}
                      onClick={() => setOpenId(isOpen ? null : faq.id)}
                    >
                      <span>{faq.question}</span>
                      <strong>{isOpen ? '-' : '+'}</strong>
                    </button>
                    <div className={`faq-answer-shell${isOpen ? ' is-open' : ''}`}>
                      <p>
                        <LinkedAnswer text={faq.answer} />
                      </p>
                    </div>
                  </article>
                )
              })}
            </div>
          ))
        )}
      </section>
    </>
  )
}
