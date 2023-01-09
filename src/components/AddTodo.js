import React, { useRef, useState, useEffect } from 'react'
import { findAllInRenderedTree } from 'react-dom/test-utils';
import ListTodo from './ListTodo';


const AddTodo = (props) => {
    const inputTask = useRef("")
    const onAddTask = ()=>{

        let input_value = inputTask.current.value;
        inputTask.current.value="";  
        props.addTaskToList(input_value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <header>
            <h1 className="text-center">Julius Todo-Lista</h1>
            <div className="d-flex justify-content-center">
                <form onSubmit={handleSubmit}>
                <input type="text" 
                        placeholder="Add todo:" 
                        className="form-control w-50" 
                        ref={inputTask}
                        />
                <button
                    className="btn btn-success text-uppercase m-1"
                    onClick={()=> onAddTask()}> <i className="fa fa-plus-square" aria-hidden="true" />
                </button>

                </form>

            </div>
        </header>
    )
}

export default AddTodo