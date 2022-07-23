import './App.css';
import Button from './Button';

function sum(a, b) {
  alert(a + b)
}

function primeiroJSX() {
  return (
    <div>
      Nathan Renovato - Introdução ao ReactJS
    </div>
  )
}

function App() {
  return (
    <div className="App">
      {primeiroJSX()}
      <Button onClick={() => sum(10, 20)} name="Tiago" />
    </div>
  );
}

export default App;
