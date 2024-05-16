import { useState, useEffect } from "react";
import CheckButton from "./CheckButton";
import '../todos_css/HabbitCheckBoard.css';
import axios from "axios";

function HabbitCheckBoard({num, checkButtonList, setCheckButtonList, currentUser, setcurNum}) {

    const changeName = async (e) => {
        const newName = e.target.value;
        await axios.post('/api/updateHabbitName', {
            idx: num,
            newName: newName,
            ID: currentUser[0]
        });
    }
    
    return (
        <div className="habbitCheckBoard">
            <input className='habbitHeader' type="text" defaultValue={`Habbit ${num}`} onBlur={(e) => changeName(e)} /> 

        <li className="_1week">
            <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} setcurNum={setcurNum} num={num} date ={1} id ={'b1'+ String(num)}/>
            <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} setcurNum={setcurNum} num={num} date ={2} id ={'b2'+ String(num)}/>
            <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} setcurNum={setcurNum} num={num} date ={3} id ={'b3'+ String(num)}/>
            <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} setcurNum={setcurNum} num={num} date ={4} id ={'b4'+ String(num)}/>
            <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} setcurNum={setcurNum} num={num} date ={5} id ={'b5'+ String(num)}/>
            <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} setcurNum={setcurNum} num={num} date ={6} id ={'b6'+ String(num)}/>
            <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} setcurNum={setcurNum} num={num} date ={7} id ={'b7'+ String(num)}/>

        </li>
        <li className="_2week">
            <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} setcurNum={setcurNum} num={num} date ={8} id ={'b8'+ String(num)}/>
            <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} setcurNum={setcurNum} num={num} date ={9} id ={'b9'+ String(num)}/>
            <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} setcurNum={setcurNum} num={num} date ={10} id ={'b10'+ String(num)}/>
            <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} setcurNum={setcurNum} num={num} date ={11} id ={'b11'+ String(num)}/>
            <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} setcurNum={setcurNum} num={num} date ={12} id ={'b12'+ String(num)}/>
            <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} setcurNum={setcurNum} num={num} date ={13} id ={'b13'+ String(num)}/>
            <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} setcurNum={setcurNum} num={num} date ={14} id ={'b14'+ String(num)}/>
        </li>

        <li className="_3week">
            <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} setcurNum={setcurNum} num={num} date ={15} id ={'b15'+ String(num)}/>
            <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} setcurNum={setcurNum} num={num} date ={16} id ={'b16'+ String(num)}/>
            <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} setcurNum={setcurNum} num={num} date ={17} id ={'b17'+ String(num)}/>
            <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} setcurNum={setcurNum} num={num} date ={18} id ={'b18'+ String(num)}/>
            <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} setcurNum={setcurNum} num={num} date ={19} id ={'b19'+ String(num)}/>
            <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} setcurNum={setcurNum} num={num} date ={20} id ={'b20'+ String(num)}/>
            <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} setcurNum={setcurNum} num={num} date ={21} id ={'b21'+ String(num)}/>
        </li>

        <li className="_4week">
            <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} setcurNum={setcurNum} num={num} date ={22} id ={'b22'+ String(num)}/>
            <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} setcurNum={setcurNum} num={num} date ={23} id ={'b23'+ String(num)}/>
            <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} setcurNum={setcurNum} num={num} date ={24} id ={'b24'+ String(num)}/>
            <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} setcurNum={setcurNum} num={num} date ={25} id ={'b25'+ String(num)}/>
            <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} setcurNum={setcurNum} num={num} date ={26} id ={'b26'+ String(num)}/>
            <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} setcurNum={setcurNum} num={num} date ={27} id ={'b27'+ String(num)}/>
            <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} setcurNum={setcurNum} num={num} date ={28} id ={'b28'+ String(num)}/>
        </li>

        <li className="_5week">
            <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} setcurNum={setcurNum} num={num} date ={29} id ={'b29'+ String(num)}/>
            <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} setcurNum={setcurNum} num={num} date ={30} id ={'b30'+ String(num)}/>
            <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} setcurNum={setcurNum} num={num} date ={31} id ={'b31'+ String(num)}/>
        </li>
    </div>
);
}

export default HabbitCheckBoard;