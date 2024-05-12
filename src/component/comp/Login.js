import '../comp_css/Login.css'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { VisibilityOffOutlined } from "@material-ui/icons";
import { VisibilityOutlined } from "@material-ui/icons";

function Login({idArr, pwArr, setCurrentUser}) {
    const [id, idSet] = useState('')
    const [pw, pwSet] = useState('')
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        if (success) {
            navigate('/main2');
        }
    }, [success, navigate]);

    const checkExist = () => {
        if(!idArr.includes(id) || (pw !== pwArr[idArr.indexOf(id)])){
            alert("아이디 및 비밀번호가 잘못되었습니다.\n다시 시도해주세요.")
        }else{
            setSuccess(true)
            setCurrentUser([id, pw, idArr.indexOf(id)])
        }
    }

    return (
        <div className="mainL">
            <label id="titleL">로그인</label>
            <div className="loginBoard">
                <li className='idSet'>
                    <input id="idInput" type="text" placeholder="ID" value={id} onChange={(e) => idSet(e.target.value)}></input>
                </li>
                
                <li className='pwSet'>
                    <input id="pwInput" type="text" placeholder="PASSWORD" value={pw} onChange={(e) => pwSet(e.target.value)}></input>
                </li>
                <button className='LoginB' onClick={checkExist}>Login</button>
                <Link to={'../signUp'}>회원 가입</Link>
            </div>
        </div>
    );
};

export default Login;