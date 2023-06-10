import TodoItem from "./TodoItem";

function TodoList({ todos, onChange, onDelete }) {
    return (
        <div className="list">
            {
                todos.map(todo => <TodoItem
                    key={todo.id}
                    todo={todo}
                    onChange={onChange}
                    onDelete={onDelete}
                />)
            }
        </div>
    )
}

export default TodoList;

//<div key={todo.id}>{todo.text}</div>