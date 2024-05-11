import Headers from "../Header";
import SignUp from "../Signup";

function SignUpPage({ nameArr, setNameArr, idArr, setIdArr, pwArr, setPwArr, emailArr, setEmailArr }){
    return(
        <div style={{backgroundColor: '#FCF6EC'}}>
            <Headers/>
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
        </div>
    )
}

export default SignUpPage;