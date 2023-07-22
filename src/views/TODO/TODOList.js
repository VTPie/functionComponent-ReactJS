const TODOList = (props) => {
    const { todos, deleteTodo } = props

    const handleDeleteTodo = (todo) => {
        deleteTodo(todo)
    }

    return (
        <ul className='todos-container'>
            {todos.map(todo => {
                return (
                    <div key={todo.id}>
                        <li className='todos-child' >
                            {todo.title} &nbsp;
                            <span onClick={() => handleDeleteTodo(todo)}>x</span>
                        </li>
                    </div>
                )
            })}
        </ul>
    )
}
export default TODOList 