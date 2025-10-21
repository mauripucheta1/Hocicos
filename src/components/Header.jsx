import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const heroSection = document.querySelector("#heroSection");

        const handleScroll = () => {
        if (!heroSection) return;
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollY = window.scrollY;
        setIsScrolled(scrollY > heroBottom - 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (

        <header className={`w-full 2xl:h-[150px] flex justify-between items-center px-6 sm:px-10 absolute z-50 transition-colors duration-500 text-white
        ${isScrolled ? "bg-black/40 backdrop-blur-md" : "bg-transparent"}`}>

            {/* LOGO */}
            <div className="w-auto h-full flex items-center mt-5">

                <a href="#heroSection" className="flex items-center gap-3 text-nowrap">
                    <img src="/logo-hocicos.webp" alt="Logo Hocicos" className="h-[80px] sm:h-[100px] 2xl:h-[110px] object-contain" />
                    <p className="text-base sm:text-lg 2xl:text-lg font-semibold uppercase leading-tight">Hocicos <br /> de Caroya</p>
                </a>

            </div>

            {/* NAV DESKTOP */}
            <nav className="hidden md:flex items-center gap-5 2xl:text-lg font-medium" aria-label="Menú principal">

                <a href="#aboutWe" className="link-animada">Nosotros</a>
                <a href="#adopt" className="link-animada">Adoptar</a>
                <a href="#join" className="link-animada">Voluntariado</a>
                <a href="#contact" className="link-animada">Contactar</a>
                <a href="#donate" className="px-6 py-2 bg-[#4CD964] hover:bg-[#3AB54A] transition-all ease-in text-white rounded-lg">Donar</a>

            </nav>

            {/* BOTÓN HAMBURGUESA (MOBILE) */}
            <button className="md:hidden text-white z-50" onClick={toggleMenu} aria-label="Abrir menú">

                {menuOpen ? (
                    <XMarkIcon className="w-8 h-8" />
                ) : (
                    <Bars3Icon className="w-8 h-8" />
                )}

            </button>

            {/* ASIDE LATERAL (MOBILE) */}
            <aside className={`fixed top-0 right-0 h-screen w-3/4 sm:w-1/2 bg-black/40 backdrop-blur-md text-white transform transition-transform duration-300 ease-in-out z-40
            ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>

                <nav className="flex flex-col items-start gap-6 p-10 text-lg font-medium">

                    <a href="#aboutWe" onClick={closeMenu}>Nosotros</a>
                    <a href="#adopt" onClick={closeMenu}>Adoptar</a>
                    <a href="#join" onClick={closeMenu}>Voluntariado</a>
                    <a href="#contact" onClick={closeMenu}>Contactar</a>
                    <a href="#donate" onClick={closeMenu} className="px-6 py-2 bg-[#4CD964] hover:bg-[#3AB54A] transition-all ease-in text-white rounded-lg">Donar</a>

                </nav>

            </aside>

            {/* OVERLAY */}
            {menuOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30" onClick={closeMenu}></div>
            )}

        </header>

    );
    
};

export default Header;