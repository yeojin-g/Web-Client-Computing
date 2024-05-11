import Headers from "../comp/Header"
import LogoutB  from "../comp/LogoutB"

function HelpPage(){
    return(
        <div>
            <Headers/>
            <LogoutB/>
            <footer className="mainFooter"/>
        </div>
    );   
}

export default HelpPage;