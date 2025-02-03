import { useState } from "react";
import { Home, MessageSquare, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const Layout = ({ children, currentPage, setCurrentPage }: LayoutProps) => {
  return (
    <div className="flex h-screen">
      <nav className="flex flex-col items-center w-16 py-4 bg-secondary">
        <NavButton
          icon={<Home size={24} />}
          isActive={currentPage === "home"}
          onClick={() => setCurrentPage("home")}
          label="Home"
        />
        <NavButton
          icon={<MessageSquare size={24} />}
          isActive={currentPage === "chat"}
          onClick={() => setCurrentPage("chat")}
          label="Chat"
        />
        <NavButton
          icon={<Settings size={24} />}
          isActive={currentPage === "settings"}
          onClick={() => setCurrentPage("settings")}
          label="Settings"
        />
      </nav>
      <main className="flex-1 overflow-auto p-6">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

interface NavButtonProps {
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  label: string;
}

const NavButton = ({ icon, isActive, onClick, label }: NavButtonProps) => (
  <button
    onClick={onClick}
    className={cn(
      "p-3 rounded-lg mb-2 transition-all duration-200 group relative",
      isActive ? "bg-primary text-primary-foreground" : "hover:bg-primary/10"
    )}
    title={label}
  >
    {icon}
    <span className="absolute left-full ml-2 px-2 py-1 bg-popover rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
      {label}
    </span>
  </button>
);