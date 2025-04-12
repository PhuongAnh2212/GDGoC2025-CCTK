"use client"

import type React from "react"
import "./style/annotation.css"

import { useState, useRef, useEffect } from "react"
import { useChat } from "ai/react"
import {
  Database,
  Filter,
  Menu,
  Star,
  MessageSquare,
  Settings,
  Upload,
  Send,
  Mic,
  PenSquare,
  AlertTriangle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import UnifiedSidebar from "@/components/unified-sidebar"
import { UploadModal } from "@/components/upload-modal"

const annotations = [
  {
    word: "Hydro",
    description:
      "Hydro là một nguyên tố hóa học trong hệ thống tuần hoàn các nguyên tố với nguyên tử số bằng 1, nguyên tử khối bằng 1 u.",
  },
  {
    word: "electron",
    description: "Electron hay điện tử, là một hạt hạ nguyên tử, có ký hiệu là e⁻ hay β⁻, mà điện tích của nó bằng trừ một điện tích cơ bản."
  },
  {
    word: "hoá học hữu cơ",
    description: "Hóa hữu cơ hay hóa học hữu cơ là một phân ngành hóa học nghiên cứu về cấu trúc, tính chất, thành phần và phản ứng hóa học của " +
                "những hợp chất hữu cơ và vật liệu hữu cơ (các hợp chất chứa carbon)"
  }
]
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


export default function Home() {
  const [isFirstMessage, setIsFirstMessage] = useState(true)
  const [menuSidebarOpen, setMenuSidebarOpen] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)
  const [hasConversationData, setHasConversationData] = useState(false)
  const [menuSidebarContent, setMenuSidebarContent] = useState<
    "menu" | "chat" | null
  >(null)
  const [showUploadModal, setShowUploadModal] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  // const { messages, input, handleInputChange, handleSubmit, setMessages } = useChat()
  const {
    messages,
    append,
    setMessages,
    handleSubmit: originalHandleSubmit,
    input,
    handleInputChange,
    isLoading,
  } = useChat({
    api: "/api/chat",
  })
  const handleNewChat = () => {
    setMessages([])
    setIsFirstMessage(true)
    setHasConversationData(false)
  }

  const loadConversation = (conversation: (typeof pastConversations)[0]) => {
    setMessages(conversation.messages)
    setIsFirstMessage(false)
    setHasConversationData(true)
    setMenuSidebarOpen(false)
  }

  useEffect(() => {
    const styleElement = document.createElement("style")
    document.head.appendChild(styleElement)

    return () => {
      document.head.removeChild(styleElement)
    }
  }, [])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (input.trim()) {
      setIsFirstMessage(false)
      setHasConversationData(true)

      // Add the user message
      const userMessage = { role: "user", content: input }
      setMessages([...messages, userMessage])

      // Clear input
      handleInputChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>)

      // Set waiting state
      setIsWaiting(true)

      // Wait for 2 seconds
      setTimeout(() => {
        // Add the predefined assistant response
        const assistantResponse = {
          role: "assistant",
          content:
            "<p>Phản ứng oxy hóa khử hay còn được gọi là oxy hóa hoàn nguyên trong <span class='underline-word'>hóa học hữu cơ</span> là một loại phản ứng hóa học có sự thay " + 
            "đổi trạng thái oxy hóa hay số oxy hóa của tác chất. Sự oxy hóa là sự nhường, cho, mất đi <span class='underline-word'>electron</span> hay sự tăng số oxy hóa. " + 
            "Ngược lại, sự khử là sự nhận electron hay giảm số oxy hóa.</p>"}
            // Process the content to add annotations
        assistantResponse.content = processContent(assistantResponse.content)

        setMessages((prevMessages) => [...prevMessages, assistantResponse])
        setIsWaiting(false)
      }, 2000)
    }
  }
  const renderMessageContent = (content: string) => {
    if (content.includes("<span class='underline-word'>") || content.includes("<p>")) {
      return (
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="relative interactive-text"
        />
      )
    }
    return content
  }

  useEffect(() => {
    // Add event listeners for the underlined words
    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.classList.contains("underline-word")) {
        target.style.backgroundColor = "#D3EDFA"
      }
    }
  
    // Set back to black when mouse leaves
    const handleLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.classList.contains("underline-word")) {
        target.style.backgroundColor = "white"
      }
    }
  
    document.addEventListener("mouseover", handleHover)
    document.addEventListener("mouseout", handleLeave)
  
    return () => {
      document.removeEventListener("mouseover", handleHover)
      document.removeEventListener("mouseout", handleLeave)
    }
  }, [])
  const processContent = (content: string) => {
    let processedContent = content

    // Process each annotation
    annotations.forEach((annotation) => {
      // Case insensitive search for the word
      const regex = new RegExp(`\\b${annotation.word}\\b`, "gi")

      // Replace with underlined version that has data attribute for description
      processedContent = processedContent.replace(
        regex,
        `<span class='underline-word' data-description="${annotation.description}">${annotation.word}</span>`,
      )
    })
    return processedContent
  }
  
  const toggleMenuSidebar = (content: "menu" | "chat" | null) => {
    if (menuSidebarContent === content && menuSidebarOpen) {
      setMenuSidebarOpen(false)
      setMenuSidebarContent(null)
    } else {
      setMenuSidebarOpen(true)
      setMenuSidebarContent(content)
    }
  }
  return (
    <div className="flex h-screen bg-gray-50 font-manrope">
      {/* Toggle sidebar */}
      <div className="fixed left-0 top-18 h-full z-10 transition-all duration-300 w-16 bg-white shadow-md flex flex-col">
        <div className="flex flex-col items-center py-4 space-y-6 flex-1">
          <Button
            variant={menuSidebarContent === "menu" ? "secondary" : "ghost"}
            size="icon"
            onClick={() => toggleMenuSidebar("menu")}
            className="relative"
          >
            <Menu className="h-5 w-5" />
            
          </Button>
          <Button
            variant={menuSidebarContent === "chat" ? "secondary" : "ghost"}
            size="icon"
            onClick={() => toggleMenuSidebar("chat")}
            className="relative"
          >
            <MessageSquare className="h-5 w-5" />
          </Button>
        </div>
      </div>
      {/* Sidebar */}
      {menuSidebarContent && (
        <UnifiedSidebar 
        content={menuSidebarContent}
        onClose={() => setMenuSidebarOpen(false)}
        pastConversations={pastConversations}
        onSelectConversation={loadConversation}
        />)
      }
      
      {/* Main */}
      <div className=" flex-1 flex flex-col transition-all duration-300 w-full">
        {/* Chat container */}
        <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-6 pt-5 w-full bg-gradient-to-b top-20 from-blue-50 to-white">
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
        )
        : (<div className="max-w-4xl mx-auto">
          {messages.map((message, index) => (
            <div key={index} className={`mb-6 ${message.role === "user" ? "text-right" : ""}`}>
              <div
                className={`inline-block max-w-[80%] p-4 rounded-lg ${
                  message.role === "user" ? "bg-blue-600 text-white" : "bg-white border shadow-sm"
                }`}
              >
                {message.role === "assistant" ? renderMessageContent(message.content) : message.content}
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
          {isWaiting && (
                <div className="message assistant">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              )}
        </div>)}
        </div>
      </div>


      {/* Input area */}
      <div className="fixed bottom-0 left-0 w-full border-t border-gray-300 bg-white p-4">
        <form onSubmit={onSubmit} className="max-w-4xl mx-auto flex gap-2 px-4">
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => setShowUploadModal(true)}
            className="shrink-0 border border-gray-300 bg-white-600 hover:bg-gray-300"
          >
            <Upload className="color-white h-5 w-5" />
          </Button>

          <div className="flex-1 relative w-60">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Gửi yêu cầu..."
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              <Mic className="h-5 w-5" />
            </Button>
          </div>

          <Button
            type="submit"
            size="icon"
            className="shrink-0 bg-blue-800 hover:bg-blue-700 text-white transition-colors duration-200"
            disabled={!input.trim()}
          >
            <Send className="h-5 w-5 color-white" />
          </Button>

          {/* <Button type="button" variant="ghost" size="icon" className="shrink-0">
            <Mic className="h-5 w-5" />
          </Button> */}
        </form>
      </div>

      {/* Upload Modal */}
      {showUploadModal && <UploadModal onClose={() => setShowUploadModal(false)} />}
    </div>
  )
}