import Link from "next/link"
import { Quote } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="h-8 w-8 bg-blue-700 mr-2"></div>
          <div className="text-blue-700 font-semibold">
            <span>Purpose</span>
            <span className="ml-1">Lab</span>
          </div>
        </div>
        <nav>
          <ul className="flex space-x-6 text-sm">
            <li>
              <Link href="#" className="text-blue-700 hover:underline">
                Ứng dụng
              </Link>
            </li>
            <li>
              <Link href="#" className="text-blue-700 hover:underline">
                Nghiên cứu
              </Link>
            </li>
            <li>
              <Link href="#" className="text-blue-700 hover:underline">
                Đào Tạo-Tập
              </Link>
            </li>
            <li>
              <Link href="#" className="text-blue-700 hover:underline">
                Về chúng tôi
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex-1 bg-gradient-to-b from-blue-50 to-blue-200 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-5xl font-bold text-blue-700 mb-6">
              Building
              <br />
              Responsible AI,
              <br />
              <div className="flex items-center">
                <span className="text-blue-700">together, with</span>
                <div className="flex items-center ml-2">
                  <div className="h-10 w-10 bg-blue-700 transform rotate-180"></div>
                  <div className="text-blue-700 font-semibold ml-1">
                    <span>Purpose</span>
                    <span className="ml-1">Lab</span>
                  </div>
                </div>
              </div>
            </h1>

            {/* Quote Card */}
            <div className="bg-white rounded-xl p-6 my-10 relative shadow-sm">
              <Quote className="text-blue-700 absolute -left-2 top-6 h-8 w-8 transform -scale-x-100" />
              <p className="text-gray-700 px-6">
                Tại đây với sự nhiệt giúp cá nhân và doanh nghiệp ứng dụng trí tuệ nhân tạo (AI) một cách hiệu quả và có
                trách nhiệm. Trong thời đại AI phát triển mạnh mẽ, việc hiểu rõ các giải pháp AI không chỉ công nghệ, mà
                còn đòi hỏi sự hiểu biết sâu sắc về quy trình, đối tượng và tác động xã hội.
              </p>
              <Quote className="text-blue-700 absolute -right-2 bottom-6 h-8 w-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-700 text-center mb-2">Dịch vụ của chúng tôi</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Để đáp ứng nhu cầu đa dạng của cá nhân và doanh nghiệp trong lĩnh vực AI, Purpose Lab cung cấp 3 gói dịch vụ
            khác nhau để phù hợp theo từng nhu cầu cụ thể.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="border border-blue-200 rounded-lg p-6">
              <h3 className="text-blue-700 font-semibold mb-4">
                Dành cho cá nhân
                <br />& doanh nghiệp mới bắt đầu
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-700 mr-2">•</span>
                  <span>Trò chuyện AI cơ bản, giải đáp thắc mắc về trí tuệ AI</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 mr-2">•</span>
                  <span>Đánh giá nhanh nhu cầu và khả năng ứng dụng</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 mr-2">•</span>
                  <span>Tư vấn định hướng, thử nghiệm các công cụ</span>
                </li>
              </ul>
              <div className="mt-auto pt-8">
                <button className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition">
                  Hoàn toàn miễn phí
                </button>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="border border-blue-200 rounded-lg p-6">
              <h3 className="text-blue-700 font-semibold mb-4">
                Dành cho startup
                <br />& doanh nghiệp vừa
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-700 mr-2">•</span>
                  <span>Hỗ trợ triển khai mô hình AI theo đặc thù riêng</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 mr-2">•</span>
                  <span>Phát triển ứng dụng theo yêu cầu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 mr-2">•</span>
                  <span>Tích hợp API, xử lý hiệu suất</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 mr-2">•</span>
                  <span>Kỹ thuật prompt và fine-tuning mô hình</span>
                </li>
              </ul>
              <div className="mt-auto pt-8">
                <button className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition">
                  2.000.000 VND/Tháng
                </button>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="border border-blue-200 rounded-lg p-6">
              <h3 className="text-blue-700 font-semibold mb-4">
                Tùy chỉnh theo yêu cầu
                <br />
                Dành cho doanh nghiệp lớn
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-700 mr-2">•</span>
                  <span>Huấn luyện AI theo dữ liệu riêng biệt, bảo mật dữ liệu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 mr-2">•</span>
                  <span>Không giới hạn số lượng API, dịch vụ, mô hình khả dụng</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 mr-2">•</span>
                  <span>Hỗ trợ triển khai, tối ưu hóa và đảm bảo chất lượng theo tiêu chuẩn</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 mr-2">•</span>
                  <span>Đào tạo đội ngũ nội bộ, đồng hành theo chiến lược</span>
                </li>
              </ul>
              <div className="mt-auto pt-8">
                <button className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition">
                  Tùy chỉnh
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

