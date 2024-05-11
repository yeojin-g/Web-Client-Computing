import BasicTodo from "../todos/BasicTodo";
import '../pages_css/SelectPage.css'

function SelectPage() {
    return (
        <div className="s1">
            <BasicTodo className='a1'/>
            <BasicTodo className='a2'/>
            <footer/>
        </div>
        
    );
}

export default SelectPage;