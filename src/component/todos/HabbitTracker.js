import '../css/HabbitTracker.css'
import plus from '../img/plus.png'
import del from '../img/del.png'
import { useState } from 'react';
import HabbitCheckBoard from './HabbitCheckBoard';

function HabbitTracker() {
    const count = 0;
    return(
        <div className='habbitBoard'>
            <div className='habbitHeader'>
                <header className='title'> HabbitTracker </header>
                <label className='scrollS'> 옆으로 스크롤해서 넘겨보세요!</label>
                <button className='habbitAddB'>
                    <img src={plus}/>
                </button>
                <button className='habbitDelB'>
                    <img src={del}/>
                </button>
            </div>

            <div className='habbitButtons'>
                <HabbitCheckBoard num={count}/>

            </div>
        </div>
    );
}

export default HabbitTracker;