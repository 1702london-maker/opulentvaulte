'use client'

import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

type ChartRow = Record<string, string | number>

function ChartPanel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="admin-chart-panel">
      <h2>{title}</h2>
      <div className="admin-chart-frame">{children}</div>
    </article>
  )
}

export default function AnalyticsCharts({
  serviceRows,
  monthRows,
  revenueRows,
  clientRows,
  membershipRows,
  referralRows,
  affiliateRows,
}: {
  serviceRows: ChartRow[]
  monthRows: ChartRow[]
  revenueRows: ChartRow[]
  clientRows: ChartRow[]
  membershipRows: ChartRow[]
  referralRows: ChartRow[]
  affiliateRows: ChartRow[]
}) {
  return (
    <div className="admin-chart-grid">
      <ChartPanel title="Enquiries by service">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={serviceRows}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="service" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="enquiries" fill="#2F6EA8" />
          </BarChart>
        </ResponsiveContainer>
      </ChartPanel>

      <ChartPanel title="Enquiries by month">
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={monthRows}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Line dataKey="enquiries" stroke="#A9863A" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </ChartPanel>

      <ChartPanel title="Revenue by month">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={revenueRows}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#1B3145" />
          </BarChart>
        </ResponsiveContainer>
      </ChartPanel>

      <ChartPanel title="New clients by month">
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={clientRows}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Line dataKey="clients" stroke="#2F6EA8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </ChartPanel>

      <ChartPanel title="Membership growth by tier">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={membershipRows}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="tier" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="members" fill="#A9863A" />
          </BarChart>
        </ResponsiveContainer>
      </ChartPanel>

      <ChartPanel title="Top referral sources">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={referralRows}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="source" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="enquiries" fill="#2F6EA8" />
          </BarChart>
        </ResponsiveContainer>
      </ChartPanel>

      <ChartPanel title="Affiliate performance">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={affiliateRows}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="affiliate" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="commission" fill="#1B3145" />
          </BarChart>
        </ResponsiveContainer>
      </ChartPanel>
    </div>
  )
}
