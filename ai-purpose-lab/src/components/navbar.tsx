export default function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center">
          <div className="flex space-x-8">
            <a href="#" className="px-3 py-2 text-sm font-medium text-white bg-blue-100 rounded-full">
              Ứng dụng
            </a>
            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
              Nghiên cứu
            </a>
            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
              Các học tập
            </a>
            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
              Về chúng tôi
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

