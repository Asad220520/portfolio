import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../ui/Button";

function Navbar() {
  const location = useLocation();
  const [isSticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        isSticky ? "bg-amber-50 shadow text-black" : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold whitespace-nowrap">
          Хакимов Асадбек
        </Link>

        {/* Резюме только если не sticky */}
        <a
          href="/асадResume.pdf"
          download
          className="hidden md:flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          📄 Скачать резюме
        </a>

        {/* Мобильное меню */}
        <div className="md:hidden flex items-center">
          <Button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl"
            aria-label="Toggle menu"
          >
            ☰
          </Button>
        </div>
      </div>

      {/* Выпадающее мобильное меню */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 text-black shadow">
          <Button
            onClick={() => scrollTo("about")}
            className="block w-full text-left mb-2 bg-transparent text-black hover:bg-blue-100 hover:text-blue-500"
          >
            Обо мне
          </Button>
          <Button
            onClick={() => scrollTo("projects")}
            className="block w-full text-left mb-2 bg-transparent text-black hover:bg-blue-100 hover:text-blue-700"
          >
            Проекты
          </Button>

          {/* 📄 Скачать резюме — отдельная ссылка */}
          <a
            href="/асадResume.pdf"
            download
            className="block w-full text-left px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            📄 Скачать резюме
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
