import logo from './logo.svg';
import './App.css';
import Admin from './components/Admin';
import User from './components/User';
import { useState } from 'react';

function App() {

  const [isHide,setHide]=  useState(true);
  
const hideAdmin =() => {
  setHide(false)
}

  return (
    <div className="App">
       <button onClick={hideAdmin}> Hide Amdin </button>
      <table style={{width:'100%'}}>
        <tbody>
        <tr>
          <td>
            {
              isHide &&  <Admin></Admin>
            }
           
          </td>
          <td>
            <User></User>
          </td>
        </tr>
        </tbody> 
      </table>
    </div>
  );
}

export default App;
