import { useEffect, useState } from "react";

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);

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

    return (

        <header className={`w-full 2xl:h-[150px] flex justify-between items-center px-10 absolute z-50 transition-colors duration-500 text-white
            ${isScrolled ? "bg-black/40 backdrop-blur-md" : 'bg-transparent'}`}>

            <div className="w-auto h-full flex items-center">

                <a href="#heroSection" className="flex items-center gap-3 text-nowrap">

                    <img src="/logo-hocicos.webp" alt="Logo Hocicos" className="w-full h-[110px] object-center object-contain" />
                    <p className="2xl:text-lg font-semibold uppercase leading-tight">Hocicos <br /> de Caroya</p>

                </a>

            </div>

            <nav className="w-auto h-full flex items-center gap-5 2xl:text-lg font-medium uppercase" aria-label="Menú principal">

                <a href="#aboutWe" className="link-animada">Nosotros</a>
                <a href="#adopt" className="link-animada">Adoptar</a>
                <a href="#join" className="link-animada">Voluntariado</a>
                <a href="#contact" className="link-animada">Contactar</a>
                <a href="#donate" className="px-6 py-2 bg-[#4CD964] hover:bg-[#3AB54A] transition-all ease-in text-white rounded-lg">Donar</a>
                
            </nav>

        </header>

    );

};

export default Header;