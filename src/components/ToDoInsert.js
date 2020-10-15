import React,{useCallback, useState} from 'react';
import { AiOutlinePlus } from "react-icons/ai";
function TodoInsert({onInsert}){
    const [value,setValue] = useState('');
    function onChange(e){
        setValue(e.target.value);
    }
    const onClick = useCallback((e)=>{
        e.preventDefault();
        onInsert(value);
        setValue('');
    },[onInsert,value])
    return(
        <>
        <form>
            <input value={value} onChange={onChange} type="text" placeholder="할 일을 입력해 주세요."/>
            <button type="submit" onClick={onClick}><AiOutlinePlus/></button>
        </form>
        </>
    );
}

export default TodoInsert;