import React from 'react';
import './App.css'
import Add from './component/Add';
import Lists from './component/Lists';

function App() { 
 
  return (
    <div className="app">  
      <div className='wraper'>
        <h1>to do list</h1>
        <Add  />
        <Lists />
      </div>
    </div>
  );
}
export default App;
