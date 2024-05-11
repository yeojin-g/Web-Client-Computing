// 로그인 전 메인 페이지 - default
import Headers from "../comp/Header";
import '../pages_css/MainPage1.css';
import { Link } from "react-router-dom";
import cal from "../img/calend.png";
import studyp from "../img/Studyplanner.png";
import bTodo from "../img/basicTodo.png";
import timeT from "../img/timeT.png";

function MainPage1(){
    const handleClick = () => {
        alert('로그인 후 이용해주세요!');
      };
    
    return(
        <div className="mainpage1">
            <Headers/>
            <Link to={'../Login' } className='Login'>Login</Link>
            <Link to={'../signUp'} className='SignIn'>Sign In</Link>

            <div className="mainpageB1">
                <div className="img1">
                    <img className="timeTImg" src = {timeT} onClick={handleClick}/>
                    <img className="calImg" src = {cal} onClick={handleClick} />
                </div>
                <img className="bTodoImg" src = {bTodo} onClick={handleClick}/>
                <img className="studypImg" src = {studyp} onClick={handleClick}/>
            </div>
            
            <footer className="mainFooter"/>
        </div>
    );
}

export default MainPage1;