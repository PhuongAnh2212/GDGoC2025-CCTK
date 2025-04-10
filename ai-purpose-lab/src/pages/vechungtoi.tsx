import Image from "next/image"
import Logo from "public/logo.svg"

import { MapPin, Mail, Phone, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
    </main>
  )
}

function HeroSection() {
  return (

    <div>
      <section className="relative min-h-screen w-full overflow-hidden px-4 py-20 md:px-8 lg:px-16">
        <div className="w-full max-w-[800px] mx-auto absolute inset-0 -z-15">
          {/* <Image
            src="/images/Group 51.png"
            alt="Background"
            width={3392}
            height={3082}
            className="w-full h-auto object-fill"
            priority
          /> */}
        </div>

        <div className="mx-auto max-w-10xl px-5 md:px-10 lg:px-20">
          <div className="mb-16 space-y-6">
            <h1 className="text-6xl font-bold tracking-tight md:text-9xl lg:text-[10rem] leading-tight">
              <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">Building</span>
            </h1>
            <h2 className="text-3xl font-bold tracking-tight md:text-6xl lg:text-[10rem] leading-tight">
              <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                Responsible AI,
              </span>
            </h2>

            <div className="flex items-center gap-2 pt-4 pl-2 md:pl-4 lg:pl-6">
              <p className="text-2xl text-blue-700 md:text-3xl">together, with</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-semibold text-blue-700 md:text-3xl">
                  <span>
                    AI/ Purpose</span> <span>Lab</span>
                </span>
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-8xl rounded-3xl bg-white p-10 shadow-xl mt-8">
            <div className="absolute -left-1 top-2 text-7xl font-bold text-blue-700">"</div>
            <p className="pl-10 text-blue-700 text-lg leading-relaxed">
              Ra đời với sứ mệnh giúp cá nhân và doanh nghiệp ứng dụng trí tuệ nhân tạo (AI) một cách hiệu quả và có trách nhiệm. Trong thời đại AI phát triển mạnh mẽ, việc triển khai các giải pháp AI không chỉ dừng lại ở công nghệ, mà còn đòi hỏi sự hiểu biết sâu sắc về quy trình, dữ liệu và tác động xã hội.
            </p>
            <div className="absolute -bottom-10 right-6 text-7xl font-bold text-blue-700">"</div>
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
      <section className="mx-auto max-w-10xl px-5 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-5xl font-bold mb-3">
              <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">Gặp gỡ</span>
            </h2>
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                Đội ngũ phát triển
              </span>
            </h2>
            <div className="w-48 h-0.5 bg-blue-600 mb-6"></div>
            <p className="text-gray-600 mb-12 italic">
              Chúng tôi không chỉ xây dựng sản phẩm,
              <br />
              chúng tôi cùng nhau tạo nên những giá trị có ý nghĩa.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl w-full aspect-square bg-gradient-to-b from-blue-100 to-blue-600">
              <Image
                src="/images/meo1.jpg"
                alt="Phương Anh"
                fill
                className="object-cover mix-blend-overlay opacity-75"
              />
            </div>
            <div className="absolute bottom-4 left-4">
              <div className="inline-block bg-white rounded-full px-4 py-1 text-blue-600 font-medium">Phương Anh</div>
              <p className="text-white text-sm mt-1">Computer Science Major</p>
              <p className="text-white text-xs">Fulbright University Vietnam</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              name: "Hồng Ngọc",
              role: "Computer Science Major",
              university: "Fulbright University Vietnam",
              image: "/images/meo2.jpg",
            },
            {
              name: "Thụy Khuê",
              role: "Integrated Science Major",
              university: "Fulbright University Vietnam",
              image: "/images/meo3.jpg",
            },
            {
              name: "Phương Quỳnh",
              role: "Human-centered Engineering Major",
              university: "Fulbright University Vietnam",
              image: "/images/meo4.jpg",
            },
          ].map((member, index) => (
            <div key={index} className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl w-full aspect-square bg-gradient-to-b from-blue-100 to-blue-600">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover mix-blend-overlay opacity-75"
                />
              </div>
              <div className="absolute bottom-4 left-4">
                <div className="inline-block bg-white rounded-full px-4 py-1 text-blue-600 font-medium">
                  {member.name}
                </div>
                <p className="text-white text-sm mt-1">{member.role}</p>
                <p className="text-white text-xs">{member.university}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
