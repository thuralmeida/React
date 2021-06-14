import React from 'react';

import Primeiro from './componentes/primeiro.jsx';
import Arrow from './componentes/arrowfunction.jsx';
import Parametro from './componentes/parametro.jsx';
import Filhos from './componentes/filhos.jsx';
import Card from './componentes/layout/card.jsx';
import Repeticao from './componentes/repeticao.jsx';
import Condicional from './componentes/condicional.jsx';
import CondicionalIf from './componentes/condicionalIf.jsx';

export default props => (
    <div className="App">
        
        <Card titulo="Exercício Primeiro">
            <Primeiro />
        </Card>

        <Card titulo="Exercício Parâmetros">
            <Parametro titulo="esse é o tit" subtitulo="e esse é o sub"/>
        </Card>

        <Card titulo="Exercício Children">
            <Filhos>Este é um exemplo de Children</Filhos>
            <Filhos>
                <ul>
                    <li>Filho 1</li>
                    <li>Filho 2</li>
                    <li>Filho 3</li>
                </ul>
            </Filhos>
        </Card>

        <Card titulo="Exercício Arrow">
            <Arrow />
        </Card>

        <Card titulo="Exercício Repetição">
            <Repeticao />
        </Card>

        <Card titulo="Exercício Condicional">
            <Condicional numero={10} />
        </Card>

        <Card titulo="Exercício Condicional If">
            <CondicionalIf numero={9} />
        </Card>

    </div>
);