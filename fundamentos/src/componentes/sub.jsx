import React from 'react';

export default (props) => {

    function acao() {
        props.onClicar(Math.random(), 'Gerado');
    }

    return (
        <div>
            <p><button onClick={acao}>Alterar</button></p>
        </div>
    );
};