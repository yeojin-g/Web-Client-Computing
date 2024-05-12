import Login from "../comp/Login";
import Headers from "../comp/Header";
import React from "react";

function LoginPage({idArr, pwArr,setCurrentUser}){
    return(
        <div style={{backgroundColor: '#FCF6EC'}}>
            <Headers/>
            <Login
                idArr={idArr} 
                pwArr={pwArr} 
                setCurrentUser={setCurrentUser}
            />
            <footer className="LoginFooter"/>
        </div>
    );
}

export default LoginPage;