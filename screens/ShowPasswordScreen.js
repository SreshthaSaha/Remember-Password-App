import React,{Component}from 'react';
import {View,Text,FlatList,TextInput,Modal,StyleSheet,TouchableOpacity,Alert,ScrollView} from 'react-native';
import {ListItem} from 'react-native-elements'
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';

export default class ShowPasswordScreen extends Component{
    constructor(){
        super()
        this.state = {
          savedPasswords: []
        }
    }
    getSavedPasswords =()=>{
        this.requestRef = db.collection("Passwords").onSnapshot((snapshot)=>{
          var savedPasswords = snapshot.docs.map(document => document.data());
          this.setState({
            savedPasswords : savedPasswords,
          });
        })
      }
      componentDidMount(){
        this.getSavedPasswords()
      }
      keyExtractor = (item, index) => index.toString()

      renderItem = ( {item, i} ) =>{
        return (
          <ListItem
            key={i}            
            title  ={item.website}
            subtitle = {"UserName :  " +    item.username + "      Password :  " + item.password}
            titleStyle={{ color: 'black', fontWeight: 'bold' }}
            bottomDivider
          />
        )
      }
    render(){
        return(
            <View style={{flex:1}}>
            <MyHeader navigation={this.props.navigation} title="Saved Passwords"/>
            <View style={{flex:1}}>
              {
                this.state.savedPasswords.length === 0
                ?(
                  <View>
                    <Text style={{ fontSize: 20}}>List of Saved Passwords</Text>
                  </View>
                )
                :(
                  <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.savedPasswords}
                    renderItem = {this.renderItem}
                  />
                )
              }
            </View>
          </View>
        );
    }
}