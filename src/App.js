import logo from './logo.svg';
import './App.css';
import Navigation from './views/Navigation/Navigation';
import { useState } from 'react';

function App() {
  //Destructuring
  //useState là hàm có giá trị trả về là 1 array
  //gán name/setName là phần tử đầu tiên/t2 của mảng.
  let [name, setName] = useState('...')
  const [address, setAddress] = useState('')

  const handleClickButton = () => {
    setName(address)
  }
  const handleChangeInput = (event) => {
    setAddress(event.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navigation></Navigation>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my ReactJS project
        </p>
        <p>
          My name is Phong and your name is {name}
        </p>
        <input type='text' value={address} onChange={(event) => handleChangeInput(event)}></input>
        <button type='button' onClick={() => handleClickButton()}>OK</button>
      </header>
    </div>
  );
}

export default App;
