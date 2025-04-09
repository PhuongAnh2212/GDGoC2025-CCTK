
"use client"
import Link from "next/link"
import type React from "react"
import {
  Database,
  Filter,
  Star,
  MessageSquare,
  Settings,
  Upload,
  Send,
  Mic,
  PenSquare,
  AlertTriangle,
} from "lucide-react"

import { useState } from "react"
import UnifiedSidebar from "@/components/unified-sidebar"
import DataTable from "@/components/data-table"
import { UploadModal } from "@/components/upload-modal"
import Header from "@/components/Header"
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
  const [isFirstMessage, setIsFirstMessage] = useState(true)
  const handleNewChat = () => {
    setMessages([])
    setIsFirstMessage(true)
  }
  const [showUploadModal, setShowUploadModal] = useState(false)
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
              {messages.length === 0 && isFirstMessage ? (
            <>
              <div className="text-center mb-8 mt-8">
                <h1 className="text-3xl font-bold text-blue-800">AI Purpose Lab</h1>
                <p className="text-gray-500">Ver 4.0 Mar 14</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <div className="bg-white p-4 rounded-lg border shadow-sm">
                  <div className="flex justify-center mb-2">
                    <PenSquare className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-medium text-center mb-4">Ví dụ</h3>
                  <p className="text-sm text-blue-600 hover:underline">Giải thích và mấy tính lượng từ bảng đồ họa →</p>
                </div>

                <div className="bg-white p-4 rounded-lg border shadow-sm">
                  <div className="flex justify-center mb-2">
                    <Star className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-medium text-center mb-4">Khả năng</h3>
                  <p className="text-sm">Ghi nhớ nội dung cuộc trò chuyện trong lịch sử</p>
                </div>

                <div className="bg-white p-4 rounded-lg border shadow-sm">
                  <div className="flex justify-center mb-2">
                    <AlertTriangle className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-medium text-center mb-4">Giới hạn</h3>
                  <p className="text-sm">Chỉ tạo ra thông tin dựa trên data của người dùng</p>
                </div>

                <div className="bg-white p-4 rounded-lg border shadow-sm">
                  <p className="text-sm">Mạng một chiều trong dây</p>
                </div>

                <div className="bg-white p-4 rounded-lg border shadow-sm">
                  <p className="text-sm">
                    Cho phép người dùng đánh giá từng bước mô hình đang được luyện tập trên data
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border shadow-sm">
                  <p className="text-sm">Mô hình và data quá lớn có thể quá tải server</p>
                </div>

                <div className="bg-white p-4 rounded-lg border shadow-sm">
                  <p className="text-sm">Đồng vị của carbohydrate</p>
                </div>

                <div className="bg-white p-4 rounded-lg border shadow-sm">
                  <p className="text-sm">Loại bỏ các yêu cầu phi pháp, không đạo đức</p>
                </div>

                <div className="bg-white p-4 rounded-lg border shadow-sm">
                  <p className="text-sm">Giới hạn nhận biết, thông tin sau năm 2024</p>
                </div>
              </div>
            </>
          ) : (messages.map((message) => (
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
              )))}

              {/* Timestamp at the end */}
              <div className="flex justify-end mb-4 text-sm text-gray-500">{getCurrentTime()}</div>
            </div>
          </main>

          {/* Input Area */}
          <div className="border-t p-4">
            <div className="max-w-4xl mx-auto flex items-center gap-2">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <PlusIcon width={20} height={20} className="text-blue-600" 
                onClick={() => setShowUploadModal(true)}/>
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
          {showUploadModal && <UploadModal onClose={() => setShowUploadModal(false)} />}
        </div>
      </div>
    </div>
  )
}


