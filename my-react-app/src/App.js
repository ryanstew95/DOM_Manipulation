import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [result, setResult] = useState('');
  const handleFormSubmit = (url) => {
setResult(url);
  };
  return (
    <div className="App">
     <h1>My React App</h1>
      <Form onSubmit={handleFormSubmit} />
      {result && <Display result={result} />}
    </div>
  );
}

export default App;
