"use client"

import { ChevronRight } from "lucide-react"
import CourseCard from "./CourseCard"

interface Course {
  id: string
  title: string
  image: string
  alt: string
  level: string
  category: string
  isNew: boolean
  credential: string
  instructor: string
  description: string
  modules: string
  baseLink: string
}

interface CourseCategoryProps {
  title: string
  courses: Course[]
  onCourseClick: (courseId: string) => void
}

export default function CourseCategory({ title, courses, onCourseClick }: CourseCategoryProps) {
  return (
    <div className="course-category">
      <div className="category-header">
        <h2>{title}</h2>
        <button className="view-all-button">
          View all <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="course-cards">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} onClick={() => onCourseClick(course.id)} />
        ))}
      </div>
    </div>
  )
}
