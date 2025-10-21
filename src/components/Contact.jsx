import { motion } from "framer-motion";

const Contact = () => {

    return (

        <section id="contact" className="w-full bg-gradient-to-b from-white to-[#E8FDEB] py-20 px-6 md:px-16 lg:px-32 overflow-hidden">

            {/* Título */}
            <motion.h2
                className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800 text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <span className="text-[#4CD964]">Contacto</span>
            </motion.h2>

            {/* Subtítulo */}
            <motion.p
                className="text-gray-700 max-w-3xl text-lg mb-12 leading-relaxed text-center mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                ¿Tenés dudas o querés colaborar con la reserva? Escribinos o contactanos
                directamente por nuestras redes. ¡Siempre estamos felices de leerte!
            </motion.p>

            {/* Contenedor principal */}
            <div className="flex flex-col md:flex-row gap-16 items-center md:items-stretch">

                {/* Columna izquierda */}
                <motion.div
                    className="md:w-1/2 flex flex-col justify-between space-y-8"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >

                    {/* Redes */}
                    <div className="flex flex-col items-center">

                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Redes sociales</h3>

                        <div className="flex gap-6">

                            {/* WhatsApp */}
                            <a href="https://wa.me/549XXXXXXXX" target="_blank" rel="noopener noreferrer" className="p-4 bg-[#4CD964] rounded-full text-white hover:bg-[#3DB356] transition-all">
                                
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                                    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                                </svg>

                            </a>

                            {/* Instagram */}
                            <a href="https://www.instagram.com/hocicosdecaroya/" target="_blank" rel="noopener noreferrer" className="p-4 bg-[#4CD964] rounded-full text-white hover:bg-[#3DB356] transition-all">
                               
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                    <path d="M16.5 7.5l0 .01" />
                                </svg>

                            </a>

                            {/* Facebook */}
                            <a href="https://www.facebook.com/groups/351042888301702/" target="_blank" rel="noopener noreferrer" className="p-4 bg-[#4CD964] rounded-full text-white hover:bg-[#3DB356] transition-all">
                               
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                </svg>

                            </a>

                        </div>

                    </div>

                    {/* Mapa */}
                    <div className="relative w-full h-80 rounded-3xl overflow-hidden shadow-xl">
                        <iframe
                            title="Ubicación del refugio"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.740230!2d-58.381559!3d-34.603684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM2JzEzLjMiUyA1OMKwMjInNTMuNyJX!5e0!3m2!1ses!2sar!4v1688055555555!5m2!1ses!2sar"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                </motion.div>

                {/* Columna derecha - Formulario */}
                <motion.form
                    className="w-full md:w-1/2 bg-white rounded-3xl shadow-2xl p-8 flex flex-col gap-6"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >

                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Escribinos</h3>
                    <input type="text" placeholder="Nombre completo" className="p-3 rounded-full border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-[#4CD964]" />
                    <input type="email" placeholder="Correo electrónico" className="p-3 rounded-full border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-[#4CD964]" />
                    <textarea placeholder="Tu mensaje..." rows="5" className="p-3 rounded-2xl border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-[#4CD964] 
                    resize-none"></textarea>

                    <button type="submit" className="w-full py-3 bg-[#4CD964] text-white rounded-full font-bold shadow-lg hover:bg-[#3DB356] transition-all hover:cursor-pointer">
                        Enviar mensaje
                    </button>

                </motion.form>

            </div>

        </section>

    );

};

export default Contact;