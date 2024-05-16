import '../todos_css/BasicTodo.css';
import TodoItem from './TodoItem';
import del from '../img/del.png'
import axios from 'axios';
import { useState, useEffect } from 'react';

function BasicTodo({currentUser}) {
    const [itemList, setItemList] = useState([]);
    const itemIndices = Array.from({ length: 29 }, (_, index) => index);
    const [deleted, setDeleted] = useState(false);

    useEffect(() => {
        const getUserTodos = async () => {
            try {
                const response = await axios.get(`/api/getBasicTodo/${currentUser[0]}`);
                setItemList(response.data);
            } catch (error) {
                console.error('Error fetching user todos:', error);
            }
        };      
        getUserTodos();
    }, [setDeleted]);

    const getItemByIndex = (index) => {
        return itemList.find(item => item.idx === index);
        
    };

    const deleteAll = async() => {
        await axios.delete(`/api/basicTodoDel/${currentUser[0]}`);
        setDeleted(!deleted);
    }

    return (
        <div className='basicTodo'>
            <div className='borders'>
                <button className='todoDelB' onClick={deleteAll}><img src={del} className='todoDelImg'/></button>
                {itemIndices.map(index => {
                    const itemData = getItemByIndex(index);
                    return (
                        <TodoItem
                            key={index}
                            index={index}
                            currentUser={currentUser}
                            itemD={itemData ? itemData : { idx: index, ID: currentUser[0], ischeck: 0, todoText: '' }}
                            setDeleted={setDeleted}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default BasicTodo;