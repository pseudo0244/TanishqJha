// app/dashboard/page.tsx

'use client'

export default function DashboardPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Visitor Stats</h1>
      <div className="w-full h-[600px]">
        <script src="https://cdn.counter.dev/script.js" data-id="c25c7731-8368-47f0-a551-1dc1732efd98" data-utcoffset="6"></script>
      </div>
    </main>
  )
}
