
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import './App.scss'
import {Routes, Route} from 'react-router-dom'
import Todos from './components/Todos';
import Edit from './components/Edit';




const App=()=>{

    return(
        <div className='App'>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='todos'>
                    <Route index element={<Todos/>}/>
                    <Route path=':id' element={<Edit/>} />

                </Route>
                

            </Routes>
        </div>
    )
}

export default App