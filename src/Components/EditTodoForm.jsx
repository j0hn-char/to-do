import React, {useState} from 'react';
import "bulma/css/bulma.min.css"

const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = event => {
        event.preventDefault()
        if(value) {
            editTodo(value, task.id)
            setValue("")
        }

    }

    return (
        <form className="TodoFrom field is-grouped" onSubmit={handleSubmit}>
            <div className="control">
                <input className="input todo-input"
                       type="text"
                       value={value}
                       placeholder="Oops..."
                       onChange={(event) => {
                           setValue(event.target.value)
                       }
                       }/>
            </div>
            <div className="control">
                <button type="submit" className="button is-primary todo-btn">
                    Update Task
                </button>
            </div>
        </form>
    )
}

export default EditTodoForm;