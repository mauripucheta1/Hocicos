import { motion } from "framer-motion";

const Main = () => {

    // Logros (estáticos de momento)
    const logros = [
        { number: "+350", text: "mascotas rescatadas", icon: "🐶" },
        { number: "+280", text: "adopciones responsables", icon: "🏡" },
        { number: "+50", text: "voluntarios", icon: "🤝" },
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

    return (

        <main id="aboutWe" className="bg-white w-full h-auto py-20 overflow-hidden">

            {/* Título principal */}
            <motion.h2
                className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-gray-800"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                Salvamos vidas. <span className="text-[#4CD964]">Inspiramos amor.</span>
            </motion.h2>

            {/* Subtítulo */}
            <motion.p
                className="text-center text-gray-600 max-w-3xl mx-auto text-lg mb-14 leading-relaxed"
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
            <div className="flex 2xl:flex-row justify-center gap-10">

                <div className="w-1/2 rounded-lg">

                    <img src="/main-hocicos.jpg" alt="Imagen institucional de Hocicos" className="w-full h-full object-center object-cover rounded-lg" />

                </div>

                <div className="flex flex-col gap-3">

                    {logros.map((item, idx) => (

                        <motion.div
                            key={idx}
                            className="bg-white border border-gray-200 rounded-2xl shadow-md p-8 text-center"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                        >

                            <div className="text-5xl mb-4">{item.icon}</div>
                            <h3 className="text-4xl font-extrabold text-[#4CD964] mb-2">
                                {item.number}
                            </h3>
                            <p className="text-gray-700 text-lg font-medium">{item.text}</p>

                        </motion.div>

                    ))}

                </div>

            </div>

            {/* Historias de éxito */}
            <section className="mt-20 text-center overflow-hidden relative bg-gradient-to-b from-white to-[#4CD964] py-4 w-full">

                <motion.h3
                    className="text-3xl md:text-4xl font-bold text-gray-800 mb-10"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Historias que <span className="text-[#4CD964]">nos inspiran</span>
                </motion.h3>

                {/* Carrusel infinito */}
                <div className="relative w-full overflow-hidden">

                    <motion.div
                        className="flex gap-8"
                        animate={{ x: ["0%", "-100%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 40, 
                        }}
                    >

                        {/* Repetimos las historias dos veces para lograr efecto infinito */}
                        {[...historias, ...historias].map((story, idx) => (

                            <div key={idx} className="min-w-[300px] sm:min-w-[340px] md:min-w-[360px] bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden flex-shrink-0">

                                <img
                                    src={story.img}
                                    alt={story.name}
                                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                                />

                                <div className="p-6 text-center">

                                    <h4 className="text-2xl font-bold text-gray-800 mb-2">
                                        {story.name}
                                    </h4>
                                    <p className="text-gray-600">{story.desc}</p>
                                    
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