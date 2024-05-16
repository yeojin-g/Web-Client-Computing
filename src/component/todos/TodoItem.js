import { useState, useEffect } from "react";
import axios from "axios";
import '../todos_css/TodoItem.css';

function TodoItem({index, currentUser, itemD, setDeleted}) {
    const [isChecked, setIsChecked] = useState(itemD.ischeck)
    const [item, setItem] = useState(itemD.todoText);
    const [changeNow, setChangeNow] = useState(false);

    useEffect(() => {
        setIsChecked(itemD.ischeck);
        setItem(itemD.todoText);
    }, [itemD]);

    const change = async () => {
        try {
            const newCheckValue = !isChecked;   
            setIsChecked(newCheckValue);
            await axios.post('/api/updateisCheck', {
                idx: index,
                newCheck: newCheckValue
            });
        } catch (error) {
            alert(error.message);
            console.error('ischeckedError:', error);
        }
    };
    
    const existItem = async () => {
        try {
            const response = await axios.get(`/api/whereTodo/${index}/${currentUser[0]}`);
            if(response.data.length > 0){
                return true;
            } else{ 
                return false;
            }
        } catch (error) {
            alert(error.message);
            console.error('existItemError:', error);
        }
    };  

    const writeItem = (v) => {
        setItem(v);
        setChangeNow(true);
    }

    const saveItem = async() => {
        try{
            const isExist = await existItem();
            if(isExist){
                const response = await axios.post('/api/updatetodoText', {
                    idx: index,
                    newText: item
                });  
            } else{
                await axios.post('/api/insertTodo', {
                    idx: index, 
                    ID: currentUser[0],
                    isCheckD: isChecked, 
                    todoText: item
                });
            }
            
            setChangeNow(false);
        } catch(error){
            alert(error.message);
            console.error('saveItemError:', error);
        }
    }

    return(
        <div>
            <li style={{borderBottom: '1.5px solid black', borderLeft:'0%'}}>
                <input className='checkB' type='checkbox' checked={isChecked} onChange={change}/>
                <input className='todoWrite' value={item} style={{ color: !isChecked ? 'black' : 'gray', textDecorationLine: !isChecked ? '' : 'line-through' }} onChange={(e) => writeItem(e.target.value)} />
                {changeNow?
                <button className="done" onClick={saveItem}>✔</button>:null}
            </li>

        </div>
    );
}

export default TodoItem;
