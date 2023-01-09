
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import './App.scss'
import {Routes, Route} from 'react-router-dom'
import Todos from './components/Todos';
import Edit from './components/Edit';




const App=()=>{

    return(
        <div className='App'>
{/* <Home/> */}
            <Routes>
                <Route path='/'>
                    <Route index element={<Home/>}/>
                <Route path='todos'>
                    <Route index element={<Todos/>}/>
                    <Route path=':id' element={<Edit/>} />

                </Route>
                </Route>                
                <Route path='*' element={<Home/>}/>
            </Routes>
        </div>
    )
}

export default App