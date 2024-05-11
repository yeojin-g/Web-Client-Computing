import '../todos_css/HabbitTracker.css'
import plus from '../img/plus.png'
import del from '../img/del.png'
import { useState } from 'react';
import HabbitCheckBoard from './HabbitCheckBoard';

function HabbitTracker() {
    const [num, setNum] = useState(0);
    const [habbits, setHabbits] = useState([]);
    const addH = () => {
        const newH = <HabbitCheckBoard num={num}/>;
        setHabbits([...habbits, newH]);
        setNum(num+1);
    }

    const delH = () => {
        habbits.pop();
        if(num===0){
            setNum(0);
        } else{
            setNum(num-1);
        }   
    }
    return(
        <div className='habbitBoard'>
            <div className='habbitHeader'>
                <header className='title'> HabbitTracker </header>
                <label className='scrollS'> 스크롤해서 아래로 내려보세요!</label>
                <button className='habbitAddB' onClick={addH}>
                    <img src={plus}/>
                </button>
                <button className='habbitDelB' onClick={delH}>
                    <img src={del}/>
                </button>
            </div>

            <div className='habbitButtons'>
                {habbits}
            </div>
        </div>
    );
}

export default HabbitTracker;