<<<<<<< HEAD
import React from "react"
import Link from "next/link"

// Custom Quote icon component to replace lucide-react dependency
const Quote = ({
  className = "",
  style,
}: {
  className?: string
  style?: React.CSSProperties
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  )
}

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="h-8 w-8" style={{ backgroundColor: "var(--blue-700)" }}></div>
          <div className="font-semibold ml-2" style={{ color: "var(--blue-700)" }}>
            <span>Purpose</span>
            <span className="ml-1">Lab</span>
          </div>
        </div>
        <nav>
          <ul className="flex space-x-6 text-sm">
            <li>
              <Link href="#" className="hover:underline hover:underline-offset-4" style={{ color: "var(--blue-700)" }}>
                Ứng dụng
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline hover:underline-offset-4" style={{ color: "var(--blue-700)" }}>
                Nghiên cứu
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline hover:underline-offset-4" style={{ color: "var(--blue-700)" }}>
                Đào Tạo-Tập
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline hover:underline-offset-4" style={{ color: "var(--blue-700)" }}>
                Về chúng tôi
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="py-16"
        style={{
          background: linear-gradient(to bottom, var(--blue-50), var(--blue-200)),
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-5xl font-bold mb-6" style={{ color: "var(--blue-700)" }}>
              Building
              <br />
              Responsible AI,
              <br />
              <div className="flex items-center">
                <span>together, with</span>
                <div className="flex items-center ml-2">
                  <div className="h-10 w-10 transform rotate-180" style={{ backgroundColor: "var(--blue-700)" }}></div>
                  <div className="font-semibold ml-1" style={{ color: "var(--blue-700)" }}>
                    <span>Purpose</span>
                    <span className="ml-1">Lab</span>
                  </div>
                </div>
              </div>
            </h1>

            {/* Quote Card */}
            <div className="bg-background rounded-xl p-6 my-10 relative shadow-sm">
              <Quote
                className="absolute -left-2 top-6 h-8 w-8 transform -scale-x-100"
                style={{ color: "var(--blue-700)" }}
              />
              <p className="text-foreground px-6 font-[family-name:var(--font-geist-sans)]">
                Tại đây với sự nhiệt giúp cá nhân và doanh nghiệp ứng dụng trí tuệ nhân tạo (AI) một cách hiệu quả và có
                trách nhiệm. Trong thời đại AI phát triển mạnh mẽ, việc hiểu rõ các giải pháp AI không chỉ công nghệ, mà
                còn đòi hỏi sự hiểu biết sâu sắc về quy trình, đối tượng và tác động xã hội.
              </p>
              <Quote className="absolute -right-2 bottom-6 h-8 w-8" style={{ color: "var(--blue-700)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2" style={{ color: "var(--blue-700)" }}>
            Dịch vụ của chúng tôi
          </h2>
          <p className="text-center text-foreground/70 mb-12 max-w-3xl mx-auto font-[family-name:var(--font-geist-sans)]">
            Để đáp ứng nhu cầu đa dạng của cá nhân và doanh nghiệp trong lĩnh vực AI, Purpose Lab cung cấp 3 gói dịch vụ
            khác nhau để phù hợp theo từng nhu cầu cụ thể.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="border border-foreground/10 rounded-lg p-6">
              <h3 className="font-semibold mb-4" style={{ color: "var(--blue-700)" }}>
                Dành cho cá nhân
                <br />& doanh nghiệp mới bắt đầu
              </h3>
              <ul className="space-y-2 text-sm font-[family-name:var(--font-geist-sans)]">
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: "var(--blue-700)" }}>
                    •
                  </span>
                  <span>Trò chuyện AI cơ bản, giải đáp thắc mắc về trí tuệ AI</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: "var(--blue-700)" }}>
                    •
                  </span>
                  <span>Đánh giá nhanh nhu cầu và khả năng ứng dụng</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: "var(--blue-700)" }}>
                    •
                  </span>
                  <span>Tư vấn định hướng, thử nghiệm các công cụ</span>
                </li>
              </ul>
              <div className="mt-auto pt-8">
                <button
                  className="w-full py-2 px-4 rounded-full transition-colors font-medium text-sm h-10"
                  style={{
                    backgroundColor: "var(--blue-700)",
                    color: "var(--background)",
                  }}
                >
                  Hoàn toàn miễn phí
                </button>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="border border-foreground/10 rounded-lg p-6">
              <h3 className="font-semibold mb-4" style={{ color: "var(--blue-700)" }}>
                Dành cho startup
                <br />& doanh nghiệp vừa
              </h3>
              <ul className="space-y-2 text-sm font-[family-name:var(--font-geist-sans)]">
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: "var(--blue-700)" }}>
                    •
                  </span>
                  <span>Hỗ trợ triển khai mô hình AI theo đặc thù riêng</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: "var(--blue-700)" }}>
                    •
                  </span>
                  <span>Phát triển ứng dụng theo yêu cầu</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: "var(--blue-700)" }}>
                    •
                  </span>
                  <span>Tích hợp API, xử lý hiệu suất</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: "var(--blue-700)" }}>
                    •
                  </span>
                  <span>Kỹ thuật prompt và fine-tuning mô hình</span>
                </li>
              </ul>
              <div className="mt-auto pt-8">
                <button
                  className="w-full py-2 px-4 rounded-full transition-colors font-medium text-sm h-10"
                  style={{
                    backgroundColor: "var(--blue-700)",
                    color: "var(--background)",
                  }}
                >
                  2.000.000 VND/Tháng
                </button>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="border border-foreground/10 rounded-lg p-6">
              <h3 className="font-semibold mb-4" style={{ color: "var(--blue-700)" }}>
                Tùy chỉnh theo yêu cầu
                <br />
                Dành cho doanh nghiệp lớn
              </h3>
              <ul className="space-y-2 text-sm font-[family-name:var(--font-geist-sans)]">
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: "var(--blue-700)" }}>
                    •
                  </span>
                  <span>Huấn luyện AI theo dữ liệu riêng biệt, bảo mật dữ liệu</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: "var(--blue-700)" }}>
                    •
                  </span>
                  <span>Không giới hạn số lượng API, dịch vụ, mô hình khả dụng</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: "var(--blue-700)" }}>
                    •
                  </span>
                  <span>Hỗ trợ triển khai, tối ưu hóa và đảm bảo chất lượng theo tiêu chuẩn</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: "var(--blue-700)" }}>
                    •
                  </span>
                  <span>Đào tạo đội ngũ nội bộ, đồng hành theo chiến lược</span>
                </li>
              </ul>
              <div className="mt-auto pt-8">
                <button
                  className="w-full py-2 px-4 rounded-full transition-colors font-medium text-sm h-10"
                  style={{
                    backgroundColor: "var(--blue-700)",
                    color: "var(--background)",
                  }}
                >
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
=======
export default function vechungtoi() {
    return <div className="p-8">This is the About page.</div>;
  }
  
>>>>>>> main
