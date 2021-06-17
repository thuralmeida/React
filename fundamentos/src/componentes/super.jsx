import React, { useState } from 'react';
import Sub from './sub.jsx';

export default (props) => {

    function quandoClicar(valorGerado, texto) {
        console.log('Ação!!!!')
        console.log(valorGerado)
        console.log(texto)
    }

    return (
        <div>
            <h4>Valor</h4>
            <Sub onClicar={quandoClicar}></Sub>
        </div>
    );
};