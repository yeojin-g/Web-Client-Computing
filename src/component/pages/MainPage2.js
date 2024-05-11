// 회원가입 후, 첫 페이지
import Headers from "../comp/Header";
import LogoutB  from "../comp/LogoutB";
import noneImg from "../img/none.png";
import '../pages_css/MainPage2.css';
import { Link } from "react-router-dom";

function MainPage2(){
    return(
        <div className="mainPage2">
            <Headers/>
            <LogoutB/>
            <Link to={'../selectPage'} style={{ textDecoration: "none"}}>
                <p className="choiceTodoS">유형을 선택해 Todo List를 만들어 보세요!</p>
            </Link>
            <p>위 문구를 클릭하면 유형 선택 화면으로 넘어갑니다.</p>
            <img className='noneImg' src={noneImg}/>
            <footer/>
        </div>
    );   
}

export default MainPage2;