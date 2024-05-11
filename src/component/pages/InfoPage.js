import Headers from "../comp/Header"
import LogoutB  from "../comp/LogoutB"

function InfoPage(){
    return(
        <div>
            <Headers/>
            <LogoutB/>
            <footer className="mainFooter"/>
        </div>
    );   
}

export default InfoPage;