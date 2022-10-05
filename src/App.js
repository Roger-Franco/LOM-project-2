import logo from './logo.svg';
import './App.css';
import { memo, useCallback, useEffect, useState } from 'react';
import Prop from 'prop-types';

const Button = memo(function Button({ incrementButton }) {
  console.log('Filho renderizou!');
  return <button onClick={() => incrementButton(100)}>+</button>;
});

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num); // Artifício usado pra não precisar de colocar counter como dependência
  }, []);

  console.log('Pai renderizou!');

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

Button.propTypes = {
  incrementButton: Prop.func,
};

export default App;
