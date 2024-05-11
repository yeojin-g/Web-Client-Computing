import Login from "../Login";
import Headers from "../Header";
import React from "react";

function LoginPage({idArr, pwArr}){
    return(
        <div style={{backgroundColor: '#FCF6EC'}}>
            <Headers/>
            <Login
                idArr={idArr} 
                pwArr={pwArr} 
            />
        </div>
    );
}

export default LoginPage;