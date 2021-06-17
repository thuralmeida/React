import './card.css';
import React, { Children } from 'react';

export default props =>
    <div className="card" style={{ borderColor: props.color }}>
        <div className="conteudo">  
            {props.children}
        </div>
        <div className="footer" style={{ backgroundColor: props.color }}>
            {props.titulo}
        </div>
    </div>