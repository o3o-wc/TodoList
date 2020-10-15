import React from 'react';
import "./ToDoTemp.css";
import "./ToDoInsert.css";  

function TodoTemp({children}){
    return(
        <div className="ToDoTemp">
            <div className="App-Title">일정 관리</div>
            <div>{children}</div>
        </div>
    );
}

export default TodoTemp;
