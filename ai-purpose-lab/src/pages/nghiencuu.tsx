"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useChat } from "ai/react"
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
import { PenLineIcon, Share2Icon, MicIcon, SendIcon, PlusIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { LeftSidebar } from "@/components/left-sidebar"
import { RightSidebar } from "@/components/right-sidebar"
import { UploadModal } from "@/components/upload-modal"
import { SettingsModal } from "@/components/settings-modal"
import Image from "next/image"

// Sample data for past conversations
const pastConversations = [
  {
    id: "1",
    title: "Phân tích bài báo khoa học",
    date: "2:03 PM, 15 Nov",
    messages: [
      { role: "user", content: "Phân tích bài báo khoa học về nguyên tố hidro dưới đây" },
      {
        role: "assistant",
        content:
          'Bài báo khoa học "Hidro: Nguyên Tố Cơ Bản Cho Tương Lai Năng Lượng" được xuất bản trên tạp chí Nature Energy vào năm 2023, tập trung vào vai trò của hidro trong các ứng dụng năng lượng sạch. Nghiên cứu này phân tích các phương pháp sản xuất hidro, tính chất và ứng dụng trong tương lai.',
      },
    ],
  },
  {
    id: "2",
    title: "Mạng một chiều trong dây",
    date: "Yesterday, 10:45 AM",
    messages: [
      { role: "user", content: "Giải thích về mạng một chiều trong dây" },
      {
        role: "assistant",
        content:
          "Mạng một chiều trong dây là mô hình vật lý mô tả sự lan truyền của sóng hoặc hạt trong không gian một chiều. Trong mô hình này, các hạt chỉ có thể di chuyển theo một đường thẳng, thường được biểu diễn bằng một dây hoặc một ống.",
      },
    ],
  },
  {
    id: "3",
    title: "Đồng vị của carbohydrate",
    date: "Mar 12, 2023",
    messages: [
      { role: "user", content: "Giải thích về đồng vị của carbohydrate" },
      {
        role: "assistant",
        content:
          "Đồng vị của carbohydrate là các phân tử carbohydrate có cùng công thức phân tử nhưng khác nhau về cấu trúc không gian. Điều này dẫn đến sự khác biệt về tính chất vật lý và hóa học, ảnh hưởng đến chức năng sinh học của chúng trong cơ thể.",
      },
    ],
  },
]

// Sample data for AI models
const aiModels = [
  {
    id: "purpose-lab",
    name: "AI Purpose Lab",
    description: "Default model",
    logo: "AI",
    color: "bg-blue-600",
  },
  {
    id: "gemini",
    name: "Gemini",
    description: "Google AI",
    logo: "G",
    color: "bg-green-600",
  },
  {
    id: "turbo",
    name: "Turbo 3.5",
    description: "OpenAI",
    logo: "T",
    color: "bg-teal-600",
  },
]

export default function Home() {
  const [isFirstMessage, setIsFirstMessage] = useState(true)
  const [hasConversationData, setHasConversationData] = useState(false)
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false)
  const [leftSidebarContent, setLeftSidebarContent] = useState<
    "datasets" | "models" | "conversations" | "settings" | null
  >(null)
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [showSettingsModal, setShowSettingsModal] = useState(false)
  const [currentModel, setCurrentModel] = useState(aiModels[0])
  const chatContainerRef = useRef<HTMLDivElement>(null)

  const { messages, input, handleInputChange, handleSubmit, setMessages } = useChat()

  const handleNewChat = () => {
    setMessages([])
    setIsFirstMessage(true)
    setHasConversationData(false)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (input.trim()) {
      setIsFirstMessage(false)
      setHasConversationData(true)
      handleSubmit(e)
    }
  }

  const toggleLeftSidebar = (content: "datasets" | "models" | "conversations" | "settings" | null) => {
    if (leftSidebarContent === content && leftSidebarOpen) {
      setLeftSidebarOpen(false)
      setLeftSidebarContent(null)
    } else {
      setLeftSidebarOpen(true)
      setLeftSidebarContent(content)
      if (content === "settings") {
        setShowSettingsModal(true)
      }
    }
  }

  const loadConversation = (conversation: (typeof pastConversations)[0]) => {
    setMessages(conversation.messages)
    setIsFirstMessage(false)
    setHasConversationData(true)
    setLeftSidebarOpen(false)
  }

  const selectModel = (model: (typeof aiModels)[0]) => {
    setCurrentModel(model)
  }

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar Toggle */}
      <div className="fixed left-0 top-18 h-full z-10 transition-all duration-300 w-16 bg-white shadow-md flex flex-col">
        <div className="flex flex-col items-center py-4 space-y-6 flex-1">
          <Button
            variant={leftSidebarContent === "datasets" ? "secondary" : "ghost"}
            size="icon"
            onClick={() => toggleLeftSidebar("datasets")}
            className="relative"
          >
            <Database className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              2
            </span>
          </Button>

          <Button variant={leftSidebarContent === "filters" ? "secondary" : "ghost"} size="icon" onClick={() => {}}>
            <Filter className="h-5 w-5" />
          </Button>

          <Button
            variant={leftSidebarContent === "models" ? "secondary" : "ghost"}
            size="icon"
            onClick={() => toggleLeftSidebar("models")}
          >
            <div
              className={`h-6 w-6 ${currentModel.color} rounded-full flex items-center justify-center text-white text-xs`}
            >
              {currentModel.logo}
            </div>
          </Button>

          <Button
            variant={leftSidebarContent === "conversations" ? "secondary" : "ghost"}
            size="icon"
            onClick={() => toggleLeftSidebar("conversations")}
          >
            <MessageSquare className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex flex-col items-center py-4">
          <Button variant="ghost" size="icon" onClick={() => toggleLeftSidebar("settings")}>
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
      

      {/* Left Sidebar Content */}
      {leftSidebarOpen && (
        <LeftSidebar
          content={leftSidebarContent}
          onClose={() => setLeftSidebarOpen(false)}
          aiModels={aiModels}
          currentModel={currentModel}
          onSelectModel={selectModel}
          pastConversations={pastConversations}
          onSelectConversation={loadConversation}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col transition-all duration-300 ml-16 mr-80">
        {/* Chat Container */}
        <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-6 bg-gradient-to-b from-blue-50 to-white">
          {messages.length === 0 && isFirstMessage ? (
            <>
              <div className="text-center mb-8 mt-8">
                <h1 className="text-3xl font-bold text-blue-800">AI Purpose Lab</h1>
                <p className="text-gray-500">Ver 4.0 Mar 14</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <div className="bg-white p-8 rounded-lg border border-blue-200 shadow-sm">
                  <div className="flex justify-center mb-2">
                    <PenSquare className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-center mb-4 text-blue-900">Ví dụ</h3>
                  <p className="text-sm text-blue-600 hover:underline">Giải thích và mấy tính lượng từ bảng đồ họa →</p>
                </div>

                <div className="bg-white p-8 rounded-lg border border-blue-200 shadow-sm">
                  <div className="flex justify-center mb-2">
                    <Star className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-center mb-4 text-blue-900">Khả năng</h3>
                  <p className="text-sm">Ghi nhớ nội dung cuộc trò chuyện trong lịch sử</p>
                </div>

                <div className="bg-white p-8 rounded-lg border border-blue-200 shadow-sm">
                  <div className="flex justify-center mb-2">
                    <AlertTriangle className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-center mb-4 text-blue-900">Giới hạn</h3>
                  <p className="text-sm">Chỉ tạo ra thông tin dựa trên data của người dùng</p>
                </div>

                <div className="bg-white p-8 rounded-lg border border-blue-200 shadow-sm">
                  <p className="text-sm">Mạng một chiều trong dây</p>
                </div>

                <div className="bg-white p-8 rounded-lg border border-blue-200 shadow-sm">
                  <p className="text-sm">
                    Cho phép người dùng đánh giá từng bước mô hình đang được luyện tập trên data
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg border border-blue-200 shadow-sm">
                  <p className="text-sm">Mô hình và data quá lớn có thể quá tải server</p>
                </div>

                <div className="bg-white p-8 rounded-lg border border-blue-200 shadow-sm">
                  <p className="text-sm">Đồng vị của carbohydrate</p>
                </div>

                <div className="bg-white p-8 rounded-lg border border-blue-200 shadow-sm">
                  <p className="text-sm">Loại bỏ các yêu cầu phi pháp, không đạo đức</p>
                </div>

                <div className="bg-white p-8 rounded-lg border border-blue-200 shadow-sm">
                  <p className="text-sm">Giới hạn nhận biết, thông tin sau năm 2024</p>
                </div>
              </div>
            </>
          ) : (
            <div className="max-w-4xl mx-auto">
              {messages.map((message, index) => (
                <div key={index} className={`mb-6 ${message.role === "user" ? "text-right" : ""}`}>
                  <div
                    className={`inline-block max-w-[80%] p-4 rounded-lg ${
                      message.role === "user" ? "bg-blue-600 text-white" : "bg-white border shadow-sm"
                    }`}
                  >
                    {message.content}
                    {message.role === "assistant" && message.content.includes("Hidro") && (
                      <div className="mt-2 p-2 bg-gray-50 rounded text-sm">
                        <p className="font-medium">Hidro: Nguyên Tố Cơ Bản Cho Tương Lai Năng Lượng.pdf</p>
                        <p className="text-xs text-gray-500">Nature Energy (2023)</p>
                      </div>
                    )}
                  </div>
                  {message.role === "assistant" && index === messages.length - 1 && (
                    <div className="mt-4 flex bottom-0">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-blue-600 border-blue-200"
                        onClick={handleNewChat}
                      >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Hội thoại mới
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Chat Input */}
        {/* flex-1 overflow-y-auto p-6 bg-gradient-to-b from-blue-50 to-white */}
        <div className="fixed bottom-0 left-0 w-full border-t bg-white p-4">
          <form onSubmit={onSubmit} className="max-w-4xl mx-auto flex gap-2">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => setShowUploadModal(true)}
              className="shrink-0"
            >
              <Upload className="h-5 w-5" />
            </Button>

            <div className="flex-1 relative">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Gửi yêu cầu..."
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <Button
              type="submit"
              size="icon"
              className="shrink-0 bg-blue-600 hover:bg-blue-700"
              disabled={!input.trim()}
            >
              <Send className="h-5 w-5 color-white" />
            </Button>

            <Button type="button" variant="ghost" size="icon" className="shrink-0">
              <Mic className="h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
      {/* Settings Modal */}
      {showSettingsModal && (
        <SettingsModal
          onClose={() => {
            setShowSettingsModal(false)
            setLeftSidebarOpen(false)
          }}
        />
      )}
      {/* Right Sidebar */}
      <RightSidebar hasData={hasConversationData} />

      {/* Upload Modal */}
      {showUploadModal && <UploadModal onClose={() => setShowUploadModal(false)} />}

      
    </div>
  )
}

