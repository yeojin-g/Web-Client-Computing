import { useState } from "react";
import { AccountCircle } from "@material-ui/icons";
import { VisibilityOffOutlined} from "@material-ui/icons";
import { VisibilityOutlined} from "@material-ui/icons";
import '../comp_css/Info.css';

function Info({nameArr, idArr, pwArr, emailArr, setPwArr, currentUser}){
    const [clickEyes0, setClickEyes0] = useState(false);
    const [clickEyes1, setClickEyes1] = useState(false);
    const [clickEyes2, setClickEyes2] = useState(false);
    
    const idx = currentUser[2];
    const [newPw, setNewPw] = useState('');
    const [checkNewPw, setCheckNewPw] = useState('')
    let pw1 = '';
    let pw2 = '';

    const clickHandler0=()=>{
        clickEyes0?setClickEyes0(false):setClickEyes0(true);
    }

    const clickHandler1=()=>{
        clickEyes1?setClickEyes1(false):setClickEyes1(true);
    }

    const clickHandler2=()=>{
        clickEyes2?setClickEyes2(false):setClickEyes2(true);
    }

    const newPwHandler = (v) => {
        setNewPw(v.target.value);
        pw1 = v.target.value;
    }

    const checkNewPwHandler = (v) => {
        setCheckNewPw(v.target.value);
        pw2 = v.target.value;
    }

    const changePw=()=>{
        if(checkNewPw === newPw){
            pwArr[idx] = newPw;
            setPwArr([...pwArr]);
            pw1 = '';
            pw2 = '';            
        } else{
            if(pwArr[idx] === newPw){
                alert('현재 사용 중인 비밀번호입니다. 다른 비밀번호를 입력해주세요.')
            } else if(newPw === ''){
                alert('비밀번호 형식이 올바르지 않습니다. 비밀번호를 다시 입력해주세요.')
            } else{
                alert("비밀번호가 일치하지 않습니다. 비밀번호 확인을 다시 입력해주세요.")
            }
        }
        
    }

    return(
        <div className="InfoDiv">
            <header className="InfoHeader">내 정보</header>
            <AccountCircle className="AccountCircleI"/>
            <div className="Infoboard">
                <li>
                    <label>이름</label>
                    <input type="text" value={nameArr[currentUser[2]]}/>
                </li>
                <li className="idInput">
                    <label>ID</label>
                    <input type="text" value={idArr[currentUser[2]]}/>
                </li>
                <li className="emailInp">
                    <label>Email</label>
                    <input type="text" value={emailArr[currentUser[2]]}/>
                </li>
                <div className="pwBoard">
                    <li className="curPw">
                        <label>현재 비밀번호</label>
                        <input type={clickEyes0?"text":"password"} value={pwArr[currentUser[2]]}/>
                        {clickEyes0?<VisibilityOutlined className="icon1" onClick={clickHandler0}/>:<VisibilityOffOutlined className="icon1"onClick={clickHandler0}/>}

                    </li>
                    <li>
                        <label>새 비밀번호</label>
                        <input type={clickEyes1?"text":"password"} defaultValue={pw1} onChange={(e)=>{newPwHandler(e)}}/>
                        {clickEyes1?<VisibilityOutlined className="icon2" onClick={clickHandler1}/>:<VisibilityOffOutlined className="icon2"onClick={clickHandler1}/>}
                    </li>
                    <li className="checkPwInp">
                        <label>새 비밀번호 확인</label>
                        <input type={clickEyes2?"text":"password"} defaultValue={pw2} onChange={(e)=>{checkNewPwHandler(e)}}/>
                        {clickEyes2?<VisibilityOutlined className="icon3" onClick={clickHandler2}/>:<VisibilityOffOutlined className="icon3"onClick={clickHandler2}/>}
                    </li>
                    <button className="changePwB" onClick={changePw}>변경</button>
                </div>
            </div>

        </div>
    );
}

export default Info;