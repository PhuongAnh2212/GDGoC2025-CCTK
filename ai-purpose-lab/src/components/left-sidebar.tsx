import * as React from "react"
import { ArchiveX, Command, File, Inbox, Send, Trash2 } from "lucide-react"
// import { NavUser } from "@/components/nav-user"
import { Label } from "@/components/ui/label"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Switch } from "@/components/ui/switch"
const pastConversations = [
  {
    id: "1",
    title: "Phân tích bài báo khoa học",
    date: "2:03 PM, 15 Nov",
    messages: [
      { role: "user", content: "Phân tích bài báo khoa học về nguyên tố hidro dưới đây" },
      {
        role: "assistant",
        content:
          'Bài báo khoa học "Hidro: Nguyên Tố Cơ Bản Cho Tương Lai Năng Lượng" được xuất bản trên tạp chí Nature Energy vào năm 2023, tập trung vào vai trò của hidro trong các ứng dụng năng lượng sạch. Nghiên cứu này phân tích các phương pháp sản xuất hidro, tính chất và ứng dụng trong tương lai.',
      },
    ],
  },
  {
    id: "2",
    title: "Mạng một chiều trong dây",
    date: "Yesterday, 10:45 AM",
    messages: [
      { role: "user", content: "Giải thích về mạng một chiều trong dây" },
      {
        role: "assistant",
        content:
          "Mạng một chiều trong dây là mô hình vật lý mô tả sự lan truyền của sóng hoặc hạt trong không gian một chiều. Trong mô hình này, các hạt chỉ có thể di chuyển theo một đường thẳng, thường được biểu diễn bằng một dây hoặc một ống.",
      },
    ],
  },
  {
    id: "3",
    title: "Đồng vị của carbohydrate",
    date: "Mar 12, 2023",
    messages: [
      { role: "user", content: "Giải thích về đồng vị của carbohydrate" },
      {
        role: "assistant",
        content:
          "Đồng vị của carbohydrate là các phân tử carbohydrate có cùng công thức phân tử nhưng khác nhau về cấu trúc không gian. Điều này dẫn đến sự khác biệt về tính chất vật lý và hóa học, ảnh hưởng đến chức năng sinh học của chúng trong cơ thể.",
      },
    ],
  },
]

// Sample data for AI models
const aiModels = [
  {
    id: "purpose-lab",
    name: "AI Purpose Lab",
    description: "Default model",
    logo: "AI",
    color: "bg-blue-600",
  },
  {
    id: "gemini",
    name: "Gemini",
    description: "Google AI",
    logo: "G",
    color: "bg-green-600",
  },
  {
    id: "turbo",
    name: "Turbo 3.5",
    description: "OpenAI",
    logo: "T",
    color: "bg-teal-600",
  },
]

export function LeftSidebar() {
  const [isFirstMessage, setIsFirstMessage] = useState(true)
  const [hasConversationData, setHasConversationData] = useState(false)
  const [activeItem, setActiveItem] = React.useState(data.navMain[0])
  const [mails, setMails] = React.useState(data.mails)
  const { setOpen } = useSidebar()

  
}