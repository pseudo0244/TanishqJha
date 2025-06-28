import { type NextRequest, NextResponse } from "next/server"

// In-memory storage for demo (use a real database in production)
let analyticsData: any[] = []

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Add server-side data
    const event = {
      ...data,
      serverTimestamp: new Date().toISOString(),
      ip: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown",
      userAgent: request.headers.get("user-agent") || "unknown",
      origin: request.headers.get("origin") || "unknown",
    }

    analyticsData.push(event)

    // Keep only last 10000 events to prevent memory issues
    if (analyticsData.length > 10000) {
      analyticsData = analyticsData.slice(-10000)
    }

    return NextResponse.json({ success: true, eventId: event.serverTimestamp })
  } catch (error) {
    console.error("Analytics tracking error:", error)
    return NextResponse.json({ error: "Failed to track event" }, { status: 500 })
  }
}

export async function GET() {
  try {
    return NextResponse.json({
      events: analyticsData,
      total: analyticsData.length,
      lastUpdated: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Analytics fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch analytics" }, { status: 500 })
  }
}

// Optional: Add a DELETE endpoint to clear data
export async function DELETE() {
  try {
    analyticsData = []
    return NextResponse.json({ success: true, message: "Analytics data cleared" })
  } catch (error) {
    return NextResponse.json({ error: "Failed to clear data" }, { status: 500 })
  }
}
