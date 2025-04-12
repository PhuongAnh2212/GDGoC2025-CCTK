"use client"

import { useState } from "react"

import CoursePreviewModal from "@/components/LessonMaterial2"
import CourseCategory from "@/components/Card1"
import "./style/gochoctap.css"
import "../app/globals.css"



const courseData = [
  // === NỀN TẢNG CƠ BẢN VỀ AI ===
  {
  id: "ai-introduction",
  title: "Nhập môn trí tuệ nhân tạo (AI)",
  category: "Nền tảng cơ bản về AI",
  instructor: "Son V",
  level: "Cơ bản/Dữ liệu",
  image: "/AI.jpg",
  baseLink: "/ai-ethics",
  description: "Khóa học cung cấp kiến thức tổng quan và nền tảng về Trí tuệ Nhân tạo (AI), bao gồm các khái niệm, phương pháp, thuật toán,\n\
  và ứng dụng trong các lĩnh vực như khoa học máy tính, y tế, tài chính, và tự động hóa. Học viên sẽ hiểu rõ lịch sử phát triển, tiềm năng của AI và khám phá các nhánh chính như Học máy (Machine Learning),\n\
  Xử lý ngôn ngữ tự nhiên (Natural Language Processing - NLP) và Thị giác máy tính (Computer Vision).\n\
  Ngoài các nội dung kỹ thuật, khóa học tập trung thảo luận về các vấn đề đạo đức và xã hội liên quan đến AI, bao gồm tính minh bạch, \n\
  trách nhiệm, và công bằng. Học viên sẽ được tìm hiểu tác động kinh tế, xã hội,\n\
  và pháp lý của AI để phát triển nhận thức và cách sử dụng công nghệ AI một cách bền vững.\n\
  Khóa học còn đào sâu vào các thuật toán cốt lõi như tìm kiếm cơ bản (DFS, BFS) và nâng cao (A*, tìm kiếm tham lam), cũng như hệ thống logic và suy luận. \n\
  Những nội dung này giúp học viên hiểu cách giải quyết vấn đề, phát triển tư duy logic và lập luận, cũng như áp dụng AI vào thực tế.\n\
  Phần học máy (Machine Learning) giới thiệu các phương pháp học có giám sát và không giám sát với các thuật toán phổ biến như hồi quy tuyến tính, cây quyết định, k-means, và mạng nơ-ron nhân tạo.\n\
  Khóa học cũng cập nhật xu hướng mới về Trí tuệ nhân tạo tạo sinh (Generative AI), giúp học viên nắm bắt được các tiến bộ công nghệ hiện đại trong lĩnh vực này.",
  modules: [
    "Giới thiệu về Trí tuệ nhân tạo",
    "Giải quyết bài toán bằng tìm kiếm và tìm kiếm không thông tin (uninformed search)",
    "Tìm kiếm có thông tin (informed/heuristic search)",
    "Tìm kiếm trong môi trường phức tạp (Search in complex environments)",
    "Tìm kiếm đối kháng (adversarial search)",
    "Tìm kiếm thỏa mãn ràng buộc (constraint solving problem)",
    "Biểu diễn tri thức và lập luận với logic mệnh đề (propositional logic)",
    "Lập luận với logic bậc nhất (first-order logic)",
    "Giới thiệu học máy (machine learning)",
    "Phân lớp, gom nhóm cơ bản (classification, clustering)",
    "Hồi quy (regression)",
    "Chủ đề mở rộng (GenAI, NLP, CV)",
    ],
  },
  {
    id: "machine-learning",
    title: "Học máy có giám sát: Hồi quy và phân loại",
    image: "/images.jpg",
    alt: "AI in machine-learning",
    level: "Trung bình/Dữ liệu",
    category: "Nền tảng cơ bản về AI",
    isNew: true,
    credential: "Course",
    instructor: "Huy Tran",
    description: "Khóa học Chuyên ngành Machine Learning (Học máy).\n\
    Điểm nổi bật của khóa học:\n\
    Kiến thức toàn diện: Bao gồm học máy có giám sát (hồi quy tuyến tính, hồi quy logistic,mạng nơ-ron,\n\
    cây quyết định) và học máy không giám sát (phân cụm, giảm kích thước, hệ thống giới thiệu).\n\
    Thực hành thực tế: Áp dụng các kỹ thuật học máy vào giải quyết vấn đề thực tế, bao gồm đánh giá và điều chỉnh mô hình, cải thiện hiệu suất dựa trên dữ liệu.\n\
    Phù hợp với người mới bắt đầu: Chương trình được thiết kế thân thiện với người mới, giúp họ dễ dàng tiếp cận và nắm bắt kiến thức.\n\.",
    modules: [
      "Giới thiệu về Machine Learning:",
      "Hồi quy với nhiều biến đầu vào",
      "Phân loại"
    ],
    baseLink: "/ai-customer-service",
  },
  {
    id: "llm",
    title: "Lập trình cho trí tuệ nhân tạo",
    image: "/code.jpg",
    alt: "LLM visual",
    level: "Trung bình/Dữ liệu",
    category: "Nền tảng cơ bản về AI",
    description: "Khóa học này được thiết kế dành cho sinh viên và cử nhân mọi ngành muốn theo đuổi sự nghiệp trong lĩnh vực AI.\n\
    kết hợp giữa AI và phát triển phần mềm, giúp học viên nắm vững kiến thức và kỹ năng cần thiết để trở thành kỹ sư AI chuyên nghiệp.",
    instructor: "Tom C",
    isNew: true,
    credential: "Professional Certificate",
    modules: [
      "Giới thiệu về mô hình ngôn ngữ",
      "NLP là gì?",
      "Giới thiệu Transformer",
      "Pre-training & Fine-tuning",
      "Ứng dụng LLMs"
    ],
    baseLink: "/llm-basic",
  },
  {
    id: "request-processing",
    title: "Công nghệ phần mềm cho hệ thống trí tuệ nhân tạo",
    image: "/pham.jpg",
    alt: "Request Processing",
    level: "Nâng cao/Dữ liệu",
    category: "Nền tảng cơ bản về AI",
    isNew: false,
    credential: "Course",
    instructor: "Ling Chao",
    description: "Khóa học này giải thích cách các mô hình AI xử lý và hiểu các yêu cầu từ người dùng...",
    modules: [
      "Hiểu về xử lý yêu cầu",
      "Nhận diện ý định",
      "Xử lý ngôn ngữ tự nhiên"
    ],
    baseLink: "/request-processing",
  },
  
  // === PHÂN TÍCH DỮ LIỆU ===
  {
    id: "data-analysis",
    title: "Nền tảng dữ liệu",
    image:  "/data.jpg",
    alt: "DATA",
    level: "Cơ bản/Dữ liệu",
    category: "Phân tích dữ liệu",
    isNew: false,
    credential: "Course",
    instructor: "Andrew Ng",
    description: "Khóa học giới thiệu về phân tích dữ liệu, giúp học viên nắm vững các kỹ năng cần thiết để trở thành nhà phân tích dữ liệu.\n\
     Khóa học này được thiết kế thực hành, bao gồm các chủ đề như làm sạch dữ liệu, phân tích và trực quan hóa dữ liệu,\n\
     sử dụng các công cụ như bảng tính, SQL, R và Tableau.\n\
     Người học sẽ được trang bị kiến thức về quy trình làm việc của một nhà phân tích dữ liệu và cách sử dụng các công cụ chuyên nghiệp.\n\
      Sau khi hoàn thành khóa học, học viên sẽ:\n\
      Hiểu quy trình làm việc của một nhà phân tích dữ liệu cấp dưới.\n\
      Nắm vững kỹ năng phân tích dữ liệu như dọn dẹp, phân tích và trực quan hóa dữ liệu.\n\
      Khám phá các thuật ngữ và khái niệm quan trọng liên quan đến phân tích dữ liệu.\n\
      Tự đánh giá tư duy phân tích và tìm kiếm cơ hội nghề nghiệp trong lĩnh vực phân tích dữ liệu.\n\
      Chương trình này không yêu cầu kinh nghiệm trước đó và hướng đến những người muốn bắt đầu sự nghiệp trong ngành phân tích dữ liệu.",
    modules: [
      "Giới thiệu phân tích dữ liệu và tư duy phân tích",
      "Thế giới dữ liệu tuyệt vời",
      "Thiết lập hộp công cụ phân tích dữ liệu",
      "Trở thành một chuyên gia dữ liệu công bằng và có tác động",
    ],
    baseLink: "/data-analysis",
  },
  
  {
    id: "data-protection",
    title: "Trí tuệ nhân tạo và các ứng dụng cho doanh nghiệp",
    image: "/business.jpg",
    alt: "Data Protection",
    level: "Nâng cao/Dữ liệu",
    category: "Phân tích dữ liệu",
    isNew: true,
    credential: "Professional Certificate",
    instructor: "Tuan Ng",
    description: "Khóa học này cung cấp kiến thức về trí tuệ nhân tạo (AI) và ứng dụng của nó trong môi trường doanh nghiệp.\n\
     Các học viên sẽ được tìm hiểu về cách AI có thể giúp tối ưu hóa quy trình, tăng cường khả năng ra quyết định dựa trên dữ liệu và cải thiện hiệu quả công việc trong doanh nghiệp.",
    modules: [
      "Dữ liệu và Chiến lược Quyết định Dựa trên Dữ liệu (Data-Driven Decision)",
      "Tổng quan về Trí tuệ Nhân tạo (AI)",
      "Generative AI (Trí tuệ Nhân tạo Tạo Sinh)",
      "Ứng dụng AI trong Công việc"
    ],
    baseLink: "/data-protection",
  },
  {
    id: "marketing-analysis",
    title: "Mô hình dữ liệu và đường ống",
    category: "Phân tích dữ liệu",
    level: "Nâng cao/Dữ liệu",
    instructor: "Lisa M",
    image: "/thong.jpg",
    baseLink: "/marketing-analysis",
    description: "Khóa học này giúp bạn hiểu cách đo lường hiệu quả chiến dịch marketing qua dữ liệu...",
    modules: [
      "Phân tích hành vi khách hàng",
      "KPI và đo lường chiến dịch",
      "Tối ưu ngân sách quảng cáo"
    ],
  },

  {
    id: "finacial-analysis",
    title: "Phân tích dữ liệu thông minh với Power BI và GenAI",
    category: "Phân tích dữ liệu",
    level: "Trung bình /Dữ liệu",
    instructor: "Rose H",
    image: "/dulieumo.jpeg",
    baseLink: "/marketing-analysis",
    description: "Khóa học này giúp bạn hiểu cách đo lường hiệu quả chiến dịch marketing qua dữ liệu tài chính, từ hành vi khách hàng đến tối ưu ngân sách quảng cáo.",
    modules: [
      "Phân tích hành vi khách hàng",
      "KPI và đo lường chiến dịch",
      "Tối ưu ngân sách quảng cáo",
    ],
  },

  // === PHÂN TÍCH DỮ LIỆU KHÁC ===
  {
    id: "image-processing",
    title: "Giới thiệu về thị giác máy tính và xử lý hình ảnh",
    image: "/cv.jpg",
    alt: "Image Processing",
    level: "Cơ bản/Dữ liệu",
    category: "Phân tích dữ liệu khác",
    isNew: true,
    credential: "Professional Certificate",
    instructor: "Duong Phung",
    description: "Tầm nhìn máy tính là một trong những lĩnh vực thú vị nhất trong học máy và AI. Nó có các ứng dụng trong nhiều ngành công nghiệp,\n\
    chẳng hạn như xe tự lái, robot, thực tế tăng cường, và nhiều hơn nữa. \n\
    Trong khóa học thân thiện với người mới bắt đầu này, bạn sẽ hiểu tầm nhìn máy tính và tìm hiểu về các ứng dụng khác nhau của nó trong nhiều ngành công nghiệp.\n\
    Là một phần của khóa học này, bạn sẽ sử dụng Python, Gối và OpenCV để xử lý hình ảnh cơ bản và thực hiện phân loại hình ảnh và phát hiện đối tượng.",

    modules: [
      "Giới thiệu về Thị giác Máy tính",
      "Xử lý Hình ảnh với OpenCV và Pillow",
      "Phân loại Hình ảnh với Máy học"
    ],
    baseLink: "/image-processing",
  },
  {
    id: "keyword-explanation",
    title: "Phân tích Dữ liệu với SQL và Power BI",
    image:  "/spl.jpg",
    alt: "Keyword Explanation",
    level: "Trung bình/Dữ liệu",
    category: "Phân tích dữ liệu khác",
    isNew: false,
    credential: "Course",
    instructor: "Lisa M",
    description: "Khóa học phân tích cách trích xuất và hiểu ý nghĩa từ khóa từ tài liệu bằng AI...",
    modules: [
      "Trích xuất từ khóa",
      "Phân tích tần suất",
      "Mô hình chủ đề"
    ],
    baseLink: "/keyword-explanation",
  },
  {
    id: "scientific-analysis",
    title: "Deep Learning cho thị giác máy tính",
    category: "Phân tích dữ liệu khác",
    level: "Nâng cao/Dữ liệu",
    instructor: "Andrew Ng",
    image: "/deeplearning.jpg" ,
    baseLink: "/scientific-analysis",
    description: "Khóa học áp dụng AI vào phân tích dữ liệu khoa học để phát hiện tri thức mới...",
    modules: [
      "Giới thiệu về Deep Learning và thị giác máy tính (Computer Vision)",
      "Xây dựng và huấn luyện mô hình neural network",
      "Ứng dụng trong nhận diện hình ảnh, phân loại đối tượng",
      "Phát triển ứng dụng thực tế như nhận diện khuôn mặt, phân tích video, phân tích hình ảnh y tế"
    ],
  },
  
  {
    id: "finacial-analysis",
    title: "Xử lý hình ảnh và video",
    category: "Phân tích dữ liệu khác",
    level: "Cơ bản/Dữ liệu",
    instructor: "Cong Khanh",
    image: "/imagprocess.webp",
    baseLink: "/marketing-analysis",
    description: "Khóa học cung cấp kiến thức về xử lý ảnh và video, từ các ứng dụng cơ bản đến các công nghệ nâng cao.",
    modules: [
      "Giới thiệu về xử lý ảnh và video",
      "Nén ảnh và video",
      "Xử lý không gian",
      "Khôi phục ảnh"
    ],
  },
]

