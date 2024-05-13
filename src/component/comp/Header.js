import '../comp_css/Header.css'
import check from '../img/check.png'
import { Link } from "react-router-dom";

function Headers({isLogin = false}) {
    return(
    <div className='Page-header'>
      <header>
          <div className='title'>
            <div id='upper'>To do</div>
            <Link to= {isLogin? '../main3' : '../'}  className='headerL'>
              <div id='under'>너<or id='orange'>투</or>나<or id='orange'>두</or></div>
            </Link>
          </div>  
          <img className='checkImg' src={check}/>
      </header>
      <hr></hr>
    </div>
    )
}

export default Headers;