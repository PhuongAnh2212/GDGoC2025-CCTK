import Image from "next/image"
import  Logo from "public/logo.svg"

import { MapPin, Mail, Phone, ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">

      <main>
                {/* REDESIGNED Hero Section - Now in the Middle */}
                <section className="relative py-20 my-16 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 skew-y-3 transform origin-top-right z-0"></div>
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-400 rounded-full opacity-20"></div>
          <div className="absolute -left-10 bottom-10 w-40 h-40 bg-blue-300 rounded-full opacity-20"></div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Column - Main Heading */}
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Xây dựng AI 
                  <span className="relative">
                    <span className="relative z-10"> có trách nhiệm</span>
                    <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-300 opacity-40 z-0"></span>
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-light mb-8">
                  Cùng nhau, chúng ta có thể tạo ra tương lai AI an toàn và bền vững
                </p>
                <div className="flex flex-wrap gap-4">
                </div>
              </div>

              {/* Right Column - Quote Card */}
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-300 rounded-full opacity-50"></div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-blue-300 rounded-full opacity-50"></div>

                <div className="bg-white rounded-xl p-8 shadow-lg relative z-10 transform rotate-1 hover:rotate-0 transition-transform">
                  <div className="text-blue-600 text-6xl font-serif absolute -top-8 left-4">"</div>
                  <p className="text-gray-700 text-lg md:text-xl relative z-10 pt-4">
                    Tại Purpose Lab, chúng tôi tin vào việc phát triển AI phục vụ nhân loại. Sứ mệnh của chúng tôi là
                    tạo ra các giải pháp AI có trách nhiệm, trao quyền cho cá nhân và tổ chức đồng thời duy trì các tiêu
                    chuẩn đạo đức cao nhất.
                  </p>
                  <div className="text-blue-600 text-6xl font-serif absolute -bottom-12 right-4">"</div>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services - Now Second */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-4">Dịch vụ của chúng tôi</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Để đáp ứng nhu cầu đa dạng của cá nhân và doanh nghiệp trong thế giới hiện nay, Purpose Lab cung cấp ba loại
            dịch vụ được thiết kế phù hợp với các kịch bản sử dụng khác nhau.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔍",
                title: "Nghiên cứu & Phát triển AI",
                description: [
                  "Giải pháp AI tùy chỉnh cho các thách thức kinh doanh cụ thể",
                  "Triển khai khuôn khổ AI đạo đức",
                  "Kiểm toán thuật toán và phát hiện thiên kiến",
                  "Hợp tác nghiên cứu với các tổ chức học thuật",
                ],
              },
              {
                icon: "🚀",
                title: "Triển khai & Tích hợp AI",
                description: [
                  "Tích hợp liền mạch với các hệ thống hiện có",
                  "Chiến lược triển khai và thực hiện",
                  "Giám sát và tối ưu hóa hiệu suất",
                  "Thiết kế cơ sở hạ tầng AI có khả năng mở rộng",
                ],
              },
              {
                icon: "🎓",
                title: "Đào tạo & Giáo dục AI",
                description: [
                  "Hội thảo cho các đội ngũ kỹ thuật và phi kỹ thuật",
                  "Chương trình phổ cập kiến thức AI cho tổ chức",
                  "Báo cáo tóm tắt cho lãnh đạo về chiến lược AI",
                  "Hỗ trợ liên tục và chuyển giao kiến thức",
                ],
              },
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-blue-100 flex flex-col">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-blue-600 mb-4">{service.title}</h3>
                <ul className="space-y-2 text-gray-600 flex-grow">
                  {service.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>



        {/* Meet Our Team - Now Fourth */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">Gặp gỡ đội ngũ của chúng tôi</h2>
          <p className="text-gray-600 max-w-2xl mb-12">
          Chúng tôi không chỉ xây dựng sản phẩm, 
          chúng tôi cùng nhau tạo nên những giá trị có ý nghĩa.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Phạm Đoàn Phương Anh",
                role: "Chuyên ngành Khoa học máy tính",
                university: "Đại học Fulbright Việt Nam",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Đinh Hồng Ngọc",
                role: "Chuyên ngành Khoa học máy tính",
                university: "Đại học Fulbright Việt Nam",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Lê Thị Phương Quỳnh",
                role: "Chuyên ngành Khoa học máy tính và Kỹ thuật vị Nhân sinh",
                university: "Đại học Fulbright Việt Nam",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Ngô Hoàng Thụy Khuê",
                role: "Chuyên ngành Khoa học tích hợp",
                university: "Đại học Fulbright Việt Nam",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((member, index) => (
              <div key={index} className="relative">
                <div className="relative h-80 rounded-xl overflow-hidden bg-gradient-to-b from-blue-400 to-blue-600">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover mix-blend-overlay opacity-75"
                  />
                </div>
                <div className="mt-4">
                  <div className="inline-block bg-white rounded-full px-4 py-1 text-blue-600 font-medium">
                    {member.name}
                  </div>
                  <p className="text-gray-700 mt-2">{member.role}</p>
                  <p className="text-gray-500 text-sm">{member.university}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  )
}
