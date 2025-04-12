"use client";

import { ChevronRight } from "lucide-react";
import CourseCard from "./CourseCard";

export interface Module {
  title: string; 
  subItems: string[]; 
}

export interface Course {
  id: string;
  title: string;
  image: string;
  alt: string;
  level: string;
  category: string;
  description: string;
  instructor: string; 
  isNew: boolean;
  credential: string;
  modules: (string | Module)[]; 
  baseLink: string;
}


interface CourseCategoryProps {
  title: string;
  courses: Course[];
  onCourseClick: (courseId: string) => void;
}

export default function CourseCategory({ title, courses, onCourseClick }: CourseCategoryProps) {
  return (
    <div className="course-category">
      <div className="category-header">
        <h2>{title}</h2>
      </div>

      <div className="course-cards">
        {/* Limit displayed courses to the first 3 */}
        {courses.slice(0, 3).map((course) => (
          <CourseCard key={course.id} course={course} onClick={() => onCourseClick(course.id)} />
        ))}
      </div>

      {/* Positioning the View All button outside the card loop */}
      <button className="view-all-button mt-4">
        Xem thêm <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
