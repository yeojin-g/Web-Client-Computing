import './css/Header.css'
import menuButton from './img/menu.png'
import check from './img/check.png'
import { useNavigate } from 'react-router-dom';

function Headers() {
  const navigate = useNavigate();

    return(
    <div className='Page-header'>
      <header>
          <div className='title'>
            <div id='upper'>To do</div>
            <div id='under'>
              너<or id='orange'>투</or>나<or id='orange'>두</or>
            </div>
          </div>  
          <img className='checkImg' src={check} />
        
        <button>
          <img className='menuImg' src={menuButton} />
        </button>
      </header>
      <hr></hr>
    </div>
    )
}

export default Headers;