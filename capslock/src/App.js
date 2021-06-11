import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';

function CapsLock(props) {
  const textoInseridoCh = props.children;
  const textoCapsLockCh = textoInseridoCh.toUpperCase();

  const textoInserido = props.texto;
  const textoCapsLock = textoInserido.toUpperCase();

    return <div>{textoCapsLock} {textoCapsLockCh}</div>
}

function App() {
    return <CapsLock texto="Teste Normal">Apenas mais um TESTEzinho Children</CapsLock>
}

export default App;