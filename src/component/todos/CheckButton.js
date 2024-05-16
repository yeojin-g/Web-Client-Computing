import { useState } from "react";
import '../todos_css/CheckButton.css';

function CheckButton({ checkButtonList, setCheckButtonList, num, date, id, setcurNum }) {
    const [isChecked, setIsChecked] = useState(false);
    
    const change = () => {
        setCheckButtonList(prevList => {
            let newList;
            if (isChecked) {
                newList = prevList.filter(item => item !== date);
                setIsChecked(false);
            } else {
                newList = [...prevList, date];
                setIsChecked(true);
            }
            console.log(`Updated list: ${newList}`);
            return newList;
        });
        setcurNum(num);
    };

    return (
        <div>
            <input id={id} className='checkBut' type='checkbox' checked={isChecked} onChange={change}/>
            <label htmlFor={id} className='checkL'>{date}</label>
        </div>
    );
}

export default CheckButton;
