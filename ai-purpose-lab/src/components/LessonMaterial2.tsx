"use client"
import { Play, Clock, Video, Code, User, ChevronRight } from "lucide-react"
import "./LessonMaterial1.css"
import "./Card1"
import "./Logo"

function CoursePreviewModal({course, onNavigateToHome }) {
  if (!course) return null

  return (
    <div className="course-detail-page">
      {/* Hero section with gradient background */}
      <section className="course-hero">
        <div className="breadcrumbs">
        <a href="#" onClick={onNavigateToHome}>
           Các môn học
          </a>
          <ChevronRight size={20} />
          <span>{course.title}</span>
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <div className="course-tags">
            </div>

            <h1 className="hero-title">{course.title}</h1>
            <p className="hero-instructor">Hướng dẫn: {course.instructor || "Huynh Linh"}</p>

            <button className="enroll-button" onClick={() => {}}>
              Đăng ký học
            </button>
          </div>

          <div className="hero-video">
            <div className="video-container">
              <img src={course.image || "/logo.svg"} alt={course.alt} />
              <button className="play-button">
                <Play size={24} fill="currentColor" />
              </button>
            </div>
          </div>
        </div>
      </section>

      
      <section className="course-content">
        <div className="content-container">
          <div className="learn-section">
            <h2>Nội dung khóa học</h2>
            {course.description}
          </div>
          <div className="learn-section">
            <h2>Bạn sẽ học được gì</h2>
            <ul className="learn-list">
              {course.modules.map((modules) => (
                <li className="learn-item">
                  <div>
                  </div>
                  <p>{typeof modules === "string" ? modules : modules.title}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="course-sidebar">
            <h2>{course.title}</h2>
            <ul className="course-details">
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2 9.5L12 3L22 9.5M2 9.5V19.5L12 16L22 19.5V9.5M2 9.5L12 16L22 9.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Cơ bản</span>
              </li>
              <li>
                <Clock size={20} />
                <span>4 tiếng 15 phút</span>
              </li>
              <li>
                <Video size={20} />
                <span>35 bài học</span>
              </li>
              <li>
                <Code size={20} />
                <span>data ứng dụng</span>
              </li>
              <li>
                <User size={20} />
                <span>Instructor: {course.instructor || "Huynh Linh"}</span>
              </li>
            </ul>
            <button className="enroll-button full" onClick={() => {}}>
              Đăng ký học
            </button>
          </div>
        </div>
      </section>

      <div className="back-button-container">
        <button onClick={onNavigateToHome} className="back-button">
          Quay lại trang chính
        </button>
      </div>
    </div>
  )
}

export default CoursePreviewModal
