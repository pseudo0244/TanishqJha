// app/dashboard/page.tsx

'use client'

export default function DashboardPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Visitor Stats</h1>
      <div className="w-full h-[600px]">
        <script defer src="https://cloud.umami.is/script.js" data-website-id="59856e91-5f7e-4988-bf2b-e1976f3b3fdf"></script>
      </div>
    </main>
  )
}
