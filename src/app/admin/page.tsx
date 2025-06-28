'use client'

import { useEffect, useState } from 'react'

export default function StatsPage() {
  const [stats, setStats] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://counter.dev/tanishqjha.com.json')
      .then((res) => res.json())
      .then((data) => {
        setStats(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading) return <p>Loading stats...</p>
  if (!stats) return <p>Failed to load stats</p>

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Website Stats</h1>
      <p>Total Pageviews: {stats.total}</p>
      <p>Today: {stats.today}</p>
      <p>Yesterday: {stats.yesterday}</p>
      <p>Average Daily: {stats.average}</p>
    </div>
  )
}
