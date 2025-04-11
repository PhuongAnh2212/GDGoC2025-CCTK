"use client";
import "./LessonMaterial1.css";

function CoursePreviewModal({ course, onClose, onNavigateToHome }) {
    if (!course) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="close-button">✕</button>

                <div className="course-header">
                    <img src={course.image || "/placeholder.svg"} alt={course.alt} className="course-image" />
                    <div className="course-info">
                        <h2 className="course-title">{course.title}</h2>
                        <div className="level">
                            <strong>Cấp độ:</strong> <span>{course.level}</span>
                        </div>
                        <div className="button-group">
                            <button onClick={onNavigateToHome} className="back-button">
                                Quay lại trang chính
                            </button>
                            <button className="go-button">Đăng ký học</button>
                        </div>
                    </div>
                </div>

                <div className="course-description">
                    <h3>Mô tả môn học</h3>
                    <p>{course.description}</p>
                </div>

                <div className="course-modules">
                    <h3>Nội dung khóa học</h3>
                    <ul>
                        {course.modules.map((module, index) => (
                            <li key={index}>
                                {typeof module === "string" ? (
                                    module
                                ) : (
                                    <>
                                        <strong>{module.title}</strong>
                                        {module.subItems && (
                                            <ul className="sub-items">
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
    );
}

export default CoursePreviewModal;
