import React from 'react';
import Produtos from '../data/produtos.js';

export default props => {

    function getProdutosListItems() {
        return Produtos.map(prod => {
            return <li key={prod.id}>
                {prod.id} - {prod.nome} - R$ {prod.preco}
                </li>
        })
    }

    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutosListItems()}
            </ul>
        </div>
    )
}