import '../comp_css/Login.css'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { VisibilityOffOutlined } from "@material-ui/icons";
import { VisibilityOutlined } from "@material-ui/icons";
import axios from 'axios';

function Login({setCurrentUser}) {
    const [id, idSet] = useState('')
    const [pw, pwSet] = useState('')
    const [clickEyes, setClickEyes] = useState(false);
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate();
    

    useEffect(() => {
        if (success) {
            navigate('/main3');
        }
    }, [success, navigate]);
    const checkExist = async (e) => {
        e.preventDefault();
        const result = await axios.get(`/api/where/${id}`);
    
        if (result.data.length === 0) {
            alert("아이디가 존재하지 않습니다.");
        } else {
            const user = result.data[0];
            if (user.Pw === pw) {
                setSuccess(true);
                setCurrentUser([id, pw]);
            } else {
                alert("비밀번호가 잘못되었습니다. 다시 시도해주세요.");
            }
        }
    };
    
    

    const clickHandler=()=>{
        clickEyes?setClickEyes(false):setClickEyes(true);
    }

    return (
        <div className="mainL">
            <label id="titleL">로그인</label>
            <div className="loginBoard">
                <li className='idSet'>
                    <input id="idInput" type="text" placeholder="ID" value={id} onChange={(e) => idSet(e.target.value)}></input>
                </li>
                
                <li className='pwSet'>
                    <input id="pwInput" type={clickEyes?"text":"password"} placeholder="PASSWORD" value={pw} onChange={(e) => pwSet(e.target.value)}></input>
                    {clickEyes?<VisibilityOutlined className="icon" onClick={clickHandler}/>:<VisibilityOffOutlined className="icon"onClick={clickHandler}/>}
                </li>
                <button className='LoginB' onClick={checkExist}>Login</button>
                <Link to={'../signUp'}>회원 가입</Link>
            </div>
        </div>
    );
};

export default Login;