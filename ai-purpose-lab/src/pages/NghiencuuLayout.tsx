import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { LeftSidebar } from "@/components/left-sidebar"

export default function NghiencuuLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <LeftSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
