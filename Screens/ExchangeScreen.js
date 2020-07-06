import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,ScrollView,Alert } from 'react-native';
import db from '../config'

export default class ExchangeScreen extends React.Component {
  constructor(){
    super();
    this.state={
      Name:'',
      Reason:''
    }
  }

  importRequest = async()=>{
    db.collection('Forms').add({
      ItemName:this.state.Name,
      ReasonForItem:this.state.Reason,
    })
    Alert.alert("Successfully Updated Request!")
    this.props.navigation.navigate('Home')    
  }
  render(){
  return (
      <View style={{alignItems:'center',marginTop:'40%'}}>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Text style={styles.title}>Request Item Here!</Text>
          <Text>Please Fill the form below</Text>
        </View>
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Item Name"}
          onChangeText={(text)=>{
            this.setState({
              Name: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Reason For Item"}
          onChangeText={(text)=>{
            this.setState({
              Reason: text
            })
          }}
        />
<TouchableOpacity style={[styles.button,{marginBottom:20, marginTop:20}]} onPress={()=>{this.importRequest()}}>
          <Text style={styles.buttonText}>Submit Request</Text>
      </TouchableOpacity>        
      </View>
      
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formTextInput:{
    width:"75%",
    height:45,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10
  },
  buttonText:{
    color:'#000000',
    fontWeight:'200',
    fontSize:20
  },
  title :{
    fontSize:30,
    fontWeight:'300',
    paddingBottom:30,
    color : '#ff3d00'
  },
});
