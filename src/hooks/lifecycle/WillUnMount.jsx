/**
 * Controlar cuando el componente va a desaparecer, ejemplo de uso del método componentWillUnMount
 * desde su uso de tipo clase y tipo hook
 */

import React, { Component, useEffect } from 'react'

export class WillUnMount extends Component {

    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezca');
    }

  render() {
    return (
        <div>
            <h1>ComponentWillUnMount</h1>
        </div>
    )
    }
}

export const WillUnMountHook = () => {

    useEffect(()=>{
        return () =>{
            console.log('Comportamiento antes de que el componente desaparezca');
        }
    }, []);//se deja el array vacio para que se ejecute una sola vez

    return (
        <div>
            <h1>WillUnMountHook</h1>
        </div>
    );
}


