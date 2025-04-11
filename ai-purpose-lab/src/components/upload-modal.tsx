"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

interface UploadModalProps {
  onClose: () => void
}

export function UploadModal({ onClose }: UploadModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 mx-4">
        <div className="flex flex-col items-center">
          <div className="border-2 border-dashed border-blue-200 rounded-lg p-8 w-full mb-4 bg-blue-50/50">
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <Image
                  src="/placeholder.svg?height=80&width=120"
                  alt="Upload files"
                  width={120}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">
                <span className="text-gray-700">Drag & drop </span>
                <span className="text-blue-500">images</span>
                <span className="text-gray-700">,</span>
              </h3>
              <h3 className="text-xl font-medium mb-2">
                <span className="text-blue-500">videos</span>
                <span className="text-gray-700">, or any </span>
                <span className="text-blue-500">file</span>
              </h3>
              <p className="text-gray-500 mb-2">
                or <span className="text-blue-500 underline cursor-pointer">browse files</span> on your computer
              </p>
            </div>
          </div>

          <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white" onClick={onClose}>
            Upload
          </Button>
        </div>
      </div>
    </div>
  )
}

