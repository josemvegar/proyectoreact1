export const  GuardarEnLocalStorage= (key ,elemento) =>{

    // Conseguir los elementos que están en el Local Storage
    let items= JSON.parse(localStorage.getItem(key))

    // Comprobar si es un array
    if(Array.isArray(items)){
      // Guardar dentro del array un elemento nuevo
      items.push(elemento);
    }else{
      // Si no, crear un array con el elemento nuevo
      items=[elemento]
    }
    //console.log(items);
    //Guardar en el local Storage
    localStorage.setItem(key, JSON.stringify(items));

    // Devolver objeto (NO ES NECESARIO)
    return elemento;

    // ---------------------------------------------------------------------------------------------------------
    // Guardar en el almacenamiento local
    // SE USA EL JASON.stringifi() para convertir el obj en un string leible por el almacenamiento local
    //localStorage.setItem('pelis', JSON.stringify([peli]));
  }