import { motion } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Donate = () => {

    return (

        <section id="donate" className="w-full py-20 px-6 md:px-16 lg:px-32">

            {/* Hero con imagen de fondo */}
            <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden mb-12">

                <img src="/bg-donate.webp" alt="Mascotas que necesitan ayuda" className="w-full h-full object-cover brightness-75" />

                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">

                    {/* Título */}
                    <motion.h2
                        className="text-4xl md:text-5xl font-extrabold mb-4 text-white"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[#4CD964]">Donaciones</span>
                    </motion.h2>

                    {/* Subtítulo */}
                    <motion.p
                        className="text-white max-w-3xl text-lg mb-8 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Ayudanos a seguir cuidando a nuestros amigos peludos. Podés colaborar
                        donando dinero para cubrir gastos generales o donando insumos directamente.
                    </motion.p>

                    {/* Botones de donación */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6">

                        <motion.button
                            className="w-full md:w-64 py-4 bg-[#4CD964] text-white font-bold rounded-2xl shadow-lg hover:bg-[#3DB356] hover:cursor-pointer transition-all text-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Donar dinero
                        </motion.button>

                        <motion.button
                            className="w-full md:w-64 py-4 bg-white border-2 border-[#4CD964] text-[#4CD964] font-bold rounded-2xl shadow-lg hover:bg-[#4CD964] hover:cursor-pointer hover:text-white transition-all text-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Donar insumos
                        </motion.button>

                    </div>

                </div>

            </div>

            {/* Contenedor */}
            <div className="w-full flex justify-center">

                {/* Contenido */}
                <div>

                    {/* Lista de insumos necesarios */}
                    <motion.div
                        className="max-w-4xl mx-auto mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >

                        {[
                            { name: "Comida seca", emoji: "🥫" },
                            { name: "Comida húmeda", emoji: "🍖" },
                            { name: "Medicamentos", emoji: "💊" },
                            { name: "Mantas y ropa", emoji: "🛏️" },
                            { name: "Juguetes", emoji: "🧸" },
                            { name: "Camas y colchonetas", emoji: "🛌" },
                        ].map((item, idx) => (

                            <div key={idx} className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 shadow-md bg-white">
                                <span className="text-2xl">{item.emoji}</span>
                                <span className="font-semibold text-gray-800">{item.name}</span>
                            </div>

                        ))}

                    </motion.div>

                    {/* Transparencia / agradecimientos */}
                    <motion.div
                        className="max-w-3xl mx-auto text-center bg-[#4CD964]/10 p-6 rounded-2xl shadow-inner"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Transparencia y agradecimientos</h3>
                        <p className="text-gray-700 text-base leading-relaxed">
                            Cada donación se destina directamente al cuidado de nuestras mascotas. 
                            Agradecemos profundamente tu colaboración, cada aporte hace la diferencia.
                        </p>
                    </motion.div>

                </div>
                        
                {/* Iframe + cucha */}
                <div className="flex items-center">

                    <DotLottieReact
                        src="https://lottie.host/51d2b57b-ee56-4538-93d5-961a4c79b8b3/MsOywRuokx.lottie"
                        loop
                        autoplay
                    />

                    <img src="/cucha-perro.png" alt="Cucha del perro" className="w-[180px] h-[200px]" />

                </div>

            </div>
            
            {/* Barra de progreso */}
            <div className="w-full mt-10 flex flex-col gap-4">

                <p className="text-gray-700 font-semibold text-center text-lg">Barra de progreso</p>

                <div className="w-full bg-gray-200 rounded-full h-4">

                    <motion.div
                        className="bg-[#4CD964] h-4 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "45%" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />

                </div>
                
            </div>

        </section>

    );

};

export default Donate;