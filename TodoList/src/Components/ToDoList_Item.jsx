import React, { useEffect } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from "../../TodoStyle";

const TodoListItem = ({id, title, done,onRemove,onToggle}) => {
  
  return (
    <View style={styles.container}>
      <Text  style={[styles.text,done ? styles.strikeText : styles.unstrikeText,]}>
      {title}
      </Text>
      <TouchableOpacity onPress={onToggle(id)}>
     {done ?
        (
          <View style={styles.completeCircle}>
            <Icon name="circledowno" size={30} color="green" />
          </View>
        ) :
         (
          <View style={styles.circle} />
        )}
      </TouchableOpacity>
    <TouchableOpacity style={styles.buttonContainer} onPress={onRemove(id)}>
    <Text style={styles.buttonText}>
      <Icon name="delete" size={30} color="#e33057" />
    </Text>
    </TouchableOpacity>
    
    </View>
  );
};
  
export default TodoListItem;