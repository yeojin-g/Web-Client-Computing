import Login from "../comp/Login";
import Headers from "../comp/Header";
import React from "react";
import { Link } from "react-router-dom";

function LoginPage({idArr, pwArr,setCurrentUser}){
    return(
        <div style={{backgroundColor: '#FCF6EC'}}>
            <Headers/>
            <Link to={'../Login' } className='Login'>Login</Link>
            <Link to={'../signUp'} className='SignIn'>Sign In</Link>

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