"use client"

import type React from "react"
import "./style/sample-answer.css"
import { useState, useRef, useEffect } from "react"
import { useChat } from "ai/react"
import "./style/annotation.css"
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
import { Button } from "@/components/ui/button"
import { LeftSidebar } from "@/components/left-sidebar"
import { RightSidebar } from "@/components/right-sidebar"
import { UploadModal } from "@/components/upload-modal"
import { SettingsModal } from "@/components/settings-modal"
import Image from "next/image"

const annotations = [
  {
    word: "nguyên tử",
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
  },
  {
    word: "vũ trụ",
    description:
      "Hydro là một nguyên tố hóa học trong hệ thống tuần hoàn các nguyên tố với nguyên tử số bằng 1, nguyên tử khối bằng 1 u.",
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
  const [isWaiting, setIsWaiting] = useState(false)
  
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
          content: `
                <div class="chatbot-content">
                  <h2 class="section-header">1. Tìm hiểu về Hidro</h2>
                  
                  <p>Hidro là chất phi kim có đặc tính khử, ở nhiệt độ phù hợp sẽ kết hợp với đơn chất oxi và các nguyên tố oxi có trong các oxi kim loại. Những phản ứng hóa học này có tính tỏa nhiệt nhiệt.</p>
                  
                  <p>Số hiệu nguyên tử của Hidro là 1, nguyên tử khối cũng tương đương bằng 1. Cấu hình electron cụ thể thuộc chu kì 1, nhóm IA. Công thức đơn chất của Hidro sử dụng có định là H2, còn phân tử khối được xác định bằng 2.</p>
                  
                  <h2 class="section-header">2. Phân tích về tính chất hóa học của Hidro</h2>
                  
                  <p>Không ít người trong quá trình học tập và nghiên cứu cần thông tin rõ về <strong>trình bày tính chất hóa học của Hidro</strong>. Có thể thực hiện phản ứng với nhiều loại chất khác tạo thành kết quả riêng biệt.</p>
                  
                  <h3 class="subsection-title">2.1. Hidro khi phản ứng với oxi</h3>
                  
                  <p>Nghiên cứu về <strong>tính chất hóa học của Hidro oxi nước</strong> cho thấy hoàn toàn kết hợp được với oxi trong nhiều tình huống khác nhau. Chất này sẽ cháy trong môi trường oxi tốt với phương trình hóa học:</p>
                  
                  <p style="text-align: center; font-style: italic;">2H2 + O2 → 2H2O</p>
                  
                  <p>Theo phân tích thì hỗn hợp của H2 và O2 khi kết hợp với nhau sẽ mang tính chất nổ. Và tác động nổ mạnh nhất khi cho với tỷ lệ tương ứng H2 : O2 là 2:1 cụ thể về thể tích.</p>
                  
                  <h3 class="subsection-title">2.2. Hidro phản ứng với oxit kim loại</h3>
                  
                  <p>Thực tế H2 này còn có tác dụng với một số dạng oxi kim loại. Một số dạng phổ biến thường thấy như FeO, CuO, Fe2O3, ... Hidro khử được khá nhiều oxi kim loại ở nền nhiệt độ cao hình thành kim loại và dạng hơi nước. Ví dụ: công thức kết hợp <strong>nêu tính chất hóa học của Hidro</strong>:</p>
                  
                  <p style="text-align: center; font-style: italic;">FeO + H2 -> Fe + H2O</p>
                  
                  <p style="text-align: center; font-style: italic;">H2 + CuO -> H2O + Cu</p>
                  
                  <p>Nhiều chuyên gia sau khi nghiên cứu đã cho ra kết luận Hidro phản ứng với đồng oxit mạnh mẽ. Khoảng nhiệt độ tác dụng nhanh chóng là khoảng 400 độ C khi đưa vào môi trường.</p>
                  
                  <h3 class="subsection-title">2.3. Hidro tác dụng với phi kim</h3>
                  
                  <p>Phân tích về <strong>tính chất hóa học của Hidro</strong> có phản ứng với các loại phi kim ở nền nhiệt độ cao. Khi đưa vào trong cùng môi trường sẽ hình thành chất khác. Một số kết hợp thường thấy phổ biến như:</p>
                  
                  <p style="text-align: center; font-style: italic;">2H2 + O2 -> 2H20</p>
                  
                  <p style="text-align: center; font-style: italic;">H2 + S -> H2S</p>
                  
                  <h3 class="subsection-title">2.4. Hidro kết hợp với phi kim halogen</h3>
                  
                  <p>Kết quả đưa Hidro có thể phản ứng với các loại phi kim halogen hình thành khí Hidro halogenua. Hợp chất này hoàn toàn dễ tan trong môi trường nước và tạo ra dung dịch axit halogenhidric. Một số tác dụng khi kết hợp chi tiết:</p>
                  
                  <p style="text-align: center; font-style: italic;">H2 + F2 -> 2HF</p>
                  
                  <p style="text-align: center; font-style: italic;">H2 + I2 ->2HI</p>
                  
                  <h3 class="subsection-title">2.5. Hidro có phản ứng với các dạng kim loại</h3>
                  
                  <p>Phân tích về <strong>tính chất hóa học của Hidro lớp 8</strong> có khả năng tác dụng với các dạng kim loại khác nhau hình thành muối Hidrua. Đây là một nghiên cứu rất hữu ích để hiện tại nhiều xưởng sản xuất đã ứng dụng vào nhiều hoạt động khác nhau phục vụ cuộc sống.</p>
                  
                  <p>Công thức của phản ứng được thiết lập với dạng cụ thể là M + H2 -> MHx. Một số phản ứng trên thực tế đã tổng hợp để các bạn tìm hiểu rõ hơn về tính chất hóa học này:</p>
                  
                  <p style="text-align: center; font-style: italic;">Mg + H2 -> MgH2</p>
                  
                  <p style="text-align: center; font-style: italic;">Na + H2 -> NaH</p>
                  
                  <div class="separator"></div>
                </div>
                `}
            // Process the content to add annotations
        assistantResponse.content = processContent(assistantResponse.content)

        setMessages((prevMessages) => [...prevMessages, assistantResponse])
        setIsWaiting(false)
      }, 2000)
    }
  }
  //                   _ooOoo_
  //                  o8888888o
  //                  88" . "88
  //                  (| -_- |)
  //                  O\  =  /O
  //               ____/`---'\____
  //             .'  \\|     |//  `.
  //            /  \\|||  :  |||//  \
  //           /  _||||| -:- |||||-  \
  //           |   | \\\  -  /// |   |
  //           | \_|  ''\---/''  |   |
  //           \  .-\__  `-`  ___/-. /
  //         ___`. .'  /--.--\  `. . __
  //      ."" '<  `.___\_<|>_/___.'  >'"".
  //     | | :  `- \`.;`\ _ /`;.`/ - ` : | |
  //     \  \ `-.   \_ __\ /__ _/   .-` /  /
  //======`-.____`-.___\_____/___.-`____.-'======
  //                   `=---='
  //
  //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  //          佛祖保佑           永无BUG
  //         Buddha Bless        Never Crash

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

  //                   _ooOoo_
  //                  o8888888o
  //                  88" . "88
  //                  (| -_- |)
  //                  O\  =  /O
  //               ____/`---'\____
  //             .'  \\|     |//  `.
  //            /  \\|||  :  |||//  \
  //           /  _||||| -:- |||||-  \
  //           |   | \\\  -  /// |   |
  //           | \_|  ''\---/''  |   |
  //           \  .-\__  `-`  ___/-. /
  //         ___`. .'  /--.--\  `. . __
  //      ."" '<  `.___\_<|>_/___.'  >'"".
  //     | | :  `- \`.;`\ _ /`;.`/ - ` : | |
  //     \  \ `-.   \_ __\ /__ _/   .-` /  /
  //======`-.____`-.___\_____/___.-`____.-'======
  //                   `=---='
  //
  //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  //          佛祖保佑           永无BUG
  //         Buddha Bless        Never Crash

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
      const styleElement = document.createElement("style")
      document.head.appendChild(styleElement)
      return () => {
        document.head.removeChild(styleElement)
      }
    }, [])

  return (
    <div className="flex h-screen bg-gray-50 font-manrope">
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
      <div className="flex-1 flex flex-col transition-all duration-300 ml-16 mr-80 font-manrope">
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
            //                   _ooOoo_
            //                  o8888888o
            //                  88" . "88
            //                  (| -_- |)
            //                  O\  =  /O
            //               ____/`---'\____
            //             .'  \\|     |//  `.
            //            /  \\|||  :  |||//  \
            //           /  _||||| -:- |||||-  \
            //           |   | \\\  -  /// |   |
            //           | \_|  ''\---/''  |   |
            //           \  .-\__  `-`  ___/-. /
            //         ___`. .'  /--.--\  `. . __
            //      ."" '<  `.___\_<|>_/___.'  >'"".
            //     | | :  `- \`.;`\ _ /`;.`/ - ` : | |
            //     \  \ `-.   \_ __\ /__ _/   .-` /  /
            //======`-.____`-.___\_____/___.-`____.-'======
            //                   `=---='
            //
            //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
            //          佛祖保佑           永无BUG
            //         Buddha Bless        Never Crash
            <div className="max-w-4xl mx-auto">
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
            </div>
          )}
        </div>

        {/* Chat Input */}
        {/* flex-1 overflow-y-auto p-6 bg-gradient-to-b from-blue-50 to-white */}
        <div className="fixed bottom-0 ml-9 left-0 w-[80%] border-t border-gray-300 bg-white p-4">
          <form onSubmit={onSubmit} className="max-w-4xl mx-auto flex gap-2">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => setShowUploadModal(true)}
              className="shrink-0 border border-gray-300 bg-white-600 hover:bg-gray-300"
              >
              <Upload className="h-5 w-5" />
            </Button>

            <div className="flex-1 relative">
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
          </form>
        </div>
      </div>
      {showSettingsModal && (
        <SettingsModal
          onClose={() => {
            setShowSettingsModal(false)
            setLeftSidebarOpen(false)
          }}
        />
      )}
      <RightSidebar hasData={hasConversationData} />

      {showUploadModal && <UploadModal onClose={() => setShowUploadModal(false)} />}
      
    </div>
  )
}

