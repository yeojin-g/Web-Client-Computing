import { useState } from "react";

function TodoC() {
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
            <li style={{borderBottom: '1.5px solid black', borderLeft:'0%'}}>
                <input className='checkB' type='checkbox' onClick={change}/>
                <input className='todoWrite' style={{color: !isChecked ? 'black' : 'gray'}}/>
            </li>
        </div>
    );
}

export default TodoC;