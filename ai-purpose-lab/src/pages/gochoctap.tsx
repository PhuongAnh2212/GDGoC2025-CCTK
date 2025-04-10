"use client"
import "./App.css"
import "./Card1.css"
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom"
import "./LessonMaterial1.css"
import logo from "./assets/logo.svg"
import "./style/Card1.css"
import CoursePreviewModal from "./LessonMaterial2.jsx"
import { Fragment } from "react"
import myImage from "./assets/huhu.png"
import mymage from "./assets/huhu3.jpg"
import im3 from "./assets/huhu2.png"
import im4 from "./assets/huhu5.png"
import im5 from "./assets/huhu6.jpg"
import im6 from "./assets/30.jpg"

function Navigation() {
  const location = useLocation()

  return (
    <nav className="main-nav">
      <Link to="/" className="logo-link">
        <div className="logo">
          <img src={logo} alt="AI Purpose Lab Logo" />
        </div>
      </Link>
      <div className="nav-links">
        <Link to="/applications" className={`nav-link ${location.pathname === "/applications" ? "active" : ""}`}>
          Ứng dụng
        </Link>
        <Link to="/research" className={`nav-link ${location.pathname === "/research" ? "active" : ""}`}>
          Nghiên cứu
        </Link>
        <Link to="/goc-hoc-tap" className={`nav-link ${location.pathname === "/goc-hoc-tap" ? "active" : ""}`}>
          Góc học tập
        </Link>
        <Link to="/about-us" className={`nav-link ${location.pathname === "/about-us" ? "active" : ""}`}>
          Về chúng tôi
        </Link>
      </div>
    </nav>
  )
}

const courseData = [
  {
    id: "llm",
    title: "Mô hình ngôn ngữ lớn là gì? (LLM)",
    image: myImage,
    alt: "LLM visual",
    level: "Cơ bản / Nâng cao",
    data: "Nâng cao",
    description:
      "Khóa học này giới thiệu về các mô hình ngôn ngữ lớn (LLMs) như GPT và BERT. Nó bao gồm kiến trúc, quy trình huấn luyện, các ứng dụng và những cân nhắc về mặt đạo đức của chúng.",
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
      "Khóa học này giúp bạn hiểu cách phân tích dữ liệu để đưa ra quyết định kinh doanh tốt hơn cho doanh nghiệp vừa và nhỏ.",
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
      "Khóa học này giải thích cách các mô hình AI xử lý và hiểu dữ liệu hình ảnh, từ nhận dạng đối tượng đến phân tích nội dung.",
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
      "Khóa học này giải thích cách các mô hình AI xử lý và hiểu các yêu cầu từ người dùng, từ phân tích ngôn ngữ đến tạo ra phản hồi phù hợp.",
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
      "Khóa học này giải thích các phương pháp và kỹ thuật bảo vệ dữ liệu trong các mô hình AI, từ mã hóa đến học liên hợp.",
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
      "Khóa học này giải thích cách các mô hình AI phân tích và hiểu các từ khóa trong tài liệu, từ trích xuất từ khóa đến phân tích ngữ nghĩa.",
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
]

function GocHocTap() {
  return (
    <>
      <div className="hero-section">
        <h1>Học gì với AI Purpose Lab?</h1>
      </div>
      <div className="cards-grid">
        {courseData.map((course) => (
          <div key={course.id}>
            <Card1
              imagesrc={course.image}
              alttext={course.alt}
              title={course.title}
              level={course.level}
              name={course.level.split(" / ")[0]}
              data={course.level.includes(" / ") ? course.level.split(" / ")[1] : ""}
              baseLink={course.baseLink}
              datalink={course.baseLink}
            />
          </div>
        ))}
      </div>
    </>
  )
}

function CourseDetailRoute() {
  const location = useLocation()
  const pathname = location.pathname
  const navigate = useNavigate()

  const course = courseData.find((c) => c.baseLink === pathname)

  if (!course) {
    return <div>Course not found</div>
  }

  return <CoursePreviewModal course={course} onClose={() => navigate("/goc-hoc-tap")} />
}

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<GocHocTap />} />
            <Route path="/goc-hoc-tap" element={<GocHocTap />} />
            {courseData.map((course) => (
              <Fragment key={course.id}>
                <Route path={course.baseLink} element={<CourseDetailRoute />} />
              </Fragment>
            ))}
            <Route path="/applications" element={<div>Applications Content</div>} />
            <Route path="/research" element={<div>Research Content</div>} />
            <Route path="/about-us" element={<div>About Us Content</div>} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App

