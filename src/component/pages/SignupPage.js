import Headers from "../comp/Header";
import SignUp from "../comp/Signup";
import { Link } from "react-router-dom";

function SignUpPage({ nameArr, setNameArr, idArr, setIdArr, pwArr, setPwArr, emailArr, setEmailArr }){
    return(
        <div style={{backgroundColor: '#FCF6EC'}}>
            <Headers/>
            <Link to={'../Login' } className='Login'>Login</Link>
            <Link to={'../signUp'} className='SignIn'>Sign In</Link>

            <SignUp
                nameArr={nameArr} 
                idArr={idArr} 
                pwArr={pwArr} 
                emailArr={emailArr}
                setNameArr={setNameArr}
                setIdArr={setIdArr}
                setPwArr={setPwArr}
                setEmailArr={setEmailArr}
            />
            <footer className="mainFooter"/>
        </div>
    )
}

export default SignUpPage;