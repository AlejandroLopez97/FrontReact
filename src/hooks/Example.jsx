//Ejemplo de uso de:
//useState() manejo del estado, useRef() control de referencias en la vista, useEffect() control de cambios en la vista, del ciclo de vida


import React, { useState, useRef, useEffect} from 'react'

function Example() {
    //Contadores distintos, cada uno en un estado diferente
    const [cont1, setCont1] = useState(0);
    const [cont2, setCont2] = useState(0);

    //Creación de referencia con useRef para asociar una variable, con un elemento del DOM del componente
    const miRef = useRef();

    function incrementar1(){
        setCont1(cont1 +1);
    }

    function incrementar2(){
        setCont2(cont2 + 1);
    }

    //trabajando con useEffect
    /**
     * ? caso1: Ejecutar simepre un snippet de codigo
     * Cada vez que haya un cambio en el estado del componente se ejecuta aquello que este dentro del useEffect()
     */

    useEffect(()=>{
        console.log('Cambio del componente');
        console.log('Mostrando referencias a elemento del DOM:');
        console.log(miRef);
    });

    return (
        <div>
            
        </div>
    )
}

export default Example
