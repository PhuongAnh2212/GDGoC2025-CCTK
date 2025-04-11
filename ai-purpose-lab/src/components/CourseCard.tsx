import Image from "next/image"

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

interface CourseCardProps {
  course: Course
  onClick: () => void
}

export default function CourseCard({ course, onClick }: CourseCardProps) {
  return (
    <div
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md cursor-pointer group"
      onClick={onClick}
    >
      <Image
        src={course.image}
        alt={course.alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />

      
      <div className="absolute inset-0 transition-all duration-300 group-hover:opacity-0 bg-gradient-to-b from-transparent via-[#174aff1a] to-[#174affcc]"></div>
      <div className="absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100 bg-gradient-to-b from-transparent via-[#581c870f] via-50% to-[#581c87e6] to-100%"></div>

      <div className="absolute bottom-4 left-4 text-white z-10">
        <h3 className="text-lg font-semibold">{course.title}</h3>
        <p className="text-sm">{course.instructor}</p>
      </div>
    </div>
  )
}
