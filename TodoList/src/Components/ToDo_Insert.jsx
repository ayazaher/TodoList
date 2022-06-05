import React,{useState} from 'react';
import {Button, StyleSheet, TextInput, View,TouchableOpacity,Text} from 'react-native';
import styles from '../../TodoStyle';
import Icon from 'react-native-vector-icons/Entypo';
const TodoInsert = ({onTodoAdd}) => {
  const [title,setTitle] = useState('');
  const [valid,validTitle] = useState(false);
  
  const handleAddTodo = ()=>{
    const todo = {
        id:Math.random().toString(),
        title,
        done:false
    }
    if(title&&valid){
      onTodoAdd(todo);
      setTitle('');
    }
   
}

const handleValidUser=(val)=>{
  setTitle(val);
  if(val.trim().length>=3)
  {
    validTitle(true);
  }
  else
  validTitle(false);
  
}
  return (
    <View>
     <View style={styles.inputContainer}>
     
      <TextInput
        style={styles.input}
        placeholder="Add an item!"
        placeholderTextColor={'#999'}
        value={title}
        onChangeText={handleValidUser}
      />
    <TouchableOpacity style={styles.btnContainer} onPress={handleAddTodo}>
    <Text style={styles.btnText}>
      <Icon name="add-to-list" size={50} color="lightcoral" />
    </Text>
    </TouchableOpacity>
      </View>
      {!valid?<Text style={styles.err}>Title must be 3 characters long</Text>:null}
     
     
    </View>

    
  );
};
export default TodoInsert;