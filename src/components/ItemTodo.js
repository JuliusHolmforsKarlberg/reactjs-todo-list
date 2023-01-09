import React from 'react'

const ItemTodo = ({ title,id ,onDeleteTask}) => {

    return (
        <li className="list-group-item m-2 border">
            <span>{title}</span>
            {/* when i will click on the btn delete task */}
            <button className="btn btn-danger float-end"
            onClick={()=>onDeleteTask(id)}>
                <i className="fa fa-trash" aria-hidden="true" ></i>
            </button>
        </li>
    )
}

export default ItemTodo