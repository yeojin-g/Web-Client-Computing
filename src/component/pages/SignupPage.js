import Headers from "../comp/Header";
import SignUp from "../comp/Signup";

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
            <footer className="mainFooter"/>
        </div>
    )
}

export default SignUpPage;