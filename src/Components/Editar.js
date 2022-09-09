import React from 'react'

export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {
    const titulo= "Editar Película";

    const guardarEdicion= (e, id)=>{
        e.preventDefault();

        // Conseguir valores del formulario
        let target= e.target;
        let titulo= target.titulo.value;
        let descripcion= target.descripcion.value;

        // Conseguir las peliculas actuales
        let peliculas= conseguirPeliculas();
        let indice= peliculas.findIndex(peli=> peli.id===id);

        // Crear nuevo objeto de pelicula
        let peliNueva={
            id,
            titulo,
            descripcion
        }

        // Actualizar el elemento en el índice
        peliculas[indice]=peliNueva;

        // Guardar en el localStorage
        localStorage.setItem('pelis', JSON.stringify(peliculas));


        // Actualizar estados
        setEditar(0);
        setListadoState(JSON.parse(localStorage.getItem('pelis')));
    }
  return (
    <div className='edit-form'>
        <hr/>
        <h3 className='title'>{titulo}</h3>
        <form onSubmit={e=> guardarEdicion(e, peli.id)}>
            <input type="text" name="titulo" className="titulo-editado" defaultValue={peli.titulo}/>
            <textarea className='descripcion-editada' name='descripcion' defaultValue={peli.descripcion}></textarea>
            <input type="submit" className='editar' value="Actualizar"/>
        </form>
    </div>
  )
}
