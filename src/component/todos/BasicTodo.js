import '../css/BasicTodo.css'
import TodoC from './TodoC';

function BasicTodo() {
    return(
        <div className='basicTodo'>
            <div className='borders'>
                <TodoC/>
                <TodoC/>
                <TodoC/>
                <TodoC/>
                <TodoC/>
                <TodoC/>
                <TodoC/>
                <TodoC/>
            </div>
        </div>
    );
}

export default BasicTodo;