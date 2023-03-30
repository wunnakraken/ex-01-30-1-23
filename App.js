import { Route, Routes } from "react-router-dom";
import CalenderPage from "./pages/Calender";
import HomePage from "./pages/Homepage";
import TodayPage from "./ pages/Todaypage";
import TodoPage from "./pages/TodoPage";

function App(){
    return(
        <Routes>
            <Route exect path="/" element={<HomePage />}/>
            < Route path="/ todo" element = {<TodoPage/>}/>
            <Route path="/ today" element={<TodayPage/>}/>
            <Route path="/calender" element= {<CalenderPage />}/>
            
        </Routes>
    );
}
export default App;