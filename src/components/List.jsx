import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './List.scss'
import { useContext } from 'react';
import { TodosContext } from '../TodosContext';
import { NavLink } from 'react-router-dom';


const List=()=>{

    const {tasks, setTasks}=useContext(TodosContext)

    const deleteHandler=(idOfTask)=>{
        const filterdTasks=tasks.filter(item=>item.id!==idOfTask.id)
        setTasks(filterdTasks)

    }


    const editHandler=(e)=>{


    }

    return(
        <ListGroup className='list'>
            {tasks.map(item=><ListGroup.Item key={item.id} className='listItem' variant="primary">
            <p>{item.text}</p>
                <div>
               <NavLink to={item.id}> <Button onClick={editHandler} variant="secondary">Edit</Button></NavLink>
             <Button onClick={()=>deleteHandler(item)} variant="danger">Delete</Button>
                </div>
             
             
             </ListGroup.Item>)} 
                
        </ListGroup>
    )
}

export default List