import { NextResponse } from "next/server"

// Simple API route that returns mock data
export async function GET() {
  // Return mock contacts data
  return NextResponse.json({
    success: true,
    contacts: [
      {
        id: 1,
        name: "Jamie Something",
        location: "Rooftop Bar",
        notes: "Talked about crypto for 45 min",
        addedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
      },
      {
        id: 2,
        name: "VC Guy (Alex?)",
        location: "Conference",
        notes: "Has a podcast about AI",
        addedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // Yesterday
      },
      {
        id: 3,
        name: "Cute Barista",
        location: "Coffee Shop",
        notes: "Makes the best flat white",
        addedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
      },
    ],
  })
}

// Simple server action for adding a contact
export async function addContact(formData: FormData) {
  "use server"

  // In a real app, this would save to a database
  // For now, just return success
  return {
    success: true,
    contact: {
      name: formData.get("name"),
      location: formData.get("location"),
      notes: formData.get("notes"),
    },
  }
}
