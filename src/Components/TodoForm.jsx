import React, {useState} from 'react';
import "bulma/css/bulma.min.css"

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = event => {
        event.preventDefault()
        if(value) {
            addTodo(value)
            setValue("")
        }

    }

    return (
        <form className="TodoFrom field is-grouped" onSubmit={handleSubmit}>
            <div className="control">
                <input className="input todo-input"
                       type="text"
                       value={value}
                       placeholder="Enter a task..."
                       onChange={(event) => {
                           setValue(event.target.value)
                       }
                }/>
            </div>
            <div className="control">
                <button type="submit" className="button is-primary todo-btn">
                    Add Task
                </button>
            </div>
        </form>
    )
}

export default TodoForm;