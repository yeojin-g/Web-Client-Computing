import '../todos_css/BasicTodo.css'
import TodoItem from './TodoItem';
import { useState } from 'react';

function BasicTodo() {
    const [itemList, setItemList] = useState([]);

    const itemIndices = Array.from({ length: 30 }, (_, index) => index);

    return (
        <div className='basicTodo' style={{ backgroundColor: '#FFFDFA' }}>
            <div className='borders'>
                {itemIndices.map(index => (
                    <TodoItem key={index} itemL={itemList} setItemList={setItemList} len={index} />
                ))}
            </div>
        </div>
    );
}


export default BasicTodo;