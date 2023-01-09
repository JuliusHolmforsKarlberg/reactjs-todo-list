import { useRef, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import ItemTodo from "./components/ItemTodo";
import ListTodo from "./components/ListTodo";

const App = () => {

  const [listTask, setListTask] = useState([])
  // backup for our listTask data
  const [listTaskBackup, setListTaskBackup] = useState([])

  const filterTaskInput = useRef("")

  const clearList = () => {
    setListTask([]);
  };

  const addNewTask = (newTask) => {
    // alert(newTask)
    if(newTask!=""){

      setListTask([...listTask,newTask])
      //add the new value to our backup aswell
      setListTaskBackup([...listTaskBackup,newTask])
    }

    else alert("Den här ska inte vara tom!")
  }

  //delete task by id
  const deteleTaskById = (idTask)=>{

    if(window.confirm("Är du helt säker?")===false) return ;

    let newListTask = [...listTask];
    newListTask = newListTask.filter((_,index)=>index!=idTask)
    setListTask([...newListTask])
    //delete the value from our backup as well
    setListTaskBackup([...newListTask])

  }

  //filter tasks by title
  const filterTaskByTitle = ()=>{
    let query = filterTaskInput.current.value;
    //test if the query is empty get the backup
    if(query==="") setListTask([...listTaskBackup])
    else {
          let newListTask = [...listTask]
    newListTask = newListTask.filter((titleTask)=>titleTask.includes(query))
    setListTask([...newListTask])
    }

  }
  return (
    <>
      <div>
        {/* addTodo Component */}
        <AddTodo addTaskToList = { addNewTask } />
        <hr color="gray" />

        {/* filter task input */}
        <div className="filter border w-50 mx-auto">
          <input type="text"
                placeholder="Filtrera på:" 
                className="form-control" 
                onKeyUp={filterTaskByTitle}
                ref={filterTaskInput} />

          <i className="fa fa-search" aria-hidden="true" />
        </div>
        {/* List Todo Component */}
        <ListTodo 
          list={listTask}
          onDeleteTask={deteleTaskById}
         />
         <div>
          <button className='btn btn-danger btn-md' onClick={clearList}>
            NOLLSTÄLL LISTAN
          </button>
         </div>
      </div>
    </>
  );
};

export default App