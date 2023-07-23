import { useState } from "react"
import './TODOList.scss'

const TODOList = () => {
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

    const handleChangeInput = (event) => {
        setNewTodo(event.target.value)
    }
    const handleDeleteTodo = (todo) => {
        let newtodos = todos.filter(item => item.id !== todo.id)
        setTodos(newtodos)
    }
    const handleAddTodo = () => {
        if (!newTodo) {
            alert('Empty input!')
            return
        }
        let newTd = { id: Math.floor(Math.random() * 101), title: newTodo }
        setTodos([...todos, newTd])
        setNewTodo('')
    }

    return (
        <div>
            <p className="todos-title">TODO App</p>
            <div className='todos-container'>
                {todos.map((todo, index) => {
                    return (
                        <div key={todo.id}>
                            <div className='todos-child' >
                                {index + 1} - {todo.title} &nbsp;
                                <span onClick={() => handleDeleteTodo(todo)}>(x)</span>
                            </div>
                        </div>
                    )
                })}
                <input type='text' value={newTodo} onChange={(event) => handleChangeInput(event)}></input>
                <button type='button' onClick={() => handleAddTodo()}>Add</button>
            </div>
        </div>
    )
}
export default TODOList