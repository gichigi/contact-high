"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Dashboard() {
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Fetch contacts from the API
    fetch("/api/contacts")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch")
        return res.json()
      })
      .then((data) => {
        setContacts(data.contacts || [])
        setLoading(false)
      })
      .catch((err) => {
        console.error("Error fetching contacts:", err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Your Contacts</h1>
        <Link href="/">
          <Button variant="outline">Back to Home</Button>
        </Link>
      </div>

      {loading && <p>Loading contacts...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <form className="mb-8 p-4 border rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Add New Contact</h2>
        <div className="grid gap-4 mb-4">
          <Input type="text" name="name" placeholder="Contact name" required />
          <Input type="text" name="location" placeholder="Where did you meet?" />
          <Input type="text" name="notes" placeholder="Any notes to remember them by?" />
        </div>
        <Button type="submit">Add Contact</Button>
      </form>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {contacts && contacts.length > 0
          ? contacts.map((contact, index) => (
              <div key={index} className="border rounded-lg p-4 shadow-sm">
                <div className="font-bold text-lg">{contact.name}</div>
                <div className="text-sm text-gray-500">Met at: {contact.location}</div>
                <div className="text-sm italic mt-2">"{contact.notes}"</div>
              </div>
            ))
          : !loading && <p>No contacts yet. Add your first one!</p>}
      </div>
    </div>
  )
}
