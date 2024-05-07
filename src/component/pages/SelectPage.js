import BasicTodo from "../todos/BasicTodo";
import '../css/SelectPage.css'

function SelectPage() {
    return (
        <div className="s1">
            <BasicTodo className='a1'/>
            <BasicTodo className='a2'/>
        </div>
        
    );
}

export default SelectPage;