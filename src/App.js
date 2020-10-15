import React,{useState,useRef,useCallback} from 'react';
import TodoInsert from './components/ToDoInsert';
import TodoTemp from './components/ToDoTemp';
import TodoList from './components/ToDoList';


const App = () =>{
  const [todos , setToDos] = useState([
    {
      id : 1,
      text : "할일 목록 1",
      checked : false  
  },
  {
    id : 2,
    text : "할일 목록 2",
    checked : true  
  }
])

const nextID = useRef(3);
const onInsert = useCallback(text=>{
  const next ={
    id : nextID.current,
    text : text,
    checked : false
  }
  // const abdObj = todos.concat(next);
  // console.log(abdObj)
  setToDos(todos.concat(next));
  nextID.current+=1;
},[todos]);

  const onRemove = useCallback( id => {
    setToDos(todos.filter(data => data.id !== id))
  },[todos]);

  const onToggle = useCallback( id => {
    setToDos(todos.map(data =>{
      return data.id === id ? {...data,checked : !data.checked} : data
    }))
  },[todos]);

  return(
    <>
      <TodoTemp>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemp>
    </>
  );
};
export default App;
