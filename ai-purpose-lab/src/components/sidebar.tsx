"use client"
import { ChevronDownIcon, HistoryIcon, MessageSquareIcon } from "@/components/icons"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import './sidebar.css'

interface SidebarProps {
  content: "mode" | "chats" | "settings" | null
  onClose: () => void
  aiModels: Array<{
    id: string
    name: string
    description: string
    logo: string
    color: string
  }>
  currentModel: {
    id: string
    name: string
    description: string
    logo: string
    color: string
  }
  onSelectModel: (model: any) => void
  pastConversations: Array<{
    id: string
    title: string
    date: string
    messages: Array<{
      role: string
      content: string
    }>
  }>
  onSelectConversation: (conversation: any) => void
}

export function Sidebar({
  content,
  onClose,
  aiModels,
  currentModel,
  onSelectModel,
  pastConversations,
  onSelectConversation,
}: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="hidden md:flex flex-col w-64 border-r bg-white">
      {/* Logo */}
      <div className="p-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-700 flex items-center justify-center">
            <div className="text-white font-bold">AI</div>
          </div>
          <div className="text-blue-700 font-bold">/Purpose Lab</div>
        </div>
      </div>

      {/* Modes Section */}
      <div className="p-4">
        <h2 className="text-lg font-medium mb-2 text-blue-500">Chế độ</h2>

        {/* Creative Mode */}
        <div className="mb-4">
          <label className="flex items-start gap-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
            <input type="radio" name="mode" className="mt-1" />
            <div>
              <div className="font-medium">Sáng tạo</div>
              <p className="text-sm text-gray-500">
                "Creative mode" could refer to a chatbot or AI language model designed to assist and inspire creativity.
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

        {/* Version Selector */}
        <div className="flex flex-col items-center">
          {/* Version Selector */}
          <div className="flex items-center justify-between p-2 mb-4 cursor-pointer" onClick={toggleDropdown}>
            <span className="text-sm">Version Gemini v1.5</span>
            <ChevronDownIcon width={16} height={16} />
          </div>

          {/* Dropdown list - only shows when isOpen is true */}
          {isOpen && (
            <ul className="list-none p-2 bg-white shadow-md rounded border mt-2">
              <li className="p-2 cursor-pointer hover:bg-gray-200">Version Gemini v1.0</li>
              <li className="p-2 cursor-pointer hover:bg-gray-200">Version Gemini v1.2</li>
              <li className="p-2 cursor-pointer hover:bg-gray-200">Version Gemini v1.5</li>
              <li className="p-2 cursor-pointer hover:bg-gray-200">Version Gemini v1.7</li>
            </ul>
          )}
        </div>

        {/* Toggle Options */}
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

      {/* Bottom Navigation */}
      <div className="mt-auto border-t flex">
        <button className="flex-1 py-3 flex items-center justify-center gap-1 text-blue-700 hover:bg-blue-50">
          <HistoryIcon width={16} height={16} />
          <span className="text-sm">Lịch sử</span>
        </button>
        <button className="flex-1 py-3 flex items-center justify-center gap-1 text-white bg-blue-700 hover:bg-blue-800">
          <MessageSquareIcon width={16} height={16} />
          <span className="text-sm">Hội thoại</span>
        </button>
      </div>
    </div>
  )
}

