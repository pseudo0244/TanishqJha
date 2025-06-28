// app/dashboard/page.tsx

'use client'

export default function DashboardPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Visitor Stats</h1>
      <div className="w-full h-[600px]">
        <iframe
          src="https://harshith.goatcounter.com/"
          className="w-full h-full border-0 rounded-xl shadow-lg"
          loading="lazy"
          title="GoatCounter Stats"
        />
      </div>
    </main>
  )
}
