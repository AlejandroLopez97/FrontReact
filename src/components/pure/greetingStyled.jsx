import React, { useState } from 'react';
/**
 * @returns Definiendo estilos en constantes
 */

//Usuario logueado
const loggedStyle = {
    color: 'blue'
}

//Usuario no logueado
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

    //generamos un estado para el componente para controlar si el uusario esta logueado
    const [logged, setLogged] = useState(false);

    const greatingUser = () => ( <p> Hi, { props.name } </p> );
    const pleaseLogin = () => ( <p> Please login </p> );

    return (
        <div style={ logged ? loggedStyle : unloggedStyle}>
            {logged ? greatingUser : pleaseLogin }
            <button onClick={() => {
                console.log('botón pulsado');
                setLogged(!logged)
            }}>
                { logged ? 'Logout' : 'Login' }
            </button>
        </div>
    );
}

export default GreetingStyled;
