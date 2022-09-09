import React, { useState } from 'react'
import { GuardarEnLocalStorage } from '../Helpers/GuardarEnLocalStorage';

export const Crear = ({setListadoState}) => {

  const titulo="Añadir Película";
  const [peliState, setPelIState]= useState({});
  const conseguirDatosForm= e =>{
    e.preventDefault();

    // Conseguir datos del formulario
    let target= e.target;
    let titulo= target.titulo.value;
    let descripcion= target.descripcion.value;

    // Crear obj de la película a guardar
    let peli={
      //La fecha con esta funcion para obtener siempre algo distinto
      id: new Date().getTime(),
      // Aqui se pone solo el nombre porque como el nombre del obj sería el mismo que el nombre de la variable, funciona
      titulo,
      descripcion
    }

    // Guardando peli en el estado
    setPelIState(peli);
    
    // Se puede actualizar asi directamente ya que luego igual se guarda
    /*setListadoState(elementos=>{
      return [...elementos, peli]
    });*/

    //console.log(peliState);
    //alert("Títutlo: " + titulo+ " Descripción: " + descripcion);

    GuardarEnLocalStorage("pelis",peli);
    // Puede ser asi luego de de guardar
    setListadoState(JSON.parse(localStorage.getItem('pelis')));
    
  }

  return (
    <div className="add">
        <h3 className="title">{titulo}</h3>
        {/*<strong>{peliState.titulo && peliState.descripcion && "Has guardado la película:" + peliState.titulo}</strong>*/}
        <form onSubmit={conseguirDatosForm}>
            <input type="text" 
              placeholder="Título"
              id="titulo"
            />
            <textarea placeholder="Descripción"
              id='descripcion'
            ></textarea>
            <input type="submit" id="save" value="Guardar"/>
        </form>
    </div>
  )
}
