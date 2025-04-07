// export default function ungdung() {
//     return (
//       <div className="p-4">
//         <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
//       </div>
//     );
//   }
"use client"
import Link from "next/link"
import type React from "react"

import { useState } from "react"
import UnifiedSidebar from "@/components/unified-sidebar"
import DataTable from "@/components/data-table"
import Header from "@/components/header"
import { PenLineIcon, Share2Icon, MicIcon, SendIcon, PlusIcon } from "@/components/icons"

// Message type definition
type Message = {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: string
}

export default function Home() {
  // State for messages and input
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Create any table for me with the fields of last name, first name, address, phone, and email.",
      sender: "user",
      timestamp: "2:03 PM, 15 Nov",
    },
  ])
  const [inputValue, setInputValue] = useState("")

  // Function to format current time
  const getCurrentTime = () => {
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes().toString().padStart(2, "0")
    const ampm = hours >= 12 ? "PM" : "AM"
    const formattedHours = hours % 12 || 12

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const day = now.getDate()
    const month = months[now.getMonth()]

    return `${formattedHours}:${minutes} ${ampm}, ${day} ${month}`
  }

  // Function to handle sending a message
  const handleSendMessage = () => {
    if (inputValue.trim() === "") return

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: getCurrentTime(),
    }

    setMessages([...messages, newMessage])
    setInputValue("")

    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: `I'll help you with that: "${inputValue}"`,
        sender: "ai",
        timestamp: getCurrentTime(),
      }

      setMessages((prevMessages) => [...prevMessages, aiResponse])
    }, 1000)
  }

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <UnifiedSidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <main className="flex-1 overflow-y-auto bg-gradient-to-b from-blue-50/80 to-white">
            <div className="max-w-4xl mx-auto px-4 py-6">
              {/* Messages */}
              {messages.map((message) => (
                <div key={message.id} className="mb-6">
                  {message.sender === "user" ? (
                    <div className="flex items-start gap-2">
                      <div className="flex-1">
                        <p className="text-gray-700">{message.content}</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="text-gray-500 hover:text-gray-700">
                          <PenLineIcon width={20} height={20} />
                        </button>
                        <button className="text-gray-500 hover:text-gray-700">
                          <Share2Icon width={20} height={20} />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-700 flex items-center justify-center rounded-sm">
                        <div className="text-white text-xs font-bold">AI</div>
                      </div>
                      <div className="flex-1">
                        <div className="font-bold mb-1">{message.timestamp}</div>
                        <p className="text-gray-700 mb-2">{message.content}</p>
                        {message.id === "1" && <DataTable />}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Timestamp at the end */}
              <div className="flex justify-end mb-4 text-sm text-gray-500">{getCurrentTime()}</div>
            </div>
          </main>

          {/* Input Area */}
          <div className="border-t p-4">
            <div className="max-w-4xl mx-auto flex items-center gap-2">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <PlusIcon width={20} height={20} className="text-blue-600" />
              </button>
              <div className="flex-1 relative">
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 p-1 rounded-full hover:bg-blue-50"
                  onClick={handleSendMessage}
                >
                  <SendIcon width={18} height={18} />
                </button>
                <input
                  type="text"
                  placeholder="Gửi yêu cầu"
                  className="w-full pl-12 pr-12 py-3 border rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                  <button className="p-1 text-gray-500 hover:text-gray-700">
                    <MicIcon width={18} height={18} />
                  </button>
                </div>
              </div>
              <button className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                <PlusIcon width={16} height={16} />
                <span>Hội thoại mới</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


