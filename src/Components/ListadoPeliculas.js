import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const ListadoPeliculas = ({listadpState, setListadoState}) => {

  //const [listadpState, setListadoState]= useState([]);
  const [editar, setEditar]= useState(0);

  const conseguirPeliculas= () =>{
    let peliculas= JSON.parse(localStorage.getItem('pelis'));
    console.log(peliculas);
    setListadoState(peliculas);
    return peliculas;
  }
  const borrarPeli= (id)=>{
    // Consegui peliculas almacenadas
    let peliculas= conseguirPeliculas();

    // Filtrar para buscar la que necesitamos borrar
    let nuevoListado= peliculas.filter(peli=> peli.id!==parseInt(id));

    // Actualizar los datos en el localStorage
    localStorage.setItem('pelis', JSON.stringify(nuevoListado));

    // Actualizar estado del listado
    setListadoState(JSON.parse(localStorage.getItem('pelis')));
    console.log(listadpState);
  }

  useEffect(()=>{
    conseguirPeliculas();
  },[]);
  return (
    <>
    {listadpState != null && listadpState.length>0 ? 
    (
      listadpState.map(peli=>{
      return (
        <article className="peli-item" key={peli.id}>
            <h3 className="title">{peli.titulo}</h3>
            <p className="description">{peli.descripcion}</p>

            <button className="edit" onClick={()=> setEditar(peli.id)}>Editar</button>
            <button className="delete" onClick={()=>{borrarPeli(peli.id)}}>Eliminar</button>
            <div>
              {editar===peli.id && (
                <Editar peli={peli} conseguirPeliculas={conseguirPeliculas} setEditar={setEditar} 
                  setListadoState={setListadoState}/>
              )}
            </div>
        </article>
      );
    })
    )
    :
    (

    <>
      <article className='peli-item'>
        <h3>No hay peliculas, añade una.</h3>
      </article>
      
      
    </>
    
    )
    }
    </>
  )
}
