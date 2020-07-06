import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';

import db from '../config';
import firebase from 'firebase';

export default class SettingScreen extends Component{
    constructor(){
        super();
        this.state={
            emailId:'',
            first_name:'',
            last_name:'',
            address:'',
            contact:'',
            docId:''
        }
    }
    getUserDetails = ()=>{
        var email = firebase.auth().currentUser.email;
        db.collection("users").where('emailId','==',email).get()
        .then(snapshot=>{
            snapshot.forEach(doc=>{
                var data = doc.data()
                this.setState({
                    docId:doc.id(),
                    emailId:data.emailId,
                    first_name:data.FirstName,
                    last_name:data.LastName,
                    address:data.address,
                    contact:data.Phone,                    
                })
            })
        })
    }
    updateUserDetails=()=>{
        db.collection("users").doc(this.state.docId)
        .update({
          "FirstName": this.state.first_name,
          "LastName" : this.state.last_name,
          "Address"   : this.state.address,
          "Contact"   : this.state.contact,
        })    
        Alert.alert("Profile Updated Successfully")
    
      }
      componentDidMount(){
          this.getUserDetails();
      }
    render(){
        return(
          <View>
            <View>
                <TextInput
                  style={styles.formTextInput}
                  placeholder ={"First Name"}
                  maxLength ={8}
                  onChangeText={(text)=>{
                    this.setState({
                      first_name: text
                    })
                  }}
                  value ={this.state.first_name}
                />
                <TextInput
                  style={styles.formTextInput}
                  placeholder ={"Last Name"}
                  maxLength ={8}
                  onChangeText={(text)=>{
                    this.setState({
                      last_name: text
                    })
                  }}
                    value ={this.state.last_name}
                />
                <TextInput
                  style={styles.formTextInput}
                  placeholder ={"Contact"}
                  maxLength ={10}
                  keyboardType={'numeric'}
                  onChangeText={(text)=>{
                    this.setState({
                      contact: text
                    })
                  }}
                    value ={this.state.contact}
                />
                <TextInput
                  style={styles.formTextInput}
                  placeholder ={"Address"}
                  multiline = {true}
                  onChangeText={(text)=>{
                    this.setState({
                      address: text
                    })
                  }}
                    value ={this.state.address}
                />
                <TextInput
                  style={styles.formTextInput}
                  placeholder ={"Email Id"}
                //   keyboardType={'email-address'}
                  onChangeText={(text)=>{
                    this.setState({
                      email_id: text
                    })
                  }}
                    value ={this.state.emailId}
                />
                <TouchableOpacity style={{alignSelf:'center'}}
                  onPress={()=>{
                    this.updateUserDetails()
                  }}>
                  <Text>Save</Text>
                </TouchableOpacity>
            </View>
          </View>
        )
      }        
}
const styles = StyleSheet.create({
    formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10,
      },
})