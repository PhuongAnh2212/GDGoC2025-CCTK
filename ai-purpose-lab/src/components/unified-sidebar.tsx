"use client"

import { useState } from "react"
import { ChevronDownIcon, HistoryIcon, MessageSquareIcon } from "@/components/icons"

export default function UnifiedSidebar() {
  const [activeView, setActiveView] = useState<"chat" | "history">("chat")

  return (
    <div className="hidden md:flex flex-col w-64 border-r bg-white h-full">
      {/* Dynamic Content - Chat Mode */}
      {activeView === "chat" && (
        <div className="p-4 flex-grow overflow-y-auto">
          <h2 className="text-lg font-medium mb-2">Chế độ</h2>

          {/* Creative Mode */}
          <div className="mb-4">
            <label className="flex items-start gap-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
              <input type="radio" name="mode" className="mt-1" />
              <div>
                <div className="font-medium">Sáng tạo</div>
                <p className="text-sm text-gray-500">
                  "Creative mode" could refer to a chatbot or AI language model designed to assist and inspire
                  creativity.
                </p>
              </div>
            </label>
          </div>

          {/* Default Mode */}
          <div className="mb-4">
            <label className="flex items-start gap-2 p-3 border rounded-lg cursor-pointer bg-blue-50 border-blue-200">
              <input type="radio" name="mode" className="mt-1" defaultChecked />
              <div>
                <div className="font-medium">Mặc định</div>
                <p className="text-sm text-gray-500">
                  "Balance mode" generally refers to an AI chatbot or language model
                </p>
              </div>
            </label>
          </div>

          {/* Strict Mode */}
          <div className="mb-4">
            <label className="flex items-start gap-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
              <input type="radio" name="mode" className="mt-1" />
              <div>
                <div className="font-medium">Lập luận chặt chẽ</div>
                <p className="text-sm text-gray-500">"Strict mode" generally refers to an AI chatbot</p>
              </div>
            </label>
          </div>

          {/* Version Selector - Common to both views */}
          <div className="flex items-center justify-between p-2 mb-4">
            <span className="text-sm">Version Gemini v1.5</span>
            <ChevronDownIcon width={16} height={16} />
          </div>

          {/* Toggle Options - Common to both views */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-blue-600" defaultChecked />
              <span className="text-sm">Hiện dataset</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-blue-600" defaultChecked />
              <span className="text-sm">Hiện hội thoại cũ</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-blue-600" />
              <span className="text-sm">Chế độ tối</span>
            </label>
          </div>
        </div>
      )}

      {/* Dynamic Content - History Mode */}
      {activeView === "history" && (
        <div className="p-4 flex-grow overflow-y-auto">
          <h2 className="text-lg font-medium mb-2">Lịch sử data</h2>

          {/* CSV File */}
          <div className="mb-4">
            <div className="p-3 border rounded-lg cursor-pointer hover:bg-gray-50 bg-blue-50 border-blue-200">
              <div className="font-medium">review_nha_hang.csv</div>
              <p className="text-sm text-gray-500">
                2,890 dòng - 1050 KB
                <br />
                Tệp CSV chứa đánh giá từ khách hàng về nhà hàng hải sản quận 7
              </p>
            </div>
          </div>

          {/* MP4 File */}
          <div className="mb-4">
            <div className="p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
              <div className="font-medium">tiktoker1.mp4</div>
              <p className="text-sm text-gray-500">
                12:45 - 240 MB
                <br />
                Nội dung mời hai bạn gái giới thiệu món hải sản ở nhà hàng quận 7, trên sàn ăn, âm thanh hài hòa
              </p>
            </div>
          </div>

          {/* Version Selector - Common to both views */}
          <div className="flex items-center justify-between p-2 mb-4">
            <span className="text-sm">Version Gemini v1.5</span>
            <ChevronDownIcon width={16} height={16} />
          </div>

          {/* Toggle Options - Common to both views */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-blue-600" defaultChecked />
              <span className="text-sm">Hiện dataset</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-blue-600" defaultChecked />
              <span className="text-sm">Hiện hội thoại cũ</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-blue-600" />
              <span className="text-sm">Chế độ tối</span>
            </label>
          </div>
        </div>
      )}

      {/* Bottom Navigation - Fixed at bottom */}
      <div className="border-t flex shrink-0">
        <button
          className={`flex-1 py-3 flex items-center justify-center gap-1 ${
            activeView === "history" ? "text-white bg-blue-700 hover:bg-blue-800" : "text-blue-700 hover:bg-blue-50"
          }`}
          onClick={() => setActiveView("history")}
        >
          <HistoryIcon width={16} height={16} />
          <span className="text-sm">Lịch sử</span>
        </button>
        <button
          className={`flex-1 py-3 flex items-center justify-center gap-1 ${
            activeView === "chat" ? "text-white bg-blue-700 hover:bg-blue-800" : "text-blue-700 hover:bg-blue-50"
          }`}
          onClick={() => setActiveView("chat")}
        >
          <MessageSquareIcon width={16} height={16} />
          <span className="text-sm">Hội thoại</span>
        </button>
      </div>
    </div>
  )
}

