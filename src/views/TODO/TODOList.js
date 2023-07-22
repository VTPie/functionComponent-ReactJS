const TODOList = (props) => {
    const todos = props.todos
    return (
        <ul className='todos-container'>
            {todos.map(todo => {
                return (
                    <li className='todos-child' key={todo.id}>{todo.title}</li>
                )
            })}
        </ul>
    )
}
export default TODOList 