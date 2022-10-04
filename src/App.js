import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const eventFn = () => {
  console.log('h1 clicado');
};

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // componentDidUpdate - executa toda vez que o componente atualiza;
  useEffect(() => {
    console.log('componentDidUpdate');
  });

  // componentDidMount - executa uma vez;
  useEffect(() => {
    console.log('componentDidMount');
  }, []);

  // componentDidMount - executa toda vez que dependência mudar;
  useEffect(() => {
    console.log('Contador mudou para', counter2);
  }, [counter2]);

  // componentWillUmount - Faz uma limpeza para que não haja repetições
  // indesejadas
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment + 1</button>
      <button onClick={() => setCounter2(counter2 + 2)}>Increment + 2 </button>
    </div>
  );
}

export default App;
