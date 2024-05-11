import { useState } from "react"
import '../css/CheckButton.css'

function CheckButton({checkButtonList, setCheckButtonList, date}) {
    const [isChecked, setIsChecked] = useState(false)
    
    const change = () => {
        if(isChecked){
            setIsChecked(false)
        }else{
            setIsChecked(true)
        }
        console.log(isChecked)
    }

    return(
        <div>
            <input className='checkB' type='checkbox' onClick={change}/>
            <label className='checkL'>{date}</label>
        </div>
    );
}

export default CheckButton;