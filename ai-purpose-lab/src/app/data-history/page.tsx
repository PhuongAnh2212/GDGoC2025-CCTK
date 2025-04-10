"use client"

import type React from "react"

import { useState } from "react"
import UnifiedSidebar from "@/components/unified-sidebar"
import DataAnalysis from "@/components/data-analysis"
import Header from "@/components/header"
import { PenLineIcon, Share2Icon, MicIcon, SendIcon, PlusIcon } from "@/components/icons"

// Message type definition
type Message = {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: string
}

export default function DataHistoryPage() {
  // State for messages and input
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Đây là review từ khách hàng quy 1/2023 của nhà hàng của tôi, nhà hàng chuyên đồ hải sản ở quận 7, thành phố Hồ Chí Minh, phân tích chi tiết bảng này và gợi ý phương thức tối ưu chi phí vận hành",
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
        content: `I'll analyze that: "${inputValue}"`,
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
      <Header />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Will automatically show history view when navigating to this page */}
        <UnifiedSidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <main className="flex-1 overflow-y-auto bg-gradient-to-b from-blue-50/80 to-white">
            <div className="max-w-4xl mx-auto px-4 py-6">
              {/* Messages */}
              {messages.map((message, index) => (
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
                        {index === 0 && (
                          <>
                            {/* Data Files */}
                            <div className="mb-6 space-y-4">
                              <div className="bg-white p-4 rounded-lg border">
                                <h3 className="font-medium mb-1">review_nha_hang.csv</h3>
                                <div className="text-sm text-gray-500 mb-2">
                                  2,890 dòng - 1050 KB
                                  <br />
                                  Tệp CSV chứa đánh giá từ khách hàng về nhà hàng hải sản quận 7
                                </div>
                              </div>

                              <div className="bg-white p-4 rounded-lg border">
                                <h3 className="font-medium mb-1">tiktoker1.mp4</h3>
                                <div className="text-sm text-gray-500 mb-2">
                                  12:45 - 240 MB
                                  <br />
                                  Nội dung mời hai bạn gái giới thiệu món hải sản ở nhà hàng quận 7, trên sàn ăn, âm
                                  thanh hài hòa
                                </div>
                              </div>
                            </div>

                            {/* AI Response */}
                            <DataAnalysis />
                          </>
                        )}
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

