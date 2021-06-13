function CapsLock(props) {
  //Exemplo usando Children
  const textoInseridoCh = props.children;
  const textoCapsLockCh = textoInseridoCh.toUpperCase();

  //Exemplo dentro da tag
  const textoInserido = props.texto;
  const textoCapsLock = textoInserido.toUpperCase();

    return <div>{textoCapsLock} {textoCapsLockCh}</div>
}

function App() {
    return (
      <CapsLock texto="Teste Normal">Apenas mais um TESTEzinho Children</CapsLock>
    )
}

export default App;