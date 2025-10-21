import { Fragment, useState, useEffect} from "react";
import { motion } from "framer-motion";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/24/solid";

// 🐕 Datos estáticos de mascotas
const mascotas = [
  {
    nombre: "Luna",
    edad: "2 años",
    tamaño: "Mediano",
    tipo: "Perro",
    descripcion: "Rescatada de la calle, muy juguetona y cariñosa.",
    foto: "/adopt/luna.webp",
    whatsapp: "5493512345678"
  },
  {
    nombre: "Toby",
    edad: "3 años",
    tamaño: "Grande",
    tipo: "Perro",
    descripcion: "Amigable y sociable, ideal para familias.",
    foto: "/adopt/toby.webp",
    whatsapp: "5493512345678"
  },
  {
    nombre: "Mora",
    edad: "1 año",
    tamaño: "Pequeño",
    tipo: "Perro",
    descripcion: "Juguetona y muy tierna, necesita mucho cariño.",
    foto: "/adopt/mora.webp",
    whatsapp: "5493512345678"
  },
  {
    nombre: "Luna",
    edad: "2 años",
    tamaño: "Mediano",
    tipo: "Perro",
    descripcion: "Rescatada de la calle, muy juguetona y cariñosa.",
    foto: "/adopt/luna.webp",
    whatsapp: "5493512345678"
  },
  {
    nombre: "Toby",
    edad: "3 años",
    tamaño: "Grande",
    tipo: "Perro",
    descripcion: "Amigable y sociable, ideal para familias.",
    foto: "/adopt/toby.webp",
    whatsapp: "5493512345678"
  },
  {
    nombre: "Mora",
    edad: "1 año",
    tamaño: "Pequeño",
    tipo: "Perro",
    descripcion: "Juguetona y muy tierna, necesita mucho cariño.",
    foto: "/adopt/mora.webp",
    whatsapp: "5493512345678"
  },
  {
    nombre: "Luna",
    edad: "2 años",
    tamaño: "Mediano",
    tipo: "Perro",
    descripcion: "Rescatada de la calle, muy juguetona y cariñosa.",
    foto: "/adopt/luna.webp",
    whatsapp: "5493512345678"
  },
  {
    nombre: "Toby",
    edad: "3 años",
    tamaño: "Grande",
    tipo: "Perro",
    descripcion: "Amigable y sociable, ideal para familias.",
    foto: "/adopt/toby.webp",
    whatsapp: "5493512345678"
  },
  {
    nombre: "Mora",
    edad: "1 año",
    tamaño: "Pequeño",
    tipo: "Perro",
    descripcion: "Juguetona y muy tierna, necesita mucho cariño.",
    foto: "/adopt/mora.webp",
    whatsapp: "5493512345678"
  },
  {
    nombre: "Luna",
    edad: "2 años",
    tamaño: "Mediano",
    tipo: "Perro",
    descripcion: "Rescatada de la calle, muy juguetona y cariñosa.",
    foto: "/adopt/luna.webp",
    whatsapp: "5493512345678"
  },
  {
    nombre: "Toby",
    edad: "3 años",
    tamaño: "Grande",
    tipo: "Perro",
    descripcion: "Amigable y sociable, ideal para familias.",
    foto: "/adopt/toby.webp",
    whatsapp: "5493512345678"
  },
  {
    nombre: "Mora",
    edad: "1 año",
    tamaño: "Pequeño",
    tipo: "Perro",
    descripcion: "Juguetona y muy tierna, necesita mucho cariño.",
    foto: "/adopt/mora.webp",
    whatsapp: "5493512345678"
  },
  {
    nombre: "Mora",
    edad: "1 año",
    tamaño: "Pequeño",
    tipo: "Perro",
    descripcion: "Juguetona y muy tierna, necesita mucho cariño.",
    foto: "/adopt/mora.webp",
    whatsapp: "5493512345678"
  },
  {
    nombre: "Mora",
    edad: "1 año",
    tamaño: "Pequeño",
    tipo: "Perro",
    descripcion: "Juguetona y muy tierna, necesita mucho cariño.",
    foto: "/adopt/mora.webp",
    whatsapp: "5493512345678"
  },
  {
    nombre: "Mora",
    edad: "1 año",
    tamaño: "Pequeño",
    tipo: "Perro",
    descripcion: "Juguetona y muy tierna, necesita mucho cariño.",
    foto: "/adopt/mora.webp",
    whatsapp: "5493512345678"
  },{
    nombre: "Mora",
    edad: "1 año",
    tamaño: "Pequeño",
    tipo: "Perro",
    descripcion: "Juguetona y muy tierna, necesita mucho cariño.",
    foto: "/adopt/mora.webp",
    whatsapp: "5493512345678"
  },{
    nombre: "Mora",
    edad: "1 año",
    tamaño: "Pequeño",
    tipo: "Perro",
    descripcion: "Juguetona y muy tierna, necesita mucho cariño.",
    foto: "/adopt/mora.webp",
    whatsapp: "5493512345678"
  },{
    nombre: "Mora",
    edad: "1 año",
    tamaño: "Pequeño",
    tipo: "Perro",
    descripcion: "Juguetona y muy tierna, necesita mucho cariño.",
    foto: "/adopt/mora.webp",
    whatsapp: "5493512345678"
  },{
    nombre: "Mora",
    edad: "1 año",
    tamaño: "Pequeño",
    tipo: "Perro",
    descripcion: "Juguetona y muy tierna, necesita mucho cariño.",
    foto: "/adopt/mora.webp",
    whatsapp: "5493512345678"
  },{
    nombre: "Mora",
    edad: "1 año",
    tamaño: "Pequeño",
    tipo: "Perro",
    descripcion: "Juguetona y muy tierna, necesita mucho cariño.",
    foto: "/adopt/mora.webp",
    whatsapp: "5493512345678"
  },{
    nombre: "Mora",
    edad: "1 año",
    tamaño: "Pequeño",
    tipo: "Perro",
    descripcion: "Juguetona y muy tierna, necesita mucho cariño.",
    foto: "/adopt/mora.webp",
    whatsapp: "5493512345678"
  },{
    nombre: "Mora",
    edad: "1 año",
    tamaño: "Pequeño",
    tipo: "Perro",
    descripcion: "Juguetona y muy tierna, necesita mucho cariño.",
    foto: "/adopt/mora.webp",
    whatsapp: "5493512345678"
  },{
    nombre: "Mora",
    edad: "1 año",
    tamaño: "Pequeño",
    tipo: "Perro",
    descripcion: "Juguetona y muy tierna, necesita mucho cariño.",
    foto: "/adopt/mora.webp",
    whatsapp: "5493512345678"
  },{
    nombre: "Mora",
    edad: "1 año",
    tamaño: "Pequeño",
    tipo: "Perra",
    descripcion: "Juguetona y muy tierna, necesita mucho cariño.",
    foto: "/adopt/mora.webp",
    whatsapp: "5493512345678"
  },
  {
    nombre: "Mora",
    edad: "1 año",
    tamaño: "Pequeño",
    tipo: "Perro",
    descripcion: "Juguetona y muy tierna, necesita mucho cariño.",
    foto: "/adopt/mora.webp",
    whatsapp: "5493512345678"
  },
  {
    nombre: "Mora",
    edad: "1 año",
    tamaño: "Pequeño",
    tipo: "Perro",
    descripcion: "Juguetona y muy tierna, necesita mucho cariño.",
    foto: "/adopt/mora.webp",
    whatsapp: "5493512345678"
  },
  {
    nombre: "Mora",
    edad: "1 año",
    tamaño: "Pequeño",
    tipo: "Perro",
    descripcion: "Juguetona y muy tierna, necesita mucho cariño.",
    foto: "/adopt/mora.webp",
    whatsapp: "5493512345678"
  },

];

