import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            image: "/hero-street-dog-2.webp",
            title: "Adoptá un amigo, salvá una vida",
            subtitle: "Miles de perritos esperan una segunda oportunidad.",
            buttons: ["Adoptá", "Doná"],
        },
        {
            image: "/hero-street-dog.webp",
            title: "El amor no se compra, se rescata",
            subtitle: "Ayudanos a seguir cuidando y alimentando a los que más lo necesitan.",
            buttons: ["Ver más", "Doná"],
        },
        {
            image: "/hero-street-dog-3.webp",
            title: "Tu ayuda puede cambiar su destino",
            subtitle: "Cada granito de arena cuenta para salvar vidas.",
            buttons: ["Salvá vidas", "Doná"],
        },
        {
            image: "/hero-street-dog-4.webp",
            title: "Un hogar, una historia nueva",
            subtitle: "Convertite en parte del cambio. Ellos te necesitan.",
            buttons: ["Ver más", "Doná"],
        },
    ];

    const nextImage = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
    const prevImage = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

    return (

        <section id="heroSection" className="relative w-full h-screen overflow-hidden">

            <AnimatePresence mode="wait">

                <motion.img
                    key={slides[currentIndex].image}
                    src={slides[currentIndex].image}
                    alt="Imagen Hero"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="w-full h-screen object-cover brightness-50 absolute inset-0"
                />

            </AnimatePresence>

            {/* Contenido textual */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

                <motion.h1
                    key={slides[currentIndex].title}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-4xl md:text-6xl font-bold text-white mb-4"
                >
                    {slides[currentIndex].title}
                </motion.h1>

                <motion.p
                    key={slides[currentIndex].subtitle}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    className="text-lg md:text-2xl text-gray-100 max-w-2xl"
                >
                    {slides[currentIndex].subtitle}
                </motion.p>

                {/* Botones */}
                <motion.div
                    key={slides[currentIndex].buttons.join("-")}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.3, ease: "easeOut", delay: 0.4 }}
                    className="flex flex-wrap justify-center gap-4 mt-8"
                >

                    {slides[currentIndex].buttons.map((btn, idx) => {
                        
                        let target = "#";
                        switch (btn) {
                            case "Adoptá":
                                target = "#adopt";
                                break;
                            case "Ver más":
                                target = "#aboutWe";
                                break;
                            case "Doná":
                                target = "#donate";
                                break;
                            case "Salvá vidas":
                                target = "#join";
                                break;
                        }

                        const handleClick = () => {
                            const el = document.querySelector(target);
                            if (el) {
                                el.scrollIntoView({ behavior: "smooth" });
                            }
                        };

                        return (
                            <button
                                key={idx}
                                onClick={handleClick}
                                className={`px-6 py-3 rounded-full font-semibold transition-all hover:cursor-pointer ${
                                    idx === 0
                                        ? "bg-[#4cd964] text-white hover:bg-[#3cbf54]"
                                        : "bg-transparent border border-white text-white hover:bg-white hover:text-gray-900"
                                }`}
                            >
                                {btn}
                            </button>
                        );

                    })}

                </motion.div>

            </div>

            {/* Botones de navegación */}
            <button onClick={prevImage} className="absolute top-1/2 left-6 -translate-y-1/2 bg-gray-200/20 hover:bg-gray-800/40 transition-all rounded-full p-2 z-20 hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" stroke="#4cd964" fill="none" viewBox="0 0 24 24">
                    <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <button onClick={nextImage} className="absolute top-1/2 right-6 -translate-y-1/2 bg-gray-200/20 hover:bg-gray-800/40 transition-all rounded-full p-2 z-20 hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" stroke="#4cd964" fill="none" viewBox="0 0 24 24">
                    <path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

        </section>

    );

};

export default Hero;