import { ChevronDownIcon, HistoryIcon, MessageSquareIcon } from "@/components/icons"

export default function DataHistorySidebar() {
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

      {/* Data History Section */}
      <div className="p-4">
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

        {/* Version Selector */}
        <div className="flex items-center justify-between p-2 mb-4">
          <span className="text-sm">Version Gemini v1.5</span>
          <ChevronDownIcon size={16} />
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
        <button className="flex-1 py-3 flex items-center justify-center gap-1 text-white bg-blue-700 hover:bg-blue-800">
          <HistoryIcon size={16} />
          <span className="text-sm">Lịch sử</span>
        </button>
        <button className="flex-1 py-3 flex items-center justify-center gap-1 text-blue-700 hover:bg-blue-50">
          <MessageSquareIcon size={16} />
          <span className="text-sm">Hội thoại</span>
        </button>
      </div>
    </div>
  )
}

