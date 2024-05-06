function Login() {
    return (
        <div id="loginBlock">
            <ul>
                <li>
                    <label id="id">ID</label>
                    <input id="idInput" type="text"></input>
                </li>

                <li>
                    <label id="pw">Password</label>
                    <input id="pwInput" type="text"></input>
                </li>
            </ul>
            <button onClick={checkInfo}></button>
        </div>
    )
}

function checkInfo(ID, PW) {

}

export default Login;