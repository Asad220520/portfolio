import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Alert from "../common/Alert";
import Tabs from "../common/Tabs";
import Button from "../ui/Button";

function Navbar() {
  const location = useLocation();
  const [isSticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Обо мне", "Проекты"];

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

  const handleTabChange = (index) => {
    setActiveTab(index);
    scrollTo(index === 0 ? "about" : "projects");
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all ${
          isSticky ? "bg-white shadow text-black" : "bg-transparent text-white"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            👨‍💻 Портфолио
          </Link>

          {/* Desktop меню с Tabs */}
          <div className="hidden md:flex items-center space-x-6">
            <Tabs tabs={tabs} onChange={handleTabChange} />
          </div>

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

        {/* Выпадающее меню на мобилке */}
        {menuOpen && (
          <div className="md:hidden bg-transparent px-4 pb-4 text-black">
            <Button
              onClick={() => scrollTo("about")}
              className="block w-full text-left mb-2 bg-transparent text-black hover:bg-blue-100 hover:text-blue-500"
            >
              Обо мне
            </Button>
            <Button
              onClick={() => scrollTo("projects")}
              className="block w-full text-left bg-transparent text-black hover:bg-blue-100 hover:text-blue-700"
            >
              Проекты
            </Button>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
