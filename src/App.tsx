import { Outlet } from "react-router-dom";
import Header from "@components/app-layout/header";
import Footer from "@components/app-layout/footer";
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
