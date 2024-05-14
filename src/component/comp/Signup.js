import '../comp_css/Signup.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { VisibilityOffOutlined } from "@material-ui/icons";
import { VisibilityOutlined } from "@material-ui/icons";
import axios from 'axios';

function SignUp({ nameArr, setNameArr, idArr, setIdArr, pwArr, setPwArr, emailArr, setEmailArr }) {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [pwCheck, setPwCheck] = useState('');
    const [email, setEmail] = useState('');
    const [buttonClicked, setButtonClicked] = useState(false);
    const [success, setSuccess] = useState(false);
    const [clickEyes1, setClickEyes1] = useState(false);
    const [clickEyes2, setClickEyes2] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (success) {
            navigate('/login');
        }
    }, [success, navigate]);

    const insertUser = async (e) => {
        e.preventDefault();
        if (!name || !id || !pw || !pwCheck || !email) {
            alert('정보를 모두 입력해주세요.');
            return;
        }
        if (pw !== pwCheck) {
            alert('비밀번호가 일치하지 않습니다.\n다시 입력해주세요');
            return;
        }
        if (!buttonClicked) {
            alert('아이디 중복 확인 버튼을 눌러주세요.');
            return;
        }
        const response = await axios.post('/api/insertUser', {
            id,
            pw,
            name,
            email
        });
        setSuccess(true);
    };

    const checkId = async (e) => {
        e.preventDefault();
        const result = await axios.get(`/api/where?id=${id}`);
        console.log(result.data);

        if (result.data.length > 0) {
            alert("이미 사용 중인 아이디입니다.");
        } else {
            if (id) {
                setButtonClicked(true);
                alert('사용 가능한 아이디입니다.');
            } else {
                alert('아이디를 입력해주세요.');
            }
        }
    };

    const clickHandler1 = () => {
        setClickEyes1(prevState => !prevState);
    };

    const clickHandler2 = () => {
        setClickEyes2(prevState => !prevState);
    };

    return (
        <div className='SignUpBoard'>
            <li>
                <p id='titleS'>회원 가입</p>
            </li>
            <div className='inputs'>
                <li className='inputWrapper1'>
                    <label id="name">이름</label>
                    <input id="nameInput" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                </li>

                <li className='inputWrapper2'>
                    <label id="id">ID</label>
                    <input id="idInput" type="text" value={id} onChange={(e) => setId(e.target.value)}></input>
                    <button id="checkB" onClick={checkId}>중복확인</button>
                </li>

                <li className='inputWrapper3'>
                    <label id="pw">비밀번호</label>
                    <input id="pwInput" type={clickEyes1 ? "text" : "password"} value={pw} onChange={(e) => setPw(e.target.value)}></input>
                    {clickEyes1 ? <VisibilityOutlined className="icon1" onClick={clickHandler1} /> : <VisibilityOffOutlined className="icon1" onClick={clickHandler1} />}
                </li>

                <li className='inputWrapper4'>
                    <label id="checkPw">비밀번호 확인</label>
                    <input id="checkPwInput" type={clickEyes2 ? "text" : "password"} value={pwCheck} onChange={(e) => setPwCheck(e.target.value)}></input>
                    {clickEyes2 ? <VisibilityOutlined className="icon2" onClick={clickHandler2} /> : <VisibilityOffOutlined className="icon2" onClick={clickHandler2} />}
                </li>

                <li className='inputWrapper5'>
                    <label id="email">이메일</label>
                    <input id="emailInput" type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </li>
            </div>
            <button className='compleB' onClick={insertUser}>완료</button>
        </div>
    );
}

export default SignUp;
