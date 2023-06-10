import "./TodoFooter.css"

function TodoFooter({ todos, onClearCompleted }) {

    const completedItems = todos.reduce((arg, count) => count.isCompleted ? ++arg : arg, 0)
    return (
        <div className="todoAppFooter">
            <span>{completedItems}/{todos.length} Completed</span>
            <button className="todoClearCompleted" onClick={onClearCompleted}>Clear Completed</button>
        </div>
    )
}

export default TodoFooter;