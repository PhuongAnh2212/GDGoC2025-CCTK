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
    description: "Khóa học giới thiệu các mô hình ngôn ngữ lớn (LLMs) như GPT và BERT, cách mạng hóa xử lý ngôn ngữ tự nhiên (NLP).\n\
    Chúng ta sẽ tìm hiểu về kiến trúc transformer, cơ chế attention và ứng dụng trong dịch máy và tạo nội dung.\n\
    Học viên sẽ thực hành áp dụng LLMs trong dự án thực tế, nắm bắt xu hướng công nghệ ngôn ngữ.",
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
      "Chatbot, tự động hóa văn bản, phân tích sentiment, v.v.",
      "Hiểu về hallucination, bias, và hiệu suất", 
      "Tác động xã hội & nguyên tắc sử dụng AI an toàn",
    ],
    baseLink: "/llm-basic",
  },

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
    description:
    "Khóa học này giúp bạn hiểu mô hình phân tích dữ liệu của chúng tôi, cho phép bạn áp dụng các phương pháp phân tích để đưa ra quyết định kinh doanh tốt hơn. Bạn sẽ học cách mô hình hóa dữ liệu và phân tích các thông tin quan trọng từ dữ liệu mà mô hình cung cấp.\n\
    Khóa học sẽ hướng dẫn bạn cách triển khai mô hình phân tích, từ việc thu thập dữ liệu, xử lý và làm sạch dữ liệu, đến việc sử dụng các thuật toán phân tích để rút ra những kết luận có giá trị. Bạn sẽ có cơ hội thực hành với các công cụ phân tích như Python hoặc R,\n\
    giúp bạn làm quen với các kỹ thuật phân tích hiện đại.",
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
    level: "Cơ bản/Dữ liệu",
    category: "Phân tích dữ liệu khác",
    isNew: true,
    credential: "Professional Certificate",
    instructor: "Duong Phung",
    description: "Khóa học này giải thích cách mô hình của chúng tôi phân tích dữ liệu hình ảnh bằng cách sử dụng Convolutional Neural Networks (CNN).\n\
    Bạn sẽ học cách thu thập, xử lý và áp dụng các kỹ thuật học sâu để phát hiện đặc điểm và phân loại hình ảnh. \n\
    Khóa học bao gồm các bài thực hành giúp bạn triển khai mô hình và áp dụng vào các bài toán thực tế. Hãy tham gia để nắm vững quy trình phân tích hình ảnh hiệu quả!",
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
    level: "Cơ bản/Dữ liệu",
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
    level: "Cơ bản/Dữ liệu",
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
    level: "Cơ bản/Dữ liệu",
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
    level: "Cơ bản/Dữ liệu",
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
    level: "Cơ bản/Dữ liệu",
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
    level: "Cơ bản/Dữ liệu",
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
        <CourseCategory key={category} 
        title={category} courses={courses} 
        onCourseClick={onCourseClick}
        />
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