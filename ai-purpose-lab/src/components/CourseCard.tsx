import Image from "next/image";

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
interface CourseCardProps {
  course: Course;
  onClick: () => void;
}

export default function CourseCard({ course, onClick }: CourseCardProps) {
  // Ensure course.level is defined before splitting
  const levels = course.level ? course.level.split("/").map((level) => level.trim()) : [];

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

      <div className="absolute bottom-4 left-4 right-4 text-white z-10 space-y-1">
        <h3 className="text-lg font-semibold">{course.title}</h3>

        <div className="flex gap-2 mt-1">
          {levels.map((level, index) => (
            <span key={index} className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
              {level}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
