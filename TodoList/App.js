import { Text, View } from 'react-native';
import { useState } from 'react';
import Header from './src/Components/Header';
import ToDo_Insert from './src/Components/ToDo_Insert';
import TodoList from './src/Components/ToDo_List';
import styles from './TodoStyle';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  
  const handleAddTodo = (todo)=>{
    setTodos([...todos,todo])
  }
  const checkDone=(done)=>{
    if(done)
    setCount(count+1);
    else{
      if(count>0)
      {
        setCount(count-1);
      }
      

    }
  }
  const onRemove = id=>e=> {
    setTodos(todos.filter(todo => todo.id !== id));
    setCount(count-1);
  };
  const onToggle =id=>e=>{
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, done: !todo.done,checkDone:checkDone(!todo.done)} : todo,
      )
    );
   
  };



  return (
    
   
  <View style={styles.card}>
  <Header/>
  <ToDo_Insert onTodoAdd={handleAddTodo}/>
  <Text style={styles.count}>{count} done of {todos.length}</Text>
  <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
 </View>
  );
}