const groupedCourses = courseData.reduce((acc: { [key: string]: any[] }, course) => {
  if (!acc[course.category]) {
    acc[course.category] = []
  }
  acc[course.category].push(course)
  return acc
}, {})

function Home({ onCourseClick }: { onCourseClick: (courseId: string) => void }) {
  return (
    <>
      <div className="mt-20 hero-section">
        <h1>Học gì với AI Purpose Lab?</h1>
      </div>
      {Object.entries(groupedCourses).map(([category, courses]) => (
        <CourseCategory
          key={category}
          title={category}
          courses={courses}
          onCourseClick={onCourseClick}
        />
      ))}
    </>
  )
}

export default function HomePage() {
  const [selectedCourse, setSelectedCourse] = useState<any>(null)

  const handleCourseClick = (courseId: string) => {
    const course = courseData.find((c) => c.id === courseId)
    setSelectedCourse(course)
  }

  const handleCloseCourse = () => {
    setSelectedCourse(null)
  }

  return (
    <div className="app-container">
      {!selectedCourse ? (
        <main className="main-content">
          <Home onCourseClick={handleCourseClick} />
        </main>
      ) : (
        <CoursePreviewModal course={selectedCourse} onNavigateToHome={handleCloseCourse} />
      )}
    </div>
  )
}
