"use client"

import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface SettingsModalProps {
  onClose: () => void
}

export function SettingsModal({ onClose }: SettingsModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Cài đặt</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Ngôn ngữ</h3>
            <select className="w-full p-2 border rounded">
              <option>Tiếng Việt</option>
              <option>English</option>
            </select>
          </div>

          <div>
            <h3 className="font-medium mb-2">Giao diện</h3>
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1">
                Sáng
              </Button>
              <Button variant="outline" className="flex-1">
                Tối
              </Button>
              <Button variant="secondary" className="flex-1">
                Hệ thống
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Lịch sử trò chuyện</h3>
            <Button variant="outline" className="w-full text-red-500 hover:text-red-600 hover:bg-red-50">
              Xóa lịch sử
            </Button>
          </div>

          <div className="pt-4 border-t">
            <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={onClose}>
              Lưu cài đặt
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

