import { useEffect, useState } from "react";

const sections = ["home", "about", "experience", "projects", "skills", "contact"];

const Navbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-4 left-0 w-full flex justify-center z-50 pointer-events-none">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full flex gap-6 pointer-events-auto shadow-lg">
        {sections.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className={`text-sm transition duration-300 hover:text-purple-400 ${
              active === item ? "text-purple-400" : "text-white/60"
            }`}
          >
            {item.toUpperCase()}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;