import React, { useEffect } from 'react';

export const AllCycles = () => {

    useEffect(() => {
        console.log('Componente cxreado');

        const intervalId = setInterval(() => {
            document.title = `${new Date()}`
            console.log('Actualización del componente');
        }, 1000);

        return () => {
            console.log('Componente va a desaparecer');
            document.title = "Tiempo detenido";
            clearInterval(intervalId);
        }
    }, []);

    return (
        <div>
            <h1>AllCycles</h1>
        </div>
    );
}
