import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    // Evita scroll en el body cuando el menú está abierto
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }, [menuOpen]);

    return (

        <header className="absolute top-0 left-0 w-full 2xl:h-[150px] flex justify-between items-center px-6 sm:px-10 z-50 text-white transition-all duration-500">

            {/* LOGO */}
            <div className="w-auto h-full flex items-center mt-5 md:mt-0">

                <a href="#heroSection" className="flex items-center gap-3 text-nowrap">
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
            <button className="md:hidden text-white z-[60]" onClick={toggleMenu} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen}>
                {menuOpen ? (
                <   XMarkIcon className="w-8 h-8" />
                ) : (
                    <Bars3Icon className="w-8 h-8" />
                )}
            </button>

            {/* ASIDE LATERAL (MOBILE) */}
            <aside className={`fixed top-0 right-0 h-screen w-3/4 sm:w-1/2 bg-black/70 backdrop-blur-md text-white transform transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] z-40 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>

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
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-opacity duration-300 opacity-100" onClick={closeMenu}></div>
            )}

        </header>

    );

};

export default Header;