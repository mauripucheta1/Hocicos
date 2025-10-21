import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Main = () => {

    // Logros (estáticos de momento)
    const logros = [
        { number: "+350", text: "mascotas rescatadas", icon: "🐶" },
        { number: "+280", text: "adopciones responsables", icon: "🏡" },
        { number: "+50", text: "voluntarios", icon: "🤝" },
        { number: "+1200", text: "atenciones veterinarias", icon: "💉" },
    ];

    // Historias (estáticas por el momento)
    const historias = [
        {
            img: "/historia1.webp",
            name: "Luna",
            desc: "Rescatada de la calle, hoy disfruta del calor de un hogar.",
        },
        {
            img: "/historia2.webp",
            name: "Toby",
            desc: "Superó el abandono y encontró una familia amorosa.",
        },
        {
            img: "/historia3.webp",
            name: "Mora",
            desc: "Fue adoptada luego de meses de recuperación en el refugio.",
        },
        {
            img: "/historia1.webp",
            name: "Frida",
            desc: "Rescatada de la calle, hoy disfruta del calor de un hogar.",
        },
        {
            img: "/historia2.webp",
            name: "Lola",
            desc: "Superó el abandono y encontró una familia amorosa.",
        },
        {
            img: "/historia3.webp",
            name: "Bruno",
            desc: "Fue adoptada luego de meses de recuperación en el refugio.",
        },
        {
            img: "/historia1.webp",
            name: "Laika",
            desc: "Rescatada de la calle, hoy disfruta del calor de un hogar.",
        },
        {
            img: "/historia2.webp",
            name: "Teo",
            desc: "Superó el abandono y encontró una familia amorosa.",
        },
        {
            img: "/historia3.webp",
            name: "Negro",
            desc: "Fue adoptado luego de meses de recuperación en el refugio.",
        },
    ];

    // Animación del carrusel
    const controls = useAnimation();
    const carruselRef = useRef(null);

    useEffect(() => {

        if (!carruselRef.current) return;

        const totalWidth = carruselRef.current.scrollWidth / 2; 
        controls.start({
            x: [0, -totalWidth],
            transition: {
                x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" },
            },
        });

    }, [controls]);

    return (

        <main id="aboutWe" className="bg-white w-full h-auto py-16 sm:py-20 overflow-hidden">

            {/* Título principal */}
            <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-6 text-gray-800 px-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                Salvamos vidas. <span className="text-[#4CD964]">Inspiramos amor.</span>
            </motion.h2>

            {/* Subtítulo */}
            <motion.p
                className="text-center text-gray-600 max-w-3xl mx-auto text-base sm:text-lg mb-14 leading-relaxed px-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                En <strong>Refugio Hocicos</strong>, ubicado en <strong>Colonia Caroya, Córdoba, Argentina</strong>, 
                trabajamos día a día para rescatar, cuidar y reinsertar a los animales que fueron abandonados o maltratados. 
                Cada historia que comienza en nuestras manos busca terminar en un hogar lleno de amor.  
                Gracias al compromiso de voluntarios, donantes y adoptantes, cientos de perros ya encontraron una segunda oportunidad.  
                Nuestra misión es clara: <span className="text-[#4CD964] font-semibold">transformar el dolor en esperanza</span>, 
                y demostrar que con empatía y acción, podemos cambiar la realidad de los que no tienen voz.
            </motion.p>

            {/* Logros */}
            <div className="flex flex-col lg:flex-row justify-center items-center gap-14 px-6 lg:px-20 py-10 lg:py-24">

                {/* Imagen */}
                <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
                    <img
                    src="/logo-hocicos.webp"
                    alt="Imagen institucional de Hocicos"
                    className="w-4/5 sm:w-3/4 lg:w-full max-w-[480px] h-auto object-cover rounded-lg"
                    />
                </div>

                {/* Logros */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">

                    <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-10">
                        Nuestro impacto en números 🐾
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10 sm:gap-y-12">

                        {logros.map((item, idx) => (

                            <motion.div
                                key={idx}
                                className="flex flex-col items-center lg:items-start"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                viewport={{ once: true }}
                            >

                                <span className="text-5xl sm:text-6xl font-extrabold text-[#4CD964] mb-1 drop-shadow-sm">
                                    {item.number}
                                </span>

                                <span className="text-gray-700 text-lg sm:text-xl font-medium leading-snug flex items-center gap-2">
                                    <span className="text-2xl sm:text-3xl">{item.icon}</span>
                                    <span>{item.text}</span>
                                </span>

                            </motion.div>

                        ))}

                    </div>
                    
                </div>

            </div>

            {/* Carrusel de historias */}
            <section className="mt-20 text-center overflow-hidden relative bg-gradient-to-b from-white to-[#4CD964]/30 py-10 w-full">
                
                {/* Título */}
                <motion.h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-10 px-4"
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }} viewport={{ once: true }}>
                    Historias que <span className="text-[#4CD964]">nos inspiran</span>
                </motion.h3>

                <div className="relative w-full overflow-hidden">

                    <motion.div ref={carruselRef} className="flex gap-4 sm:gap-6 md:gap-8 will-change-transform" animate={controls}>

                        {[...historias, ...historias].map((story, idx) => (

                            <div key={idx} className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] xl:w-[340px] bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden flex-shrink-0">

                                <img src={story.img} alt={story.name} className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover hover:scale-105 transition-transform duration-500" />
                                
                                <div className="p-3 sm:p-4 md:p-6 text-center">
                                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">{story.name}</h4>
                                    <p className="text-gray-600 text-sm sm:text-base">{story.desc}</p>
                                </div>

                            </div>

                        ))}

                    </motion.div>

                </div>

            </section>

        </main>

    );

};

export default Main;