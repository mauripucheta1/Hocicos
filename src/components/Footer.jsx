
const Footer = () => {

    return (

        <footer className="w-full py-10 px-6 2xl:px-20 bg-gradient-to-b from-[#E8FDEB] to-[#4CD964] text-gray-800">

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Columna 1 - Sobre la organización */}
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">Hocicos de Caroya</h3>
                    <p className="text-sm leading-relaxed">
                        Somos una reserva natural dedicada al rescate, rehabilitación y adopción responsable de animales.
                        Gracias por ser parte de esta comunidad solidaria.
                    </p>
                </div>

                {/* Columna 2 - Contacto */}
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">Contacto</h3>
                    <ul className="text-sm space-y-2">
                        <li>
                            📍 Colonia Caroya, Córdoba, Argentina
                        </li>
                        <li>
                            📧 <a href="mailto:example@gmail.com" className="hover:underline">example@gmail.com</a>
                        </li>
                        <li>
                            📱 <a href="https://wa.me/XXXXXXXX" target="_blank" rel="noopener noreferrer" className="hover:underline">+54 9 XXXXXXX</a>
                        </li>
                        <li>
                            💬 <a href="https://www.instagram.com/hocicosdecaroya" target="_blank" rel="noopener noreferrer" className="hover:underline">@hocicosdecaroya</a>
                        </li>
                    </ul>
                </div>

                {/* Columna 3 - Frase + Créditos */}
                <div className="flex flex-col justify-between">

                    <blockquote className="italic text-sm mb-6 border-l-4 border-[#3DB356] pl-3">
                        “Hasta que no hayas amado a un animal, una parte de tu alma permanecerá dormida.”  
                        <br />– Anatole France
                    </blockquote>

                    <p className="text-xs text-gray-700">
                        Desarrollado con 💚 por <a href="https://mauriciopucheta.com" target="_blank" className="font-semibold">Mauricio Pucheta</a>  
                        <br />© 2025 Hocicos de Caroya — Todos los derechos reservados.
                    </p>
                    
                </div>

            </div>

        </footer>

    );

};

export default Footer;