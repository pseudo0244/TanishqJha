'use client'

import { useEffect, useState } from 'react'

type DailyStats = {
  count: number
  label: string
}

export default function GoatCounterStats() {
  const [data, setData] = useState<DailyStats[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://tanishqjha.goatcounter.com/api/v0/stats.json?req=day')
      .then((res) => res.json())
      .then((resData) => {
        setData(resData.stats)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error fetching GoatCounter stats:', err)
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-8">
      <h1 className="text-3xl font-bold mb-6">GoatCounter Analytics</h1>
      {loading ? (
        <p>Loading...</p>
      ) : data ? (
        <ul className="space-y-4">
          {data.map((day, idx) => (
            <li key={idx} className="p-4 bg-gray-100 rounded-md">
              <strong>{day.label}:</strong> {day.count} visits
            </li>
          ))}
        </ul>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  )
}
