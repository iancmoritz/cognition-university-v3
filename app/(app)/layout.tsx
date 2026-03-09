import { SidebarProvider } from "@/components/sidebar/SidebarContext";
import { GlobalSidebar } from "@/components/sidebar/GlobalSidebar";
import { TopBar } from "@/components/TopBar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <GlobalSidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <TopBar />
          <main className="thin-scrollbar min-h-0 flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
