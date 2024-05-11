import '../css/BasicTodo.css'
import TodoItem from './TodoItem';
import { useState  } from 'react';

function BasicTodo() {
    const [itemList, setItemList] = useState([]);

    return(
        <div className='basicTodo' style={{backgroundColor: '#FFFDFA'}}>
            <div className='borders'>
                <TodoItem itemL = {itemList} setItemList={setItemList} len={0}/>
                <TodoItem itemL = {itemList} setItemList={setItemList} len={1}/>
                <TodoItem itemL = {itemList} setItemList={setItemList} len={2}/>
                <TodoItem itemL = {itemList} setItemList={setItemList} len={3}/>
                <TodoItem itemL = {itemList} setItemList={setItemList} len={4}/>
                <TodoItem itemL = {itemList} setItemList={setItemList} len={5}/>
                <TodoItem itemL = {itemList} setItemList={setItemList} len={6}/>
            </div>
        </div>
    );
}

export default BasicTodo;