/* eslint-disable react/prop-types */

export default function TodoInput(props){
    const {handleAddTodos, todoValue, setTodoValue} = props

    return (
        <header>
            <input value={todoValue} onChange={(event) => setTodoValue(event.target.value)} placeholder="What needs to be done?" />
            <button 
                onClick={() => {
                    handleAddTodos(todoValue);
                    setTodoValue('');
                }}
            >Add</button>
        </header>
    )
}