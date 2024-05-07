import Login from "../Login";
import Headers from "../Header";
import React from "react";

function LoginPage({idArr, pwArr}){
    return(
        <div>
            <Headers/>
            <Login
                idArr={idArr} 
                pwArr={pwArr} 
            />
        </div>
    );
}

export default LoginPage;