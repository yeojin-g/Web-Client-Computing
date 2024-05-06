import './css/Header.css'

function Logo() {
    return(
    <div className='Page-header'>
      <header>
        <div className='logos'>
          <div id='upper'>To do</div>
          <div id='under'>
            너<or id='orange'>투</or>나<or id='orange'>두</or>
          </div>
        </div>  
        <button>
          <img src="./img/menu.png"></img>
          {/* ☰ */}
        </button>
      </header>
      <hr></hr>
    </div>
    )
}

export default Logo;