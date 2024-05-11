import { useState } from "react";
import CheckButton from "./CheckButton";
import '../css/HabbitCheckBoard.css';

function HabbitCheckBoard({num}) {
    const [checkButtonList, setCheckButtonList] = useState([]);
    return(
        <div className="habbitCheckBoard">   
            <header>Habbit {num}</header>    
            <li className="1week">
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={1}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={2}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={3}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={4}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={5}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={6}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={7}/>

            </li>
            <li className="2week">
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={8}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={9}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={10}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={11}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={12}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={13}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={14}/>
            </li>

            <li className="3week">
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={15}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={16}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={17}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={18}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={19}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={20}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={21}/>
            </li>

            <li className="4week">
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={22}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={23}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={24}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={25}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={26}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={27}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={28}/>
            </li>

            <li className="5week">
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={29}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={30}/>
                <CheckButton checkButtonList={checkButtonList} setCheckButtonList={setCheckButtonList} date ={31}/>
            </li>
        </div>
    );
}

export default HabbitCheckBoard;