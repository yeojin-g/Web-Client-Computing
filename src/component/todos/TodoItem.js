import { useState } from "react";
import '../css/TodoItem.css';

function TodoItem({itemL, setItemList, len}) {
    const [isChecked, setIsChecked] = useState(false)
    const [item, setItem] = useState('');
    const [changeNow, setChangeNow] = useState(false);
    
    const change = () => {
        if(isChecked){
            setIsChecked(false)
        }else{
            setIsChecked(true)
        }
        console.log(isChecked)
    }
    const writeItem = (v) => {
        setItem(v);
        setChangeNow(true);
    }

    const saveItem = () => {
        if(itemL.length < len){
            setItemList(item);
        }else{
            itemL[len] = item;
        }
        console.log(itemL);
        setChangeNow(false);
    }

    return(
        <div>
            <li style={{borderBottom: '1.5px solid black', borderLeft:'0%'}}>
                <input className='checkB' type='checkbox' onClick={change}/>
                <input className='todoWrite' style={{color: !isChecked ? 'black' : 'gray'}} onChange={(e) => writeItem(e.target.value)}/>
                {changeNow?
                <button className="done" onClick={saveItem}>✔</button>:null}
            </li>

        </div>
    );
}

export default TodoItem;