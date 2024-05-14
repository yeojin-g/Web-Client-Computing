import Headers from "../comp/Header"
import Info from "../comp/Info";
import LogoutB  from "../comp/LogoutB"

function InfoPage({nameArr, idArr, pwArr, emailArr, setPwArr, currentUser}){
    return(
        <div>
            <Headers isLogin={true}/>
            <LogoutB/>
            <Info
            nameArr={nameArr}
            idArr={idArr}
            pwArr={pwArr}
            emailArr={emailArr}
            setPwArr={setPwArr}
            currentUser={currentUser}
            />
            <footer className="mainFooter"/>
        </div>
    );   
}

export default InfoPage;