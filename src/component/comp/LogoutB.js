import { Link } from "react-router-dom";

function LogoutB() {
    return (
        <Link to='../'>
            <button className='logoutB'>Logout</button>
        </Link>
    );
}

export default LogoutB;