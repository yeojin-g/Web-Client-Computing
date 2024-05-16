import { Link } from "react-router-dom";
import Headers from "../comp/Header"
import LogoutB  from "../comp/LogoutB"
import BasicTodo from "../todos/BasicTodo";
import CalendarTodo from "../todos/Calendar";
import Schedule from "../todos/Schedule";
import HabbitTracker from "../todos/HabbitTracker";
import { AccountCircle } from "@material-ui/icons";

function MainPage3({ currentUser }) {

    return (
        <div className="Main3">
            <Headers isLogin={true} />
            <Link to='../info' className="Main3Icon1">
                <AccountCircle className="Main3Icon2" />
            </Link>
            <LogoutB />
            <div className="firstLine">
                <Schedule />
                <CalendarTodo />
            </div>
            <BasicTodo currentUser={currentUser}/>
            <HabbitTracker currentUser={currentUser}/>
            <footer className="main3Footer" />
        </div>
    );
}

export default MainPage3;
