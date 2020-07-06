import React, { Component} from 'react';
import {StyleSheet, View, Text,TouchableOpacity, Alert} from 'react-native';
import { DrawerItems} from 'react-navigation-drawer'

import firebase from 'firebase';

export default class CustomSideBarMenu extends Component{
// sendEmail(){
//   var user = firebase.auth().currentUser;

// user.sendEmailVerification().then(function() {
//   Alert.alert('Verification Email Sent')
// }).catch(function(error) {
//   Alert.alert(error)
// });
// }
  render(){
    return(
      <View style={{flex:1}}>
        <View style={styles.drawerItemsContainer}>
          <DrawerItems {...this.props}/>
        </View>
        <View style={styles.logOutContainer}>
          <TouchableOpacity style={styles.logOutButton}
          onPress = {() => {}}>
            <Text>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container : {
    flex:1
  },
  drawerItemsContainer:{
    flex:0.8
  },
  logOutContainer : {
    flex:0.2,
    justifyContent:'flex-end',
    paddingBottom:30
  },
  logOutButton : {
    height:30,
    width:'100%',
    justifyContent:'center',
  },
  logOutText:{
    fontSize: 30,
    fontWeight:'bold'
  }
})