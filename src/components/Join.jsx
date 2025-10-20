import { motion } from "framer-motion";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";

const Join = () => {

    const [areaSeleccionada, setAreaSeleccionada] = useState("Área de interés");

    const areas = [
        {
            name: "Cuidado de mascotas",
            desc: "Alimenta, juega y cuida a los animales.",
            img: "/persona-alimentando-perro.jpg",
            tareas: [
            "Dar alimento y agua a los animales.",
            "Acompañar paseos y momentos de recreo.",
            "Colaborar con el control veterinario básico.",
            ],
        },
        {
            name: "Limpieza y mantenimiento",
            desc: "Ayuda a mantener el refugio limpio y seguro.",
            img: "/persona-limpiando-refugio.png",
            tareas: [
            "Limpieza de jaulas y espacios comunes.",
            "Desinfección y reposición de materiales.",
            "Reparación o mantenimiento básico de instalaciones.",
            ],
        },
        {
            name: "Actividades recreativas",
            desc: "Organiza juegos y paseos para las mascotas.",
            img: "/persona-organizando-actividades.png",
            tareas: [
            "Planificar paseos y eventos con animales.",
            "Crear actividades de socialización y estimulación.",
            "Colaborar en ferias o campañas de adopción.",
            ],
        },
    ];

    return (
        
        <section id="join" className="w-full py-20 px-6 md:px-16 lg:px-32">

            {/* Título */}
            <motion.h2
                className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800 text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <span className="text-[#4CD964]">Voluntariado</span>
            </motion.h2>

            {/* Subtítulo */}
            <motion.p
                className="text-gray-700 max-w-3xl text-lg mb-8 leading-relaxed text-center mx-auto mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                Sumate a nuestro equipo de voluntarios y ayudanos a cuidar a nuestros amigos peludos. 
                Podés participar en distintas áreas: cuidado de mascotas, limpieza, eventos y actividades 
                recreativas. También te mantenemos al día con nuestras noticias y eventos para que siempre 
                sepas cómo colaborar.
            </motion.p>

            <div className="flex flex-col md:flex-row gap-12">

                {/* Columna izquierda - Áreas de voluntariado */}
                <div className="md:w-1/2 flex flex-col gap-6">

                    {areas.map((area, idx) => (

                        <motion.div 
                            key={idx} 
                            className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                        >

                            <img src={area.img} alt={area.name} className="w-full md:w-1/3 h-48 object-contain" />

                            <div className="p-6 flex flex-col justify-center gap-2">

                                <h3 className="text-2xl font-bold text-gray-800 mb-2">{area.name}</h3>
                                <p className="text-gray-600 mb-4">{area.desc}</p>
                                <ul className="text-gray-600 text-xs list-disc ml-5 space-y-1">
                                    {area.tareas.map((tarea, i) => (
                                        <li key={i}>{tarea}</li>
                                    ))}
                                </ul>

                                <span className="bg-[#E8FDEB] text-[#4CD964] text-xs font-semibold px-3 py-1 rounded-full self-start">
                                    Voluntariado activo
                                </span>


                            </div>
                            
                        </motion.div>
                    ))}

                </div>

                {/* Columna derecha - Formulario + mini carrusel */}
                <div className="md:w-1/2 flex flex-col gap-8 relative">

                    {/* Formulario */}
                    <motion.form 
                        className="bg-white p-8 rounded-3xl shadow-2xl space-y-4 absolute top-1/2 -translate-y-1/2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        <h4 className="text-2xl font-bold text-gray-800 mb-4">Formulario de inscripción</h4>
                        <input type="text" placeholder="Nombre completo" className="p-3 rounded-xl border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-[#4CD964]" />
                        <input type="email" placeholder="Correo electrónico" className="p-3 rounded-xl border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-[#4CD964]" />
                        <input type="tel" placeholder="Teléfono" className="p-3 rounded-xl border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-[#4CD964]" />

                        {/* Selector de área */}
                        <div className="space-y-2">

                            <label className="block text-gray-700 font-semibold">Área de interés</label>

                            <Listbox value={areaSeleccionada} onChange={setAreaSeleccionada}>

                                <div className="relative">

                                    <Listbox.Button className="relative w-full cursor-pointer rounded-full border border-gray-300 bg-white py-3 pl-4 pr-10 text-left focus:outline-none focus:ring-2 focus:ring-[#4CD964]">
                                        <span className="block truncate">{areaSeleccionada}</span>
                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
                                        </span>
                                    </Listbox.Button>

                                    <Transition
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >

                                        <Listbox.Options className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 text-base shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">

                                            {["Cuidado de mascotas", "Limpieza y mantenimiento", "Actividades recreativas"].map((area) => (

                                                <Listbox.Option key={area} value={area}
                                                className={({ active }) =>
                                                    `relative cursor-pointer select-none py-2 px-4 flex justify-between items-center ${
                                                    active ? "bg-[#4CD964] text-white" : "text-gray-700"
                                                    }`
                                                }>

                                                    {({ selected }) => (
                                                        <>
                                                        <span
                                                            className={`block truncate ${
                                                            selected ? "font-semibold" : "font-normal"
                                                            }`}
                                                        >
                                                            {area}
                                                        </span>
                                                        {selected && (
                                                            <CheckIcon className="h-5 w-5 text-gray-700" />
                                                        )}
                                                        </>
                                                    )}

                                                </Listbox.Option>

                                            ))}

                                        </Listbox.Options>

                                    </Transition>

                                </div>

                            </Listbox>

                        </div>

                        <button className="w-full py-3 bg-[#4CD964] text-white rounded-2xl font-bold shadow-lg hover:bg-[#3DB356] hover:cursor-pointer transition-all">
                            Enviar
                        </button>

                    </motion.form>

                </div>

            </div>

        </section>

    );

};

export default Join;