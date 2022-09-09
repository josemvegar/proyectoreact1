import React, { useEffect, useState } from 'react'

export const Buscador = ({listadpState, setListadoState}) => {

  const [busqueda, setBusqueda]= useState('');
  const [noEncontrado, setNoEncontrado]= useState(false);
  const [listaCopia, setListaCopia]= useState([]);

  const textoBuscado = (e)=>{
    // Crear estado y actualizarlo
    setBusqueda(e.target.value)
  }

  useEffect(()=>{
    const buscarPeli= () =>{
      let pelisEncontradas;
    
      // Copiamos el arreglo
      setListaCopia(JSON.parse(localStorage.getItem('pelis')));

      // Sacar el listado completo de peliculas
      // Ya se obtiene directamente con el listadpState
  
      // Filtrar para buscar lo que escriba
      
      if(listaCopia!==null){
        pelisEncontradas= listaCopia.filter(peli=>{
          return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
        });
      }else{
        pelisEncontradas=[];
      }
      
  
      // Comprobar que escriba mas de 1 caracter o si se consigue algo
      // Dar valor de lo que tenga el localStorage
      console.log(pelisEncontradas);
      if(busqueda.length <= 1 || pelisEncontradas <= 0){
        pelisEncontradas= JSON.parse(localStorage.getItem('pelis'));
        setNoEncontrado(true);
      }else{
        setNoEncontrado(false);
      }
      console.log(busqueda);
      console.log("Tamaño del texto: "+ busqueda.length);
      console.log(" Error? "+noEncontrado);
      console.log(pelisEncontradas);
      // Actualizar el estado del listado principal con lo que se filtró
      setListadoState(pelisEncontradas);
      //pelisEncontradas= JSON.parse(localStorage.getItem('pelis'));
  
  
    }
    buscarPeli();
  },[busqueda,noEncontrado]);
  

  return (
    <div className="search">
        <h3 className="title">Buscador</h3>
        {(noEncontrado === true && busqueda.length > 1) && (
          <h4>No se ha encontrado ninguna coincidencia.</h4>
        )}
        <form>
            <input type="text" id="serach-field" placeholder='Buscar...' name="busqueda" autoComplete='off'
                onChange={textoBuscado}
              />
            <button>Buscar</button>
        </form>
    </div>
  )
}
