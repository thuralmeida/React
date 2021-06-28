import React from 'react';

import Primeiro from './componentes/primeiro.jsx';
import Arrow from './componentes/arrowfunction.jsx';
import Parametro from './componentes/parametro.jsx';
import Filhos from './componentes/filhos.jsx';
import Card from './componentes/layout/card.jsx';
import Repeticao from './componentes/repeticao.jsx';
import Condicional from './componentes/condicional.jsx';
import CondicionalIf from './componentes/condicionalIf.jsx';
import Pai from './componentes/pai.jsx';
import Super from './componentes/super.jsx';
import Contador from './componentes/contador.jsx';

export default props => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="Exercício Primeiro" color="#FA6900">
                <Primeiro />
            </Card>

            <Card titulo="Exercício Parâmetros" color="#E94C6F">
                <Parametro titulo="esse é o tit" subtitulo="e esse é o sub"/>
            </Card>

            <Card titulo="Exercício Children" color="#008BBA">
                <Filhos>Este é um exemplo de Children</Filhos>
                <Filhos>
                    <ul>
                        <li>Filho 1</li>
                        <li>Filho 2</li>
                        <li>Filho 3</li>
                    </ul>
                </Filhos>
            </Card>

            <Card titulo="Exercício Arrow0" color="#D96459">
                <Arrow />
            </Card>

            <Card titulo="Exercício Repetição" color="#009688">
                <Repeticao />
            </Card>

            <Card titulo="Exercício Condicional" color="#051E3E">
                <Condicional numero={10} />
            </Card>

            <Card titulo="Exercício Condicional If" color="#F6CD61">
                <CondicionalIf numero={9} />
            </Card>

            <Card titulo="Exercício Comunicação Direta" color="#FA6900">
                <Pai sobrenome="Freitas" />
            </Card>

            <Card titulo="Exercício Comunicação Indireta" color="#E94C6F">
                <Super />
            </Card>

            <Card titulo="Exercício Contador" color="#008BBA">
                <Contador passo="10" valor="100"/>
            </Card>
        </div>

    </div>
);