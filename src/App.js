import logo from './logo.svg';
import './App.css';
import Navigation from './views/Navigation/Navigation';
import TODOList from './views/TODO/TODOList';
import { useState } from 'react';

function App() {
  //Destructuring
  //useState là hàm có giá trị trả về là 1 array
  //gán name/setName là phần tử đầu tiên/t2 của mảng.
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([
    { id: 1, title: 'Code' },
    { id: 2, title: 'Eat' },
    { id: 3, title: 'Sleep' }
  ])

  const handleClickButton = () => {
    if (!newTodo) {
      alert('Empty input!')
      return
    }
    let newTd = { id: Math.floor(Math.random() * 101), title: newTodo }
    setTodos([...todos, newTd])
    setNewTodo('')
  }
  const handleChangeInput = (event) => {
    setNewTodo(event.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navigation></Navigation>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my ReactJS project
        </p>
        <TODOList todos={todos} />
        <input type='text' value={newTodo} onChange={(event) => handleChangeInput(event)}></input>
        <button type='button' onClick={() => handleClickButton()}>OK</button>
      </header>
    </div>
  );
}

export default App;
