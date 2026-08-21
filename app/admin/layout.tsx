import Link from 'next/link'
import AdminLogout from './AdminLogout'

const links = [
  ['Dashboard', '/admin'],
  ['Enquiries', '/admin/enquiries'],
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <Link href="/admin" className="admin-mark">OPV</Link>
        <nav>
          {links.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>
        <AdminLogout />
      </aside>
      <section className="admin-main">{children}</section>
    </div>
  )
}
