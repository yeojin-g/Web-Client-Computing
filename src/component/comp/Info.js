import { useState, useEffect } from "react";
import { AccountCircle } from "@material-ui/icons";
import { VisibilityOffOutlined, VisibilityOutlined } from "@material-ui/icons";
import axios from "axios";
import '../comp_css/Info.css';

function Info({ currentUser }) {
    const [clickEyes0, setClickEyes0] = useState(false);
    const [clickEyes1, setClickEyes1] = useState(false);
    const [clickEyes2, setClickEyes2] = useState(false);
    const [newPw, setNewPw] = useState('');
    const [checkNewPw, setCheckNewPw] = useState('');

    const [userInfo, setUserInfo] = useState({
        Id: '',
        Pw: '',
        Name: '',
        Email: ''
    });

    // 데이터를 가져오는 함수
    const fetchData = async () => {
        try {
            const response = await axios.get(`/info?ID=${currentUser[0]}`);
            const userData = response.data[0];
            setUserInfo({
                Id: userData.ID,
                Pw: userData.Pw,
                Name: userData.Name,
                Email: userData.Email
            });
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const clickHandler0 = () => {
        setClickEyes0(!clickEyes0);
    }

    const clickHandler1 = () => {
        setClickEyes1(!clickEyes1);
    }

    const clickHandler2 = () => {
        setClickEyes2(!clickEyes2);
    }

    const newPwHandler = (e) => {
        setNewPw(e.target.value);
    }

    const checkNewPwHandler = (e) => {
        setCheckNewPw(e.target.value);
    }

    const changePw = async () => {
        if (checkNewPw === newPw) {
            try {
                const response = await axios.post('/api/updatePassword', {
                    ID: userInfo.Id,
                    NewPassword: newPw
                });
                setNewPw('');
                setCheckNewPw('');
                fetchData();
            } catch (error) {
                console.error('Error:', error);
                alert('비밀번호 변경에 실패했습니다. 다시 시도해주세요.');
            }
        } else {
            if (userInfo.Pw === newPw) {
                alert('현재 사용 중인 비밀번호입니다. 다른 비밀번호를 입력해주세요.');
            } else if (newPw === '') {
                alert('비밀번호 형식이 올바르지 않습니다. 비밀번호를 다시 입력해주세요.');
            } else {
                alert('비밀번호가 일치하지 않습니다. 비밀번호 확인을 다시 입력해주세요.');
            }
        }
    };

    return (
        <div className="InfoDiv">
            <header className="InfoHeader">내 정보</header>
            <AccountCircle className="AccountCircleI" />
            <div className="Infoboard">
                <li>
                    <label>이름</label>
                    <input type="text" value={userInfo.Name} />
                </li>
                <li className="idInput">
                    <label>ID</label>
                    <input type="text" value={userInfo.Id} />
                </li>
                <li className="emailInp">
                    <label>Email</label>
                    <input type="text" value={userInfo.Email} />
                </li>
                <div className="pwBoard">
                    <li className="curPw">
                        <label>현재 비밀번호</label>
                        <input type={clickEyes0 ? "text" : "password"} value={userInfo.Pw} readOnly />
                        {clickEyes0 ? <VisibilityOutlined className="icon1" onClick={clickHandler0} /> : <VisibilityOffOutlined className="icon1" onClick={clickHandler0} />}
                    </li>
                    <li>
                        <label>새 비밀번호</label>
                        <input type={clickEyes1 ? "text" : "password"} value={newPw} onChange={newPwHandler} />
                        {clickEyes1 ? <VisibilityOutlined className="icon2" onClick={clickHandler1} /> : <VisibilityOffOutlined className="icon2" onClick={clickHandler1} />}
                    </li>
                    <li className="checkPwInp">
                        <label>새 비밀번호 확인</label>
                        <input type={clickEyes2 ? "text" : "password"} value={checkNewPw} onChange={checkNewPwHandler} />
                        {clickEyes2 ? <VisibilityOutlined className="icon3" onClick={clickHandler2} /> : <VisibilityOffOutlined className="icon3" onClick={clickHandler2} />}
                    </li>
                    <button className="changePwB" onClick={changePw}>변경</button>
                </div>
            </div>
        </div>
    );
}

export default Info;