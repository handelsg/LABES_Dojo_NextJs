import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Layout } from "@/components/Layout";
import { HomePage } from "@/components/HomePage";
import { ChatPage } from "@/components/ChatPage";
import { SettingsPage } from "@/components/SettingsPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "chat":
        return <ChatPage />;
      case "settings":
        return <SettingsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
        {renderPage()}
      </Layout>
      <Toaster />
    </>
  );
};

export default App;