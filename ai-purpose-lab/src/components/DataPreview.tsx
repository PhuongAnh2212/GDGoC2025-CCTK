"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

interface DataPreviewProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  fileName: string
}

export default function DataPreview({ isOpen, onClose, imageSrc, fileName }: DataPreviewProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-auto">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle>{fileName}</DialogTitle>
          <button onClick={onClose} className="rounded-full p-1 hover:bg-gray-100">
          </button>
        </DialogHeader>
        <div className="relative w-full h-[500px]">
          <Image src={"/placeholder.svg"} alt={fileName} fill className="object-contain" priority />
        </div>
      </DialogContent>
    </Dialog>
  )
}