// 🟢 Componente principal
const Adopt = () => {

    const [pagina, setPagina] = useState(1);
    const [tipo, setTipo] = useState("Todos");
    const [edad, setEdad] = useState("Todas");
    const [tamaño, setTamaño] = useState("Todos");

    const filasMax = 3; 
    const [mascotasPorPagina, setMascotasPorPagina] = useState(12);

    // Recalcular según tamaño de pantalla
    useEffect(() => {

        const calcularMascotasPorPagina = () => {
            let columnas = 1;
            const width = window.innerWidth;

            if (width >= 1280) columnas = 4; 
            else if (width >= 1024) columnas = 4; 
            else if (width >= 768) columnas = 3; 
            else if (width >= 640) columnas = 2; 
            else columnas = 1; 

            const filas = columnas === 1 ? 4 : filasMax;
            setMascotasPorPagina(columnas * filas);
            setPagina(1); 
        };

        calcularMascotasPorPagina();
        window.addEventListener("resize", calcularMascotasPorPagina);
        return () => window.removeEventListener("resize", calcularMascotasPorPagina);

    }, []);

    // Filtrado dinámico
    const mascotasFiltradas = mascotas.filter((pet) => {
        const tipoMatch = tipo === "Todos" || pet.tipo === tipo;
        const tamañoMatch = tamaño === "Todos" || pet.tamaño === tamaño;
        const edadMatch = edad === "Todas" || parseInt(pet.edad) === Number(edad);
        return tipoMatch && tamañoMatch && edadMatch;
    });

    const totalPaginas = Math.ceil(mascotasFiltradas.length / mascotasPorPagina);
    const mascotasMostradas = mascotasFiltradas.slice(
        (pagina - 1) * mascotasPorPagina,
        pagina * mascotasPorPagina
    );

    return (

        <section id="adopt" className="bg-white w-full py-20 px-6 md:px-16 lg:px-32">
            
            {/* Título */}
            <motion.h2
                id="refTitle"
                className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                Mascotas en <span className="text-[#4CD964]">Adopción</span>
            </motion.h2>

            {/* Subtítulo */}
            <motion.p
                className="text-center text-gray-600 max-w-3xl mx-auto text-lg mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                Conocé a nuestros amigos peludos que buscan un hogar lleno de amor.
                Cada uno tiene su historia y está esperando a alguien que cambie su vida.
                Adoptar es darles una segunda oportunidad y llenar tu corazón de alegría.
            </motion.p>


            {/* Filtros */}
            <div className="flex flex-col items-center md:flex-row justify-center gap-4 mb-12">

                {/* Tipo */}
                <div className="flex flex-col items-center w-40 gap-2">

                    <span className="bg-[#4CD964] text-white text-base font-semibold px-2 py-1 rounded-full mb-1 w-[80px] text-center">
                        Tipo
                    </span>

                    <Listbox value={tipo} onChange={setTipo}>
                        
                        <div className="relative w-40">

                            <Listbox.Button className="relative w-full cursor-pointer rounded-full border border-gray-300 bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus:ring-2 focus:ring-[#4CD964]">
                                <span className="block truncate">{tipo}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400 ml-2" />
                                </span>
                            </Listbox.Button>

                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >

                                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">

                                    {["Todos", "Perro", "Perra", "Gato", "Gata"].map((t) => (

                                        <Listbox.Option key={t} value={t} className={({ active }) =>
                                            `relative cursor-pointer select-none py-2 px-4 flex justify-between items-center ${
                                                active ? "bg-[#4CD964] text-white" : "text-gray-700"
                                            }`
                                        }>

                                            {({ selected }) => (
                                                <>
                                                    <span className={`block truncate ${selected ? "font-semibold" : "font-normal"}`}>
                                                        {t}
                                                    </span>
                                                    {selected && <CheckIcon className="h-5 w-5 text-gray-700" />}
                                                </>
                                            )}

                                        </Listbox.Option>                                 

                                    ))}

                                </Listbox.Options>

                            </Transition>

                        </div>

                    </Listbox>

                </div>

                {/* Edad */}
                <div className="flex flex-col items-center w-40 gap-2">

                    <span className="bg-[#4CD964] text-white text-base font-semibold px-2 py-1 rounded-full mb-1 w-[80px] text-center">
                        Edad
                    </span>

                    <Listbox value={edad} onChange={setEdad}>

                        <div className="relative w-40">

                            <Listbox.Button className="relative w-full cursor-pointer rounded-full border border-gray-300 bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus:ring-2 focus:ring-[#4CD964]">
                                <span className="block truncate">{edad === "" ? "Edad" : edad}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
                                </span>
                            </Listbox.Button>

                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">

                                    {["Todas", "1", "2", "3", "4", "5"].map((e) => (

                                    <Listbox.Option key={e} value={e} className={({ active }) =>
                                            `relative cursor-pointer select-none py-2 px-4 flex justify-between items-center ${
                                                active ? "bg-[#4CD964] text-white" : "text-gray-700"
                                            }`
                                        }>

                                            {({ selected }) => (
                                                <>
                                                    <span className={`block truncate ${selected ? "font-semibold" : "font-normal"}`}>
                                                        {e}
                                                    </span>
                                                    {selected && <CheckIcon className="h-5 w-5 text-gray-700" />}
                                                </>
                                            )}

                                        </Listbox.Option>

                                    ))}

                                </Listbox.Options>

                            </Transition>

                        </div>

                    </Listbox>

                </div>

                {/* Tamaño */}
                <div className="flex flex-col items-center w-40 gap-2">

                    <span className="bg-[#4CD964] text-white text-base font-semibold px-2 py-1 rounded-full mb-1 w-[80px] text-center">
                        Tamaño
                    </span>

                    <Listbox value={tamaño} onChange={setTamaño}>

                        <div className="relative w-40">

                            <Listbox.Button className="relative w-full cursor-pointer rounded-full border border-gray-300 bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus:ring-2 focus:ring-[#4CD964]">
                                <span className="block truncate">{tamaño}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
                                </span>
                            </Listbox.Button>

                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >

                                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">

                                    {["Todos", "Pequeño", "Mediano", "Grande"].map((t) => (

                                        <Listbox.Option key={t} value={t} className={({ active }) =>
                                            `relative cursor-pointer select-none py-2 px-4 flex justify-between items-center ${
                                                active ? "bg-[#4CD964] text-white" : "text-gray-700"
                                            }`
                                        }>

                                            {({ selected }) => (
                                                <>
                                                    <span className={`block truncate ${selected ? "font-semibold" : "font-normal"}`}>
                                                        {t}
                                                    </span>
                                                    {selected && <CheckIcon className="h-5 w-5 text-gray-700" />}
                                                </>
                                            )}

                                        </Listbox.Option>

                                    ))}

                                </Listbox.Options>

                            </Transition>

                        </div>

                    </Listbox>

                </div>

            </div>

            {/* Grid de tarjetas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

                {mascotasMostradas.length > 0 ? (

                    mascotasMostradas.map((pet, idx) => (

                        <motion.div
                            key={idx}
                            className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all flex flex-col"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >

                            <img src={pet.foto}  alt={pet.nombre} className="w-full h-40 sm:h-56 md:h-64 lg:h-72 object-cover hover:scale-105 transition-transform duration-500" />

                            <div className="p-6 flex flex-col flex-1">

                                <h3 className="text-2xl font-bold text-gray-800 mb-2">{pet.nombre}</h3>
                                <p className="text-gray-600 text-sm mb-2">{pet.descripcion}</p>

                                <p className="text-gray-500 text-sm mb-4">
                                    {pet.tipo} • {pet.edad} • {pet.tamaño}
                                </p>

                                <a href={`https://wa.me/${pet.whatsapp}?text=Hola!%20Quiero%20adoptar%20a%20${pet.nombre}`} target="_blank" rel="noopener noreferrer" className="mt-auto px-4 py-2 bg-[#4CD964] text-white font-semibold rounded-lg text-center hover:bg-[#3db356] transition-all">
                                    Quiero adoptar
                                </a>

                            </div>

                        </motion.div>

                    ))

                ) : (

                    <p className="col-span-full text-center text-gray-500">No se encontraron mascotas con esos filtros.</p>

                )}

            </div>

            {/* Botonera de paginación */}
            <div className="flex flex-col items-center mt-12 gap-2">

                <div className="flex items-center gap-3">

                    {/* Retroceder */}
                    <button onClick={() => { setPagina(prev => 

                        { 
                            const next = Math.max(prev - 1, 1);
                            document.getElementById("refTitle")?.scrollIntoView({ behavior: "smooth" });
                            return next;
                        });

                    }} className="px-4 py-2 rounded-full font-semibold bg-gray-200 text-gray-700 hover:bg-[#4CD964]/30 transition-all">
                        &lt;
                    </button>

                    {/* Input de página */}
                    <div className="flex flex-col items-center">

                        <input type="number" min={1} max={totalPaginas} value={pagina} onChange={(e) => 

                            {
                                const val = parseInt(e.target.value);
                                if (!isNaN(val)) setPagina(val);
                            }}

                        className="w-16 px-3 py-2 text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CD964] border-gray-400" />

                        {pagina < 1 || pagina > totalPaginas ? (
                            <span className="text-red-500 text-xs mt-1">Página no encontrada</span>
                        ) : null}

                    </div>

                    {/* Avanzar */}
                    <button onClick={() => { setPagina(prev => 

                        {
                            const next = Math.min(prev + 1, totalPaginas);
                            document.getElementById("refTitle")?.scrollIntoView({ behavior: "smooth" });
                            return next;
                        });

                    }} className="px-4 py-2 rounded-full font-semibold bg-gray-200 text-gray-700 hover:bg-[#4CD964]/30 transition-all">
                        &gt;
                    </button>

                </div>

                {/* Total de páginas */}
                <span className="text-gray-500 text-sm mt-1">
                    de {totalPaginas} páginas
                </span>

            </div>

        </section>

    );

};

export default Adopt;