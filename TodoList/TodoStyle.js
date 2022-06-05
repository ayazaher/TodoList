import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      padding:20,
      paddingLeft: 0,
      borderBottomColor: '#bbb',
      borderBottomWidth: 1,
      fontSize: 24,
      marginRight: 70,
     
     
     
    },
    button: {
      marginRight: 20,
    },
    card: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10,
        marginLeft: 10,
        marginRight: 10,
      },
      err:{
        
        color:'red'
      },
      btnContainer:{
        backgroundColor:'lightgray',
        width:'25%',
        height:50,
        marginTop:20,
        justifyContent:'center',
      },
      btnText:{
        color:'white',
        alignSelf:'center',
        fontSize:18,
        fontWeight:'bold',
        fontStyle:"italic",
        marginBottom:10
      },
      count:{
        textAlign:'center',
         marginTop:20,
       
       },
       container: {
        flex: 1,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
       
      },
      text: {
        flex: 5,
        fontWeight: '500',
        fontSize: 18,
        marginVertical: 20,
        marginHorizontal: 5,
        width: 100,
      },
      circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: 'blue',
        borderWidth: 2,
        marginHorizontal: 10,
       
      },
      completeCircle: {
          marginHorizontal: 10,
        },
        strikeText: {
          color: '#bbb',
          textDecorationLine: 'line-through',
        },
        unstrikeText: {
          color: '#29323c',
        },
        buttonContainer: {
          marginVertical: 10,
          marginHorizontal: 10,
        },
      
  });
  export default styles;