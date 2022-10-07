/* eslint-disable react/prop-types */
import logo from './logo.svg';
import prop from 'prop-types';
import './App.css';
import { createContext, useContext, useState } from 'react';

const globalState = {
  title: 'O título do contexto',
  body: 'O body do contexto',
  counter: 0,
};

const globalState2 = {
  title: 'O título do contexto2',
  body: 'O body do contexto2',
  counter: 2,
};

const GlobalContext = createContext();

const Div = ({ children }) => {
  return (
    <div className="App">
      <H1 />
      <P />
    </div>
  );
};

const H1 = () => {
  // const theContext = useContext(GlobalContext);
  // return <h1>{theContext.globalState.title}</h1>;
  const theContext = useContext(GlobalContext);
  const {
    contextState: { title, counter },
  } = theContext;
  return (
    <h1>
      {title} {counter}
    </h1>
  );
};

const P = () => {
  // const theContext = useContext(GlobalContext);
  // return <p>{theContext.globalState2.body}</p>;
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body, counter },
    contextState,
    setContextState,
  } = theContext;
  return (
    <p
      // onClick={() => setContextState({ ...contextState, counter: counter + 1 })}
      onClick={() => setContextState((s) => ({ ...s, counter: s.counter + 1 }))}
    >
      {body}
    </p>
  );
};

function App() {
  const [contextState, setContextState] = useState(globalState);
  return (
    // <GlobalContext.Provider value={{ globalState, globalState2 }}>
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>
  );
}

export default App;
