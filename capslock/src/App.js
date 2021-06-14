function CapsLock(props) {
  //Exemplo dentro da tag
  const textoInserido = props.texto;
  const textoCapsLock = textoInserido.toUpperCase();
  return <div>{textoCapsLock}</div>
}

function CapsLockCh(props) {
  //Exemplo usando Children
  const textoInseridoCh = props.children;
  const textoCapsLockCh = textoInseridoCh.toUpperCase();
  return <div>{textoCapsLockCh}</div>
}

function Alerta(props) {
  const textoInserido = document.getElementById('mensagem');
  return alert(textoInserido.value.toUpperCase());
}

function App() {
    return (
      <div>
        <input id="mensagem" type="text" />
        <button onClick={Alerta}>Clique Aqui</button>
        <CapsLock texto="Teste Normal" />
        <CapsLockCh>Apenas mais um TESTEzinho Children</CapsLockCh>
      </div>
    )
}

export default App;