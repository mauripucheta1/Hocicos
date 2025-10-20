const Header = () => {

    return (
        
        <header className='w-full 2xl:h-[150px] flex justify-between items-center px-10 absolute z-50 bg-transparent text-white'>
        
            <div className="w-auto h-full flex items-center">

                <a href="#hero" className="flex items-center gap-3 text-nowrap">
                    <img src='/logo-hocicos.webp' alt='Logo Hocicos' className='w-full h-[110px] object-center object-contain' />
                    <p className="2xl:text-lg font-semibold uppercase leading-tight">Hocicos <br></br>de Caroya</p>
                </a>

            </div>

            <nav className="w-auto h-full flex items-center gap-5 2xl:text-lg font-medium uppercase" aria-label="Menú principal">

                <a href='#' className="link-animada">Nosotros</a>
                <a href='#' className="link-animada">Adoptar</a>
                <a href='#' className="link-animada">Contactar</a>
                <a href='#' className="px-6 py-2 bg-[#4CD964] hover:bg-[#3AB54A] transition-all ease-in text-white rounded-lg">Donar</a>

            </nav>

        </header>

    );

};

export default Header;