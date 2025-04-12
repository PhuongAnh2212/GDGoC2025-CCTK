"use client"

import { useState } from "react"

import CoursePreviewModal from "@/components/LessonMaterial2"
import CourseCategory from "@/components/Card1"
import "./style/gochoctap.css"

const myImage = "/huhu.png"
const mymage = "/huhu3.jpg"
const im3 = "/huhu2.png"
const im4 = "/huhu2.png"
const im5 = "/huhu5.png"
const im6 = "/30.jpg"

const courseData = [
  // === NỀN TẢNG CƠ BẢN VỀ AI ===
  {
    id: "llm",
    title: "Mô hình ngôn ngữ lớn là gì? (LLM)",
    image: myImage,
    alt: "LLM visual",
    level: "Cơ bản/Dữ liệu",
    category: "Nền tảng cơ bản về AI",
    description: "Khóa học giới thiệu các mô hình ngôn ngữ lớn (LLMs) như GPT và BERT, cách mạng hóa NLP...",
    instructor: "Tom C",
    isNew: true,
    credential: "Professional Certificate",
    modules: [
      "Giới thiệu về mô hình ngôn ngữ",
      "NLP là gì?",
      "Giới thiệu Transformer",
      "Pre-training & Fine-tuning",
      "Ứng dụng LLMs"
    ],
    baseLink: "/llm-basic",
  },
  {
    id: "request-processing",
    title: "Mô hình xử lý yêu cầu như thế nào?",
    image: im4,
    alt: "Request Processing",
    level: "Cơ bản/Dữ liệu",
    category: "Nền tảng cơ bản về AI",
    isNew: false,
    credential: "Course",
    instructor: "Ling Chao",
    description: "Khóa học này giải thích cách các mô hình AI xử lý và hiểu các yêu cầu từ người dùng...",
    modules: [
      "Hiểu về xử lý yêu cầu",
      "Nhận diện ý định",
      "Xử lý ngôn ngữ tự nhiên"
    ],
    baseLink: "/request-processing",
  },
  {
    id: "ai-ethics",
    title: "Đạo đức và trách nhiệm trong AI hiện đại",
    category: "Nền tảng cơ bản về AI",
    instructor: "Son V",
    level: "Cơ bản/Dữ liệu",
    image: im6,
    baseLink: "/ai-ethics",
    description: "Giải thích về nguyên tắc đạo đức trong phát triển và sử dụng AI...",
    modules: [
      "Đạo đức trong AI",
      "Bias & fairness",
      "Trách nhiệm trong sử dụng AI"
    ],
  },
  {
    id: "ai-customer-service",
    title: "Ứng dụng AI trong chăm sóc khách hàng",
    image: im4,
    alt: "AI in Customer Service",
    level: "Cơ bản/Dữ liệu",
    category: "Nền tảng cơ bản về AI",
    isNew: true,
    credential: "Course",
    instructor: "Huy Tran",
    description: "Tìm hiểu cách AI giúp tự động hóa và nâng cao trải nghiệm chăm sóc khách hàng.",
    modules: [
      "Chatbot và trợ lý ảo",
      "Phân tích cảm xúc",
      "Tự động hóa quy trình phản hồi"
    ],
    baseLink: "/ai-customer-service",
  },


  // === PHÂN TÍCH DỮ LIỆU ===
  {
    id: "data-analysis",
    title: "Phân tích dữ liệu cho doanh nghiệp vừa và nhỏ",
    image: mymage,
    alt: "DATA",
    level: "Cơ bản/Dữ liệu",
    category: "Phân tích dữ liệu",
    isNew: false,
    credential: "Course",
    instructor: "Andrew Ng",
    description: "Khóa học này giúp bạn hiểu các phương pháp phân tích để đưa ra quyết định kinh doanh tốt hơn...",
    modules: [
      "Giới thiệu về phân tích dữ liệu",
      "Thu thập và làm sạch dữ liệu",
      "Phân tích thống kê cơ bản"
    ],
    baseLink: "/data-analysis",
  },
  {
    id: "data-protection",
    title: "Dữ liệu được mô hình bảo vệ như thế nào?",
    image: im5,
    alt: "Data Protection",
    level: "Cơ bản/Dữ liệu",
    category: "Phân tích dữ liệu",
    isNew: true,
    credential: "Professional Certificate",
    instructor: "Tuan Ng",
    description: "Khóa học này giải thích các phương pháp và kỹ thuật bảo vệ dữ liệu trong các mô hình AI...",
    modules: [
      "Mã hóa và ẩn danh",
      "Federated Learning",
      "Quy định về dữ liệu"
    ],
    baseLink: "/data-protection",
  },
  {
    id: "marketing-analysis",
    title: "Phân tích dữ liệu Marketing: Tối ưu hóa chiến dịch",
    category: "Phân tích dữ liệu",
    level: "Cơ bản/Dữ liệu",
    instructor: "Lisa M",
    image: mymage,
    baseLink: "/marketing-analysis",
    description: "Khóa học này giúp bạn hiểu cách đo lường hiệu quả chiến dịch marketing qua dữ liệu...",
    modules: [
      "Phân tích hành vi khách hàng",
      "KPI và đo lường chiến dịch",
      "Tối ưu ngân sách quảng cáo"
    ],
  },

  // === PHÂN TÍCH DỮ LIỆU KHÁC ===
  {
    id: "image-processing",
    title: "Data hình ảnh được mô hình xử lý như thế nào?",
    image: im3,
    alt: "Image Processing",
    level: "Cơ bản/Dữ liệu",
    category: "Phân tích dữ liệu khác",
    isNew: true,
    credential: "Professional Certificate",
    instructor: "Duong Phung",
    description: "Khóa học giải thích cách mô hình phân tích hình ảnh bằng CNN...",
    modules: [
      "Tiền xử lý hình ảnh",
      "CNN & trích xuất đặc trưng",
      "Phân loại & phát hiện ảnh"
    ],
    baseLink: "/image-processing",
  },
  {
    id: "keyword-explanation",
    title: "Mô hình giải thích từ khóa tài liệu như thế nào?",
    image: im6,
    alt: "Keyword Explanation",
    level: "Cơ bản/Dữ liệu",
    category: "Phân tích dữ liệu khác",
    isNew: false,
    credential: "Course",
    instructor: "Lisa M",
    description: "Khóa học phân tích cách trích xuất và hiểu ý nghĩa từ khóa từ tài liệu bằng AI...",
    modules: [
      "Trích xuất từ khóa",
      "Phân tích tần suất",
      "Mô hình chủ đề"
    ],
    baseLink: "/keyword-explanation",
  },
  {
    id: "scientific-analysis",
    title: "Phân tích dữ liệu nghiên cứu khoa học",
    category: "Phân tích dữ liệu khác",
    level: "Cơ bản/Dữ liệu",
    instructor: "Andrew Ng",
    image: mymage,
    baseLink: "/scientific-analysis",
    description: "Khóa học áp dụng AI vào phân tích dữ liệu khoa học để phát hiện tri thức mới...",
    modules: [
      "Mô hình hóa nghiên cứu",
      "Xử lý văn bản học thuật",
      "Tự động hóa trích dẫn và tìm kiếm"
    ],
  },
]

const groupedCourses = courseData.reduce((acc: { [key: string]: any[] }, course) => {
  if (!acc[course.category]) {
    acc[course.category] = []
  }
  acc[course.category].push(course)
  return acc
}, {})

function Home({ onCourseClick }: { onCourseClick: (courseId: string) => void }) {
  return (
    <>
      <div className="hero-section">
        <h1>Học gì với AI Purpose Lab?</h1>
      </div>
      {Object.entries(groupedCourses).map(([category, courses]) => (
        <CourseCategory
          key={category}
          title={category}
          courses={courses}
          onCourseClick={onCourseClick}
        />
      ))}
    </>
  )
}

export default function HomePage() {
  const [selectedCourse, setSelectedCourse] = useState<any>(null)

  const handleCourseClick = (courseId: string) => {
    const course = courseData.find((c) => c.id === courseId)
    setSelectedCourse(course)
  }

  const handleCloseCourse = () => {
    setSelectedCourse(null)
  }

  return (
    <div className="app-container">
      {!selectedCourse ? (
        <main className="main-content">
          <Home onCourseClick={handleCourseClick} />
        </main>
      ) : (
        <CoursePreviewModal course={selectedCourse} onNavigateToHome={handleCloseCourse} />
      )}
    </div>
  )
}
