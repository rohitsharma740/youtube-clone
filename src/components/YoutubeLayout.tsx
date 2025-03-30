import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

interface YoutubeLayoutProps {
  children: React.ReactNode;
}

export function YoutubeLayout({ children }: YoutubeLayoutProps) {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Sidebar />
      <main className="pl-[72px] pt-14 h-[calc(100vh-56px)]">
        {children}
      </main>
    </div>
  );
}
