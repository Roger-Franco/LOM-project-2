import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  /* ==== Minha solução === */
  // const [reverseClass, setReverseClass] = useState('App-logo');
  // const handleClick = () => {
  //   if (reverseClass === 'App-logo') {
  //     setReverseClass('reverse');
  //   } else {
  //     setReverseClass('App-logo');
  //   }
  // };
  /* ========== */

  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse(!reverse);
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <h1>{counter}</h1>
        <button onClick={handleClick}>Reverse {reverseClass}</button>
      </header>
    </div>
  );
}

export default App;
/*  Com classe */

// import logo from './logo.svg';
// import './App.css';
// import { Component } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     // this.handleClick = this.handleClick.bind(this);

//     this.state = {
//       reverse: false,
//     };
//   }

//   handleClick = () => {
//     this.setState({ reverse: !this.state.reverse });
//   };

//   render() {
//     const { reverse } = this.state;
//     const reverseClass = reverse ? 'reverse' : '';
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

//           <button type="button" onClick={this.handleClick}>
//             Reverse {reverseClass}
//           </button>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
