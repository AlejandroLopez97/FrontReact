/**
 * Ejemplo de componente ide tipo clase que dispone de los métodos de ciclo de vida
 */

import React, { Component } from 'react';
import ProTypes from 'prop-types';

class LifeCycleExample extends Component {

    constructor(props){
        super(props)
        console.log('CONSTRUCTOR: Cuando se instancia el componente ');
    }

    componentWillMount(){
        console.log('WILLMOUNT: Antes del montaje del componente ');
    }

    componentDidMount(){
        console.log('DIDMOUNT: Justo al momento del montaje del componente, antes de renderizarlo ');
    }

    componentWillReceiveProps(nextProps){
        console.log('WillReceiveProps: Si va recibir nuevas props ');
    }

    shouldComponentUpdate(nextProps, nextState){
        // return true / false controlar si el componente debe actualizarse
    }

    componentWillUpdate(prevProps, prevState){
        console.log('WillUpdate]: Justo antes de actualizarse');
    }

    componentDidUpdate(nextProps, nextState){
        console.log('DidUpdate: Justo despúes de actualizarse');
    }

        componentWillUnmount(){
        console.log('WillUnmount: Justo antes de desaparecer');
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default LifeCycleExample;
