/**
 * Ejemplo para entender el uso de los props.children
 */

import React from 'react';

const Example3 = (props) => {
    return (
        <div>
            <h1>**** Ejemplo de children props ****</h1>
            <h2>
                Nombre: { props.nombre }
            </h2>
            {/* props.children pintará por defecto aquello que se encuenter entre las etiquetas de apertura y cierre  */}
            {/* de este componente desde el componente de orden superior */}
            { props.children }
        </div>
    );
}

export default Example3;
