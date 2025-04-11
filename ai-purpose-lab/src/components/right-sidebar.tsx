import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

interface RightSidebarProps {
  hasData: boolean
}

export function RightSidebar({ hasData }: RightSidebarProps) {
  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-white border-l shadow-md z-10 overflow-y-auto">
    {/* <div className="hidden md:flex flex-col w-80 border-r bg-white border-l shadow-md z-10 overflow-y-auto"> */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-blue-800 mb-4">Biểu đồ</h2>

        <div className="border rounded-lg p-4 mb-6">
          {hasData ? (
            <div className="w-full h-64 bg-blue-50 rounded-lg flex items-center justify-center mb-2">
              <svg width="100%" height="100%" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                {/* Large central node */}
                <circle cx="150" cy="100" r="25" fill="#0a2463" />

                {/* Medium nodes */}
                <circle cx="70" cy="150" r="15" fill="#0a2463" />
                <circle cx="230" cy="130" r="15" fill="#0a2463" />
                <circle cx="370" cy="80" r="15" fill="#0a2463" />

                {/* Small nodes and connections */}
                <circle cx="120" cy="50" r="5" fill="#0a2463" />
                <circle cx="180" cy="40" r="5" fill="#0a2463" />
                <circle cx="220" cy="70" r="5" fill="#0a2463" />
                <circle cx="100" cy="120" r="5" fill="#0a2463" />
                <circle cx="190" cy="150" r="5" fill="#0a2463" />
                <circle cx="240" cy="180" r="5" fill="#0a2463" />
                <circle cx="50" cy="80" r="5" fill="#0a2463" />
                <circle cx="80" cy="40" r="5" fill="#0a2463" />
                <circle cx="30" cy="120" r="5" fill="#0a2463" />
                <circle cx="280" cy="100" r="5" fill="#0a2463" />
                <circle cx="260" cy="50" r="5" fill="#0a2463" />
                <circle cx="200" cy="180" r="5" fill="#0a2463" />
                <circle cx="140" cy="170" r="5" fill="#0a2463" />
                <circle cx="90" cy="190" r="5" fill="#0a2463" />
                <circle cx="60" cy="60" r="5" fill="#0a2463" />

                {/* Connections */}
                <line x1="150" y1="100" x2="120" y2="50" stroke="#0a2463" strokeWidth="1" />
                <line x1="150" y1="100" x2="180" y2="40" stroke="#0a2463" strokeWidth="1" />
                <line x1="150" y1="100" x2="220" y2="70" stroke="#0a2463" strokeWidth="1" />
                <line x1="150" y1="100" x2="100" y2="120" stroke="#0a2463" strokeWidth="1" />
                <line x1="150" y1="100" x2="190" y2="150" stroke="#0a2463" strokeWidth="1" />
                <line x1="70" y1="150" x2="30" y2="120" stroke="#0a2463" strokeWidth="1" />
                <line x1="70" y1="150" x2="90" y2="190" stroke="#0a2463" strokeWidth="1" />
                <line x1="70" y1="150" x2="50" y2="80" stroke="#0a2463" strokeWidth="1" />
                <line x1="230" y1="130" x2="280" y2="100" stroke="#0a2463" strokeWidth="1" />
                <line x1="230" y1="130" x2="240" y2="180" stroke="#0a2463" strokeWidth="1" />
                <line x1="230" y1="130" x2="260" y2="50" stroke="#0a2463" strokeWidth="1" />
              </svg>
            </div>
          ) : (
            <div className="w-full h-64 bg-gray-50 rounded-lg flex items-center justify-center mb-2 border border-dashed border-gray-300">
              <p className="text-gray-400 text-sm">Biểu đồ sẽ hiển thị ở đây</p>
            </div>
          )}

          <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-1">
            <Plus className="h-4 w-4" />
            <span>Thêm điểm kiến thức mới</span>
          </Button>
        </div>

        <h2 className="text-xl font-bold text-blue-800 mb-4">Tóm tắt quan hệ giữa các hợp chất trong nghiên cứu</h2>

        {hasData ? (
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-2">
                Hidro (H<sub>2</sub>)
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Hidro xanh: Sản xuất từ điện phân nước, không tạo CO<sub>2</sub>.
                </li>
                <li>
                  Hidro xám: Sản xuất từ khí tự nhiên, thải CO<sub>2</sub>.
                </li>
                <li>Hidro xanh lá cây: Sản xuất từ sinh khối, tiềm năng tái tạo.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">Chất xúc tác</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Platinum (Pt): Hiệu suất cao, chi phí lớn.</li>
                <li>Iridium (Ir): Ổn định, khan hiếm.</li>
                <li>Nickel (Ni): Giá rẻ, hiệu suất thấp hơn.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">Ứng dụng</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Giao thông: Pin nhiên liệu hydro cho xe hơi, tàu hỏa.</li>
                <li>Lưu trữ năng lượng: Kết hợp với điện mặt trời, điện gió.</li>
                <li>Công nghiệp: Dùng trong sản xuất amoniac, thép xanh.</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="h-24 bg-gray-50 rounded-lg border border-dashed border-gray-300 flex items-center justify-center">
              <p className="text-gray-400 text-sm">Thông tin sẽ hiển thị khi có dữ liệu</p>
            </div>

            <div className="h-24 bg-gray-50 rounded-lg border border-dashed border-gray-300 flex items-center justify-center">
              <p className="text-gray-400 text-sm">Thông tin sẽ hiển thị khi có dữ liệu</p>
            </div>

            <div className="h-24 bg-gray-50 rounded-lg border border-dashed border-gray-300 flex items-center justify-center">
              <p className="text-gray-400 text-sm">Thông tin sẽ hiển thị khi có dữ liệu</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

