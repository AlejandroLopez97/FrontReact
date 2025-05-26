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

    // useEffect(()=>{
    //     console.log('Cambio del componente');
    //     console.log('Mostrando referencias a elemento del DOM:');
    //     console.log(miRef);
    // });

    // ? Caso2 : Ejecutar solo cuando cambie contador 1 o contador 2
    // Cada vez que haya un cambio en cont1, se ejecuta lo que diga useEffect()
    // en caso de que cambie cont2, no habrá ejecución

    useEffect(() => {
        console.log('CAMBIO EL ESTADO DEL CONTADOR 1');
        console.log('Mostrando referencias a elemento del DOM:');
        console.log(miRef);
    },[cont1, cont2]);

    return (
        <div>
            <h1>****Ejemplo de useState(), useRef() y useEffect() *****</h1>
            <h2>Contador 1: { cont1 }</h2>
            <h2>Contador 2: { cont2 }</h2>
            {/* Elemento referenciado */}
            <h4 ref = { miRef }>
                Ejemplo de elemento referenciado
            </h4>

            {/* botones para cambiar los contadores */}
            <div>
                <button onClick={incrementar1}>Incrementar 1</button>
                <button onClick={incrementar2}>Incrementar 2</button>
            </div>
        </div>
    )
}

export default Example
