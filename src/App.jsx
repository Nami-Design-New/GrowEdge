import { RouterProvider } from "react-router";
import { useSelector } from "react-redux";
import { Toaster } from "sonner";
import { useEffect, useState, useRef } from "react";
import { router } from "./providers/Router";
import i18n from "./utils/i18n";
import Preloader from "./components/Preloader";

function App() {
  const { lang } = useSelector((state) => state.settings);
  const [loading, setLoading] = useState(true);
  const cursorRef = useRef(null);

  useEffect(() => {
    // simulate loading for smoother appearance
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    const body = document.querySelector("body");
    lang === "en" ? body.classList.add("en") : body.classList.remove("en");
    i18n.changeLanguage(lang);
  }, [lang]);

  // ===== Custom Cursor =====
  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.top = `${e.clientY}px`;
        cursorRef.current.style.left = `${e.clientX}px`;
      }
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <div className={loading ? "opacity-0" : "opacity-100"}>
        <Toaster expand={false} richColors position="bottom-right" />
        <RouterProvider router={router} />
      </div>

      {/* Custom Cursor */}
      <div className="custom-cursor" ref={cursorRef}></div>
    </>
  );
}

export default App;
