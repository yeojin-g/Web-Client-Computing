import '../todos_css/HabbitTracker.css'
import plus from '../img/plus.png'
import del from '../img/del.png'
import { useState, useEffect } from 'react';
import HabbitCheckBoard from './HabbitCheckBoard';
import axios from 'axios';

function HabbitTracker({currentUser}) {
    const [num, setNum] = useState(0);
    const [habbits, setHabbits] = useState([]);
    const [checkButtonList, setCheckButtonList] = useState([]);
    const [curNum, setcurNum] = useState(0);
    const [habbitDB, setHabbitDB] = useState([]);

    useEffect(() => {
       const loadHabbitDB = async()=>{
            try{
                const response = await axios.get(`/api/getHabbitTracker/${currentUser[0]}`);
                setHabbitDB(response.data);
                console.log(`request.data: ${response.data}`);
                console.log(`habbitDB: ${habbitDB}`);
            } catch (error) {
                console.error('정보 불러오는 중 error:', error);
            }
        }
        loadHabbitDB();
        }, []);

    useEffect(()=>{
        const updateCheckButtonL = async () => {
            try {
                await axios.post('/api/updateHabbitCheckButtonL', {
                    idx: curNum,
                    ID: currentUser[0],
                    checkButtonL: checkButtonList.length === 0?null:JSON.stringify(checkButtonList)
                });
                console.log(checkButtonList);
                console.log(`update ${curNum}, ${currentUser[0]}, ${checkButtonList}`)
                console.log('checkButtonL 변경 요청이 서버에 전달되었습니다.');
            } catch (error) {
                console.error('checkButtonL 변경 요청 중 에러가 발생했습니다:', error);
            }
        };
        updateCheckButtonL();
    },[checkButtonList])

    const addH = async() => {
        try {
            const prevNum = num;
            setNum(prevNum + 1);
            const newH = <HabbitCheckBoard num={prevNum} checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} currentUser={currentUser} setcurNum={setcurNum}/>;
            setHabbits([...habbits, newH]);
            await axios.post('/api/insertHabbit', {
                idx: prevNum,
                ID: currentUser[0], 
                habbitName: `Habbit${prevNum}`, 
                checkButtonL: checkButtonList.length === 0?null:JSON.stringify(checkButtonList)
            });
        } catch (error) {
            console.error('Add habit error:', error);
        }
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