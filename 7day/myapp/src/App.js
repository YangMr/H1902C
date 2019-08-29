import React from 'react';
//导出刚才创建的index.jsx
import Index from "./component/Index.jsx"
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Index />
      </header>
    </div>
  );
}

export default App;
