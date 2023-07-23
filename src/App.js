import logo from './logo.svg';
import './App.css';
import Navigation from './views/Navigation/Navigation';
import TODOList from './views/TODO/TODOList';
import Population from './views/Population/Population';
import { useState, useEffect } from 'react';

function App() {
  //Destructuring
  //useState là hàm có giá trị trả về là 1 array
  //gán todos/setTodos là phần tử đầu tiên/t2 của mảng.
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([
    { id: 1, title: 'Code' },
    { id: 2, title: 'Eat' },
    { id: 3, title: 'Sleep' }
  ])

  //didMount + didUpdate + willUnmount
  // useEffect(() => {
  //   console.log('>>> run useEffect')
  // })

  //didMount: Chạy 1l duy nhất khi component render lần đầu
  // useEffect(() => {
  //   console.log('>>> run useEffect as componentDidMount')
  // }, [])

  //didUpdate: Chạy mỗi khi newTodo thay đổi.
  // useEffect(() => {
  //   console.log('>>> run useEffect as componentDidUpdate')
  // }, [newTodo])

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
  const deleteTodo = (todo) => {
    let newtodos = todos.filter(item => item.id !== todo.id)
    setTodos(newtodos)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navigation></Navigation>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my ReactJS project
        </p>
        {/* <TODOList todos={todos} deleteTodo={deleteTodo} />
        <input type='text' value={newTodo} onChange={(event) => handleChangeInput(event)}></input>
        <button type='button' onClick={() => handleClickButton()}>OK</button> */}
        <Population />
      </header>
    </div>
  );
}

export default App;
