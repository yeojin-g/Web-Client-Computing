import { useState } from "react"
import '../todos_css/CheckButton.css'

function CheckButton({checkButtonList, setCheckButtonList, date, id}) {
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
            <input id={id} className='checkBut' type='checkbox' onChange={change}/>
            <label htmlFor={id} className='checkL'>{date}</label>
        </div>
    );
}

export default CheckButton;