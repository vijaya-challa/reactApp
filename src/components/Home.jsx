import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';


const Home=()=>{

    return(
        <div>

            <h1>Welcome to CRUD App</h1>
            <p>the tasks</p>
            <p>well done</p>
            <NavLink to='todos'>
            <Button variant="dark">Go to task</Button></NavLink>
            
        </div>
    )
}

export default Home