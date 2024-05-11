import Login from "../comp/Login";
import Headers from "../comp/Header";
import React from "react";

function LoginPage({idArr, pwArr}){
    return(
        <div style={{backgroundColor: '#FCF6EC'}}>
            <Headers/>
            <Login
                idArr={idArr} 
                pwArr={pwArr} 
            />
            <footer className="LoginFooter"/>
        </div>
    );
}

export default LoginPage;