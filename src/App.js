import React, { useState } from 'react';
import './App.css';
import InputWindow from './InputWindow'
import OutputWindow from './OutputWindow'

function App() {
  const [inputString, setInputString] = useState('[[:22 :2][:8 :2][:10 :5 :1][:10 :2 :1]]')
  return (
    <div className="App">
      <InputWindow inputString={inputString} onInputStringChange={(e) => { setInputString(e) }} />
      <OutputWindow outputString={inputString} />
    </div>
  );
}

export default App;
