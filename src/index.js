import ReactDOM  from "react-dom/client";
import { BrowserRouter} from 'react-router-dom';

import App from './App'
import TodosContextProvider from "./TodosContext";

const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(
<BrowserRouter>
<TodosContextProvider>
    <h1>ugtbunctibu</h1>
<App/>
</TodosContextProvider>

</BrowserRouter>)