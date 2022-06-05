import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    View,
  } from "react-native";
   
import Icon from 'react-native-vector-icons/AntDesign';
import styles from '../../';


export default function Header(){
    return (
        <View >
            <StatusBar barStyle = "dark-content"  backgroundColor = "white" />
                <View style={styles.header}>
                    
                <Icon name="carryout" size={30} color="white" style={styles.icon} />
                <Text  style={styles.text}  >ToDo List</Text>
                <Icon name="user" size={30} color="white" style={styles.icon2} />
                </View>
              
               
                
        </View>)
      
}
