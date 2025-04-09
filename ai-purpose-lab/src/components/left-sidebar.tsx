
"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LeftSidebarProps {
  content: "datasets" | "models" | "conversations" | "settings" | null
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

export function LeftSidebar({
  content,
  onClose,
  aiModels,
  currentModel,
  onSelectModel,
  pastConversations,
  onSelectConversation,
}: LeftSidebarProps) {
  return (
    <div className="fixed left-16 top-0 h-full w-64 bg-white border-r shadow-md z-10">
      {content === "datasets" && (
        <>
          <div className="flex justify-between items-center p-4 border-b">
            <div className="flex items-center">
              <div className="h-6 w-6 bg-blue-600 rounded-full flex items-center justify-center text-white mr-2">
                <span className="text-xs">2</span>
              </div>
              <h2 className="font-semibold">Datasets</h2>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="p-4">
            <h3 className="font-medium mb-2">Uploaded Datasets</h3>
            <div className="border rounded p-3 mb-2">
              <p className="text-sm font-medium">Hidro: Nguyên Tố Cơ Bản Cho Tương Lai Năng Lượng.pdf</p>
              <p className="text-xs text-gray-500">Nature Energy (2023)</p>
            </div>
            <div className="border rounded p-3">
              <p className="text-sm font-medium">Dataset_2.csv</p>
              <p className="text-xs text-gray-500">Uploaded on 15 Nov 2023</p>
            </div>
          </div>
        </>
      )}

      {content === "models" && (
        <>
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="font-semibold">AI Models</h2>
            <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="p-4">
            <h3 className="font-medium mb-2">Select Model</h3>
            <div className="space-y-2">
              {aiModels.map((model) => (
                <div
                  key={model.id}
                  className={`flex items-center p-2 rounded cursor-pointer ${
                    currentModel.id === model.id ? "bg-blue-50 border border-blue-200" : "hover:bg-gray-100"
                  }`}
                  onClick={() => onSelectModel(model)}
                >
                  <div
                    className={`h-8 w-8 ${model.color} rounded-full flex items-center justify-center text-white mr-3`}
                  >
                    {model.logo}
                  </div>
                  <div>
                    <p className="font-medium">{model.name}</p>
                    <p className="text-xs text-gray-500">{model.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {content === "conversations" && (
        <>
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="font-semibold">Conversations</h2>
            <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="p-4 space-y-2">
            {pastConversations.map((conversation) => (
              <div
                key={conversation.id}
                className="p-2 rounded hover:bg-gray-100 cursor-pointer"
                onClick={() => onSelectConversation(conversation)}
              >
                <p className="font-medium">{conversation.title}</p>
                <p className="text-xs text-gray-500">{conversation.date}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

