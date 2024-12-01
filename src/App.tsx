import { Outlet } from "react-router-dom";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`app ${theme}`}>
      <Header onClick={toggleTheme} />
      <Outlet />
      <Footer />
    </div>
  );
}
