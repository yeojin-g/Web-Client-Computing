import React, { useState } from 'react';
import moment from "moment";
import Calendar from 'react-calendar';
import '../todos_css/Calendar.css';

function CalendarTodo() {
    const [value, onChange] = useState(new Date());

    return(
        <div className='containerC'>        
            <Calendar onChange={onChange} value={value} /> 
        </div>
    );
    
}

export default CalendarTodo;