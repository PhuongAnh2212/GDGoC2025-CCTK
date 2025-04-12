"use client"

import { useState } from "react"

import CoursePreviewModal from "@/components/LessonMaterial2"
import CourseCategory from "@/components/Card1"
import CourseCard from "@/components/CourseCard"
import "./style/gochoctap.css"


// Images - using placeholder images for now
const myImage = "/huhu.png"
const mymage = "/huhu3.jpg"
const im3 = "/huhu2.png"
const im4 = "/huhu2.png"
const im5 = "/huhu5.png"
const im6 = "/30.jpg"


const courseData = [
  {
    id: "llm",
    title: "Mô hình ngôn ngữ lớn là gì? (LLM)",
    image: myImage,
    alt: "LLM visual",
    level: "Cơ bản/Dữ liệu",
    category: "Nền tảng cơ bản về AI",
    description: "Khóa học này giới thiệu về các mô hình ngôn ngữ lớn (LLMs) như GPT và BERT...",
    instructor: "Tom C",
    isNew: true,
    credential: "Professional Certificate",
    modules: [
      "Giới thiệu về mô hình ngôn ngữ",
      "NLP là gì?",
      "Vai trò của ngôn ngữ tự nhiên trong AI",
      "Các mô hình truyền thống vs. LLM",
      "Từ rule-based đến machine learning",
      "Giới thiệu Transformer",
      "Cấu trúc LLM",
      "Attention mechanism",
      "Pre-training & Fine-tuning",
      {
        title: "Ứng dụng của LLM",
        subItems: ["Chatbot, tự động hóa văn bản, phân tích sentiment, v.v."],
      },
      {
        title: "Đánh giá và giới hạn",
        subItems: ["Hiểu về hallucination, bias, và hiệu suất"],
      },
      {
        title: "Tương lai và đạo đức",
        subItems: ["Tác động xã hội & nguyên tắc sử dụng AI an toàn"],
      },
    ],
    baseLink: "/llm-basic",
  },
  {
    id: "data-analysis",
    title: "Phân tích dữ liệu cho doanh nghiệp vừa và nhỏ",
    image: mymage,
    alt: "DATA",
    level: "Cơ bản",
    category: "Phân tích dữ liệu",
    isNew: false,
    credential: "Course",
    instructor: "Andrew Ng",
    description: "Khóa học này giúp bạn hiểu cách phân tích dữ liệu để đưa ra quyết định kinh doanh tốt hơn...",
    modules: [
      "Giới thiệu về phân tích dữ liệu",
      "Thu thập và làm sạch dữ liệu",
      "Phân tích thống kê cơ bản",
      "Trực quan hóa dữ liệu",
      "Phân tích xu hướng",
      "Dự báo kinh doanh",
      "Phân tích khách hàng",
      "Tối ưu hóa quy trình",
      "Báo cáo và trình bày kết quả",
    ],
    baseLink: "/data-analysis",
  },
  {
    id: "image-processing",
    title: "Data hình ảnh được mô hình xử lý như thế nào?",
    image: im3,
    alt: "Image Processing",
    level: "Cơ bản",
    category: "Phân tích dữ liệu khác",
    isNew: true,
    credential: "Professional Certificate",
    instructor: "Huynh Linh",
    description: "Khóa học này giải thích cách các mô hình AI xử lý và hiểu dữ liệu hình ảnh...",
    modules: [
      "Cơ bản về xử lý hình ảnh",
      "Biểu diễn hình ảnh trong máy tính",
      "Tiền xử lý hình ảnh",
      "Trích xuất đặc trưng",
      "Mạng nơ-ron tích chập (CNN)",
      "Phân loại hình ảnh",
      "Phát hiện đối tượng",
      "Phân đoạn hình ảnh",
      "Ứng dụng thực tế",
    ],
    baseLink: "/image-processing",
  },
  {
    id: "request-processing",
    title: "Mô hình xử lý yêu cầu như thế nào?",
    image: im4,
    alt: "Request Processing",
    level: "Cơ bản",
    category: "Nền tảng cơ bản về AI",
    isNew: false,
    credential: "Course",
    instructor: "Ling Chao",
    description: "Khóa học này giải thích cách các mô hình AI xử lý và hiểu các yêu cầu từ người dùng...",
    modules: [
      "Hiểu về xử lý yêu cầu",
      "Phân tích ngữ nghĩa",
      "Nhận diện ý định",
      "Xử lý ngôn ngữ tự nhiên",
      "Tạo phản hồi",
      "Xử lý đa ngữ cảnh",
      "Tối ưu hóa độ chính xác",
    ],
    baseLink: "/request-processing",
  },
  {
    id: "data-protection",
    title: "Dữ liệu được mô hình bảo vệ như thế nào?",
    image: im5,
    alt: "Data Protection",
    level: "Nâng cao",
    category:"Phân tích dữ liệu",
    isNew: true,
    credential: "Professional Certificate",
    instructor: "Tuan Ng",
    description: "Khóa học này giải thích các phương pháp và kỹ thuật bảo vệ dữ liệu trong các mô hình AI...",
    modules: [
      "Cơ bản về bảo mật dữ liệu",
      "Mã hóa và ẩn danh",
      "Học liên hợp (Federated Learning)",
      "Học máy bảo toàn quyền riêng tư",
      "Bảo vệ dữ liệu trong quá trình huấn luyện",
      "Bảo vệ dữ liệu trong quá trình suy luận",
      "Tuân thủ quy định bảo vệ dữ liệu",
    ],
    baseLink: "/data-protection",
  },
  {
    id: "keyword-explanation",
    title: "Mô hình giải thích từ khóa tài liệu như thế nào?",
    image: im6,
    alt: "Keyword Explanation",
    level: "Nâng cao",
    category: "Phân tích dữ liệu khác",
    isNew: false,
    credential: "Course",
    instructor: "Lisa M",
    description: "Khóa học này giải thích cách các mô hình AI phân tích và hiểu các từ khóa trong tài liệu...",
    modules: [
      "Cơ bản về xử lý văn bản",
      "Trích xuất từ khóa",
      "Phân tích tần suất từ",
      "Mô hình không gian vector",
      "Phân tích ngữ nghĩa",
      "Mô hình chủ đề",
      "Ứng dụng trong tìm kiếm và phân loại tài liệu",
    ],
    baseLink: "/keyword-explanation",
  },
  {
    id: "ai-ethics",
    title: "Đạo đức và trách nhiệm trong AI hiện đại", 
    category: "Nền tảng cơ bản về AI",
    instructor: "Son V",
    image: im6,
    baseLink: "/keyword-explanation",
    description: "Khóa học này giải thích cách các mô hình AI phân tích và hiểu các từ khóa trong tài liệu...",
    modules: [
      "Cơ bản về xử lý văn bản",
      "Trích xuất từ khóa",
      "Phân tích tần suất từ",
      "Mô hình không gian vector",
      "Phân tích ngữ nghĩa",
      "Mô hình chủ đề",
      "Ứng dụng trong tìm kiếm và phân loại tài liệu",
    ],
  },

  {
    id: "ai-anasis",
    title: "Phân tích Dữ liệu Marketing: Tối ưu hóa chiến dịch", 
    category: "Phân tích dữ liệu",
    instructor: "Lisa M",
    image: myImage,
    description: "Khóa học này giải thích cách các mô hình AI phân tích và hiểu các từ khóa trong tài liệu...",
    modules: [
      "Cơ bản về xử lý văn bản",
      "Trích xuất từ khóa",
      "Phân tích tần suất từ",
      "Mô hình không gian vector",
      "Phân tích ngữ nghĩa",
      "Mô hình chủ đề",
      "Ứng dụng trong tìm kiếm và phân loại tài liệu",
    ],
  },
  {
    id: "ai-word",
    title: "Phân tích dữ liệu nghiên cứu khoa học", 
    category: "Phân tích dữ liệu khác",
    instructor: "Andrew Ng",
    image: mymage,
    description: "Khóa học này giải thích cách các mô hình AI phân tích và hiểu các từ khóa trong tài liệu...",
    modules: [
      "Cơ bản về xử lý văn bản",
      "Trích xuất từ khóa",
      "Phân tích tần suất từ",
      "Mô hình không gian vector",
      "Phân tích ngữ nghĩa",
      "Mô hình chủ đề",
      "Ứng dụng trong tìm kiếm và phân loại tài liệu",
    ],
  }
]


