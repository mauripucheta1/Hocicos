import { use, useState } from "react";

const Hero = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        '/hero-street-dog.webp',
        '/hero-street-dog-2.webp',
        '/hero-street-dog-3.webp',
        '/hero-street-dog-4.webp'
    ];

    const nextImage = () => {
        setCurrentIndex(prev => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex(prev => (prev - 1) % images.length);
    };

    return (

        <section className='w-full h-screen'>

            <div className="relative">

                <img src={images[currentIndex]} alt='Imagen Hero' className='w-full h-screen object-center brightness-50' />

                {/* Imagen anterior */}
                <button className="hover:cursor-pointer bg-gray-200 hover:bg-gray-800 ease-in transition-all absolute top-1/2 -translate-y-1/2 left-8 p-1 rounded-full" onClick={prevImage}>
                
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4cd964" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z" />
                    </svg>

                </button>

                {/* Imagen posterior */}
                <button className="hover:cursor-pointer bg-gray-200 hover:bg-gray-800 ease-in transition-all absolute top-1/2 -translate-y-1/2 right-8 p-1 rounded-full" onClick={nextImage}>
                
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4cd964" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z" />
                    </svg>
                
                </button>

            </div>
        
        </section>  

    );

};

export default Hero;