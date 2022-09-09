import { useState } from "react";
import { Buscador } from "./Components/Buscador";
import { Crear } from "./Components/Crear";
import { Footer } from "./Components/EstructuraBasica/Footer";
import { Header } from "./Components/EstructuraBasica/Header";
import { Menu } from "./Components/EstructuraBasica/Menu";
import { ListadoPeliculas } from "./Components/ListadoPeliculas";

function App() {
  const [listadpState, setListadoState]= useState([]);
  return (
    <div className="layout">
        {/*<!-- Cabecera del Sitio -->*/}
        <Header/>

       {/* <!-- Barra de Navegación --> */}
        <Menu/>

        {/*<!-- Contenido Principal -->*/}
        <section id="content" className="content">
            {/*<!-- Aquí va el listado de películas -->*/}
            <ListadoPeliculas listadpState={listadpState} setListadoState={setListadoState}/>
        </section>

        {/*<!-- Barra Lateral -->*/}
        <aside className="lateral">
            {/*<!-- Buscador -->*/}
            <Buscador listadpState={listadpState} setListadoState={setListadoState}/>
            {/*<!-- Añadir Películas -->*/}
            <Crear setListadoState={setListadoState}/>
        </aside>

        {/*<!-- Footer -->*/}
        <Footer/>
    </div>
  );
}

export default App;
