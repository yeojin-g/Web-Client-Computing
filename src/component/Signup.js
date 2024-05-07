import './css/Signup.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp({ nameArr, setNameArr, idArr, setIdArr, pwArr, setPwArr, emailArr, setEmailArr }) {
    const [name, nameSet] = useState('')
    const [id, idSet] = useState('')
    const [pw, pwSet] = useState('')
    const [pwCheck, pwCheckSet] = useState('')
    const [email, emailSet] = useState('')
    const [buttonClicked, setButtonClicked] = useState(false);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (success) {
            navigate('/login');
        }
    }, [success, navigate]);

    const checkId = () => {
        if(idArr.includes(id)) {
            alert("이미 사용 중인 아이디입니다.")
        }
        else{
            if(id){
                setButtonClicked(true)
                alert('사용 가능한 아이디입니다.')
            }
            else{
                alert('아이디를 입력해주세요.')
            } 
        }
    }

    const complete = () => {
        if(!name || !id || !pw || !pwCheck || !email){
            alert('정보를 모두 입력해주세요.')
        }
        else if(pw !== pwCheck){
            alert('비밀번호가 일치하지 않습니다.\n다시 입력해주세요')
        }
        else if(!buttonClicked){
            alert('아이디 중복 확인 버튼을 눌러주세요.')
        }
        else{
            setNameArr([...nameArr, name])
            setIdArr([...idArr, id])
            setPwArr([...pwArr, pw])
            setEmailArr([...emailArr, email])
            
            setSuccess(true)
        }
        
    }

    return(
        <div className='SignUpBoard'>
            <li>
                <p id='titleS'>회원 가입</p>
            </li>
            <div className='inputs'>
                <li className='inputWrapper1'>
                    <label id="name">이름</label>
                    <input id="nameInput" type="text" value={name} onChange={(e) => nameSet(e.target.value)}></input>
                </li>

                <li className='inputWrapper2'>
                    <label id="id">ID</label>
                    <input id="idInput" type="text" value={id} onChange={(e) => idSet(e.target.value)}></input>
                    <button id="checkB" onClick={checkId}>중복확인</button>
                </li>

                <li className='inputWrapper3'>
                    <label id="pw">비밀번호</label>
                    <input id="pwInput" type="text" value={pw} onChange={(e) => pwSet(e.target.value)}></input>
                </li>

                <li className='inputWrapper4'>
                    <label id="checkPw">비밀번호 확인</label>
                    <input id="checkPwInput" type="text" value={pwCheck} onChange={(e) => pwCheckSet(e.target.value)}></input>
                </li>

                <li className='inputWrapper5'>
                    <label id="email">이메일</label>
                    <input id="emailInput" type="text" value={email} onChange={(e) => emailSet(e.target.value)}></input>
                </li>
            </div>
            <button className='compleB' onClick={complete}>완료</button>
        </div>
    )
}

export default SignUp;