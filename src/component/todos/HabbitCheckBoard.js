import { useState } from "react";
import CheckButton from "./CheckButton";
import '../todos_css/HabbitCheckBoard.css';

function HabbitCheckBoard({num}) {
    const [checkButtonList, setCheckButtonList] = useState([]);
    return(
        <div className="habbitCheckBoard">   
            <input className='habbitHeader' type="text" defaultValue={`Habbit ${num}`}/> 
            <li className="_1week">
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={1} id ={'b1'+ String(num)}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={2} id ={'b2'+ String(num)}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={3} id ={'b3'+ String(num)}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={4} id ={'b4'+ String(num)}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={5} id ={'b5'+ String(num)}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={6} id ={'b6'+ String(num)}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={7} id ={'b7'+ String(num)}/>

            </li>
            <li className="_2week">
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={8} id ={'b8'+ String(num)}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={9} id ={'b9'+ String(num)}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={10} id ={'b10'+ String(num)}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={11} id ={'b11'+ String(num)}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={12} id ={'b12'+ String(num)}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={13} id ={'b13'+ String(num)}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={14} id ={'b14'+ String(num)}/>
            </li>

            <li className="_3week">
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={15} id ={'b15'+ String(num)}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={16} id ={'b16'+ String(num)}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={17} id ={'b17'+ String(num)}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={18} id ={'b18'+ String(num)}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={19} id ={'b19'+ String(num)}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={20} id ={'b20'+ String(num)}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={21} id ={'b21'+ String(num)}/>
            </li>

            <li className="_4week">
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={22} id ={'b22'+ String(num)}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={23} id ={'b23'+ String(num)}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={24} id ={'b24'+ String(num)}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={25} id ={'b25'+ String(num)}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={26} id ={'b26'+ String(num)}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={27} id ={'b27'+ String(num)}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={28} id ={'b28'+ String(num)}/>
            </li>

            <li className="_5week">
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={29} id ={'b29'+ String(num)}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={30} id ={'b30'+ String(num)}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={31} id ={'b31'+ String(num)}/>
            </li>
        </div>
    );
}

export default HabbitCheckBoard;