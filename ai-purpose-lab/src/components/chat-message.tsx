export default function ChatMessage() {
  return (
    <div className="mb-6">
      <div className="flex gap-3">
        <div className="flex-shrink-0 w-8 h-8 bg-blue-700 flex items-center justify-center rounded-sm">
          <div className="text-white text-xs font-bold">AI</div>
        </div>
        <div className="flex-1">
          <div className="font-bold mb-1">ChatGPT</div>
          <p className="text-gray-700 mb-2">
            Create any table for me with the fields of last name, first name, address, phone, and email.
          </p>
        </div>
      </div>
    </div>
  )
}

