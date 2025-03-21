import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
    return (
        <div className={`Todo is-flex is-align-items-center box p-3 has-text-black
         ${task.completed ? "has-background-primary-dark" : "has-background-primary"}`}>
            <p className={`${task.completed && "completed"} todo-text`}
               onClick={() => {toggleComplete(task.id)}}>
                {task.task}
            </p>
            <div className="is-flex is-justify-content-flex-end ml-auto">
                <FontAwesomeIcon icon={faPenToSquare}
                                 className="icon has-text-primary mr-3 is-small button p-2"
                                 onClick={() => editTodo(task.id)}
                />
                <FontAwesomeIcon icon={faTrash}
                                 className="icon has-text-danger is-small button p-2"
                                 onClick={() => deleteTodo(task.id)}
                />
            </div>
        </div>
    )
}

export default Todo;