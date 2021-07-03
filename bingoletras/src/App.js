import React,  { useState } from "react";

export default (props) => {

    const [numeros, setNumeros] = useState(Array(26).fill(0))

    function gerarNumerosNaoContido(array) {
        const novoNumero = parseInt(Math.random() * (27 - 1)) + 1
        return (
          <>
            if (array.includes(novoNumero) !== gerarNumerosNaoContido(array)) {
              switch (novoNumero) {
                case '1':
                  console.log("1")
                  break;
                case '2':
                  console.log('2')
                  break;
                default:
                  console.log('Acabou')  
              }
            } else {
              novoNumero
            } 
          )
          </>
    }

    function gerarNumeros() {
        const novoArray = Array(26)
        .fill(0)
        .reduce((a) => [...a, gerarNumerosNaoContido(a)], [])
        setNumeros(novoArray)
    }

    return (
        <>
            <h3>Mega</h3>
            <h4>{numeros.join(' - ')}</h4>
            <h4>
              <label className="A">A - </label>
              <label className="B">B - </label>
              <label className="C">C - </label>
              <label className="D">D - </label>
              <label className="E">E - </label>
              <label className="F">F - </label>
              <label className="G">G - </label>
              <label className="H">H - </label>
              <label className="I">I - </label>
              <label className="J">J - </label>
              <label className="K">K - </label>
              <label className="L">L - </label>
              <label className="M">M - </label>
              <label className="N">N - </label>
              <label className="O">O - </label>
              <label className="P">P - </label>
              <label className="Q">Q - </label>
              <label className="R">R - </label>
              <label className="S">S - </label>
              <label className="T">T - </label>
              <label className="U">U - </label>
              <label className="V">V - </label>
              <label className="W">W - </label>
              <label className="X">X - </label>
              <label className="Y">Y - </label>
              <label className="Z">Z</label>
            </h4>
            <button onClick={gerarNumeros}>Sortear Letra</button>
        </>
    );
}