const groupedCourses = courseData.reduce((acc: { [key: string]: any[] }, course) => {
  if (!acc[course.category]) {
    acc[course.category] = [];
  }
  acc[course.category].push(course);
  return acc;
}, {});

// Home view with categorized courses
function Home({ onCourseClick }: { onCourseClick: (courseId: String) => void }) {
  return (
    <>
      <div className="hero-section">
        <h1>Học gì với AI Purpose Lab?</h1>
      </div>

      {Object.entries(groupedCourses).map(([category, courses]) => (
        <CourseCategory key={category} title={category} courses={courses} onCourseClick={onCourseClick} />
      ))}
    </>
  );
}

export default function HomePage() {
  const [selectedCourse, setSelectedCourse] = useState<any>(null)

  const handleCourseClick = (courseId:String) => {
    const course = courseData.find((c) => c.id === courseId);
    setSelectedCourse(course);
  };

  const handleCloseCourse = () => {
    setSelectedCourse(null)
  }

  return (
    <div className="app-container">
      {!selectedCourse ? (
        <>
          <main className="main-content">
            <Home onCourseClick={handleCourseClick} />
          </main>
        </>
      ) : (
        <CoursePreviewModal course={selectedCourse} onNavigateToHome={handleCloseCourse} />
      )}
    </div>
  )
}
