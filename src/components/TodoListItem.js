import React from 'react';
import Class from 'classnames';
import { MdRemoveCircle,MdCheckBoxOutlineBlank,MdCheckBox } from "react-icons/md";
import "./TodoListItem.css"; 
function TodoListItem({todo,onRemove,onToggle}){
    const {text,checked,id} = todo;
    return(
        <div className="TodoListItem">
            <div className={Class('checkbox',{checked})} onClick={()=>onToggle(id)}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
            </div>
            <div className={Class('text',{checked})}>{text}</div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircle />
            </div>
        </div>
    );
}

export default TodoListItem;
