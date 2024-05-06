import './css/Login.css'

function Login() {
    return (
        <div className="main">
            <label id="title">로그인</label>
            <div className="loginBoard">
                <li className='idSet'>
                    <input id="idInput" type="text" placeholder="ID"></input>
                </li>
                
                <li className='pwSet'>
                    <input id="pwInput" type="text" placeholder="PASSWORD"></input>
                </li>
                <button className='google'>google</button>
                <button className='Login'>Login</button>
                <href>회원 가입</href>
            </div>
        </div>
    )
}

export default Login;