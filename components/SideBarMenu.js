import React, {Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';

import firebase from 'firebase';

export default class SideBarMenu extends Component{
    render(){
        return(
            <View>
            <DrawerItems {...this.props}/>

            <View style={{flex:1,justifyContent:'flex-end'}}>
                <TouchableOpacity style={{justifyContent:'center',padding:10,height:30,width:'100%'}}
                onPress = {()=>{
                    this.props.navigation.navigate('WelcomeScreen')
                    firebase.auth().signOut()
                }}
                >
                    <Text>LogOut</Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
}
