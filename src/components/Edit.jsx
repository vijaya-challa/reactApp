import React, { useRef } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useContext } from 'react'
import { TodosContext } from '../TodosContext'
import { useNavigate } from 'react-router-dom'

const Edit = () => {
    const {tasks, setTasks}=useContext(TodosContext)

const {id}=useParams()
console.log(id)

const inputValue=useRef()

const navigate=useNavigate()





const findTheEditingTask=tasks.find(item=>item.id===id)



const confirmHandler=()=>{


if(!inputValue.current.value){
    return
}

    const editedTasks=tasks.map(item=>item.id===id? {...item, text:inputValue.current.value}:item)
setTasks(editedTasks)
navigate('/todos')
}

  return (
    <div>
        <input type="text" ref={inputValue} defaultValue={findTheEditingTask.text}/>
        <div>

            <button onClick={confirmHandler}>conform</button>
          <NavLink to='/todos'>  <button>cancel</button></NavLink>
        </div>
    </div>
  )
}

export default Edit