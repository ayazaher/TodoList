import React,{useState} from 'react';
import {StyleSheet, ScrollView, Text,FlatList} from 'react-native';
import TodoListItem from './ToDoList_Item';

const TodoList = ({todos,onRemove,onToggle}) => {

  return (
    
    
    <FlatList data={todos} keyExtractor={(todo) => `${todo.id}`}
      renderItem={( {item}) => { return ( <TodoListItem {...item} onRemove={onRemove} onToggle={onToggle}/>)}}/>
    
    
  );
};


export default TodoList;