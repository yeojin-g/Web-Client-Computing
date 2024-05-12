import { Link } from "react-router-dom";
import Headers from "../comp/Header"
import LogoutB  from "../comp/LogoutB"
import BasicTodo from "../todos/BasicTodo";
import CalendarTodo from "../todos/Calendar";
import HabbitTracker from "../todos/HabbitTracker";
import { AccountCircle } from "@material-ui/icons";


function MainPage3(){
    return(
        <div className="Main3">
            <Headers/>
            <Link to='../info'className="Main3Icon1">
                <AccountCircle className="Main3Icon2"/>  
            </Link>
            <LogoutB/>

            <div className="todoBoard">
                <CalendarTodo/>
                <BasicTodo/>
                <HabbitTracker/>
            </div>

            <footer/>
        </div>
    );   
}

export default MainPage3;