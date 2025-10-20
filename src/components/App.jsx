import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Main from "./Main";
import Adopt from "./Adopt";
import Donate from "./Donate";
import Join from "./Join";
import Contact from "./Contact";
import Footer from "./Footer";

export default function App () {

    return (

        <>
        
            {/* Header */}
            <Header />

            {/* Hero */}
            <Hero />

            {/* Main (sobre nosotros) */}
            <Main />

            {/* Section (adopciones) */}
            <Adopt />

            {/* Section (donaciones) */}
            <Donate />
            
            {/* Section (campañas / novedades / voluntariado) */}
            <Join />

            {/* Section (contacto) */}
            <Contact />

            {/* Footer */}
            <Footer />

        </>

    );

};