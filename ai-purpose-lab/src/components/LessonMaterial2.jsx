import { useNavigate } from "react-router-dom"
import "./LessonMaterial1.css"

function CoursePreviewModal({ course, onClose }) {
  const navigate = useNavigate()

  if (!course) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="close-button">
          ✕
        </button>
        <div className="llm-course-card">
          <div className = "button-container">
          <button onClick={() => navigate("/")} className="back-button">
            Quay lại trang chính
          </button>
          <button onClick={() => navigate("")} className="go-button"> Đăng ký học </button>
          </div>
        
          <h2 className="course-title">{course.title}</h2>
          <img src={course.image || "/placeholder.svg"} alt={course.alt} className="course-image" />

          <div className="level">
            <span>{course.level}</span>
          </div>

          <div className="course-description">
            <span>Mô tả môn học:</span>
            <p>{course.description}</p>
          </div>

          <div className="course-description">
            Modules:
            <ul>
              {course.modules.map((module, index) => (
                <li key={index}>
                  {typeof module === "string" ? (
                    module
                  ) : (
                    <>
                      {module.title}
                      {module.subItems && (
                        <ul>
                          {module.subItems.map((subItem, subIndex) => (
                            <li key={subIndex}>{subItem}</li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursePreviewModal