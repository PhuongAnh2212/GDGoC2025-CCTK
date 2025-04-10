"use client";

import { useState } from "react";
import Card1 from "@/components/Card1.jsx";
import CoursePreviewModal from "@/components/LessonMaterial2.jsx";
import "@/components/Card1.css"
import "@/components/LessonMaterial1.css"
import "./style/gochoctap.css"

const myImage = "/huhu.png";
const mymage = "/huhu3.jpg";
const im3 = "/huhu2.png";
const im4 = "/huhu5.png";
const im5 = "/huhu6.jpg";
const im6 = "/30.jpg";

const courseData = [
  {
    id: "llm",
    title: "Mô hình ngôn ngữ lớn là gì? (LLM)",
    image: myImage,
    alt: "LLM visual",
    level: "Cơ bản / Nâng cao",
    description:
      "Khóa học này giới thiệu về các mô hình ngôn ngữ lớn (LLMs) như GPT và BERT...",
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
    level: "Cơ bản / Nâng cao",
    description:
      "Khóa học này giúp bạn hiểu cách phân tích dữ liệu để đưa ra quyết định kinh doanh tốt hơn...",
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
    level: "Cơ bản / Hình ảnh",
    description:
      "Khóa học này giải thích cách các mô hình AI xử lý và hiểu dữ liệu hình ảnh...",
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
    level: "Cơ bản / Bài tập",
    description:
      "Khóa học này giải thích cách các mô hình AI xử lý và hiểu các yêu cầu từ người dùng...",
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
    level: "Cơ bản / Nâng cao",
    description:
      "Khóa học này giải thích các phương pháp và kỹ thuật bảo vệ dữ liệu trong các mô hình AI...",
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
    level: "Cơ bản / Dữ liệu",
    description:
      "Khóa học này giải thích cách các mô hình AI phân tích và hiểu các từ khóa trong tài liệu...",
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
];


function Home({ onCourseClick }: { onCourseClick: (baseLink: string) => void }) {
  return (
    <>
      <div className="hero-section mt-8">
        <h1>Học gì với AI Purpose Lab?</h1>
      </div>
      <div className="cards-grid">
        {courseData.map((course) => (
          <Card1
            key={course.id}
            imagesrc={course.image}
            alttext={course.alt}
            title={course.title}
            name={course.level.split(" / ")[0]}
            data={course.level.split(" / ")[1] || ""}
            baseLink={course.baseLink}
            datalink={course.baseLink}
            onClick={() => onCourseClick(course.baseLink)}
          />
        ))}
      </div>
    </>
  );
}

function CourseDetailRoute({
  course,
  onClose,
  onNavigateToHome,
}: {
  course: any;
  onClose: () => void;
  onNavigateToHome: () => void;
}) {
  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <CoursePreviewModal
      course={course}
      onClose={onClose}
      onNavigateToHome={onNavigateToHome}
    />
  );
}

// Main export
export default function hoctap() {
  const [selectedCourse, setSelectedCourse] = useState<any | null>(null);

  const handleCourseClick = (baseLink: string) => {
    const course = courseData.find((c) => c.baseLink === baseLink);
    setSelectedCourse(course);
  };

  const handleCloseCourse = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="app-container">
      <main className="main-content">
        {selectedCourse ? (
         <CourseDetailRoute
         course={selectedCourse}
         onClose={handleCloseCourse}
         onNavigateToHome={handleCloseCourse}
       />
       
        ) : (
          <Home onCourseClick={handleCourseClick} />
        )}
      </main>
    </div>
  );
}
