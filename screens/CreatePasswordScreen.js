import React,{Component}from 'react';
import {View,Text,TextInput,Modal,StyleSheet,TouchableOpacity,Alert,ScrollView,KeyboardAvoidingView} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';

export default class CreatePasswordScreen extends Component{
    constructor(){
        super();
        this.state ={
          websiteName:"",
          username: "",
          password:"",
          confirmPassword : ""          
        }
      }
      SavePassword = async (password,confirmPassword) => {
        if(password !== confirmPassword){
            return Alert.alert("password doesn't match\nCheck your password.")
        }else{
        db.collection("Passwords").add({
          website: this.state.websiteName,
          username: this.state.username,
          password: this.state.password,
          confirmPassword: this.state.confirmPassword          
        });
        return  Alert.alert(
            'Password saved successfully'
        );
        }
    }
    render(){
        return(
            <KeyboardAvoidingView style = {{alignItems:'center',marginTop:20}}>
                 <View style={{ flex: 0.1 }}>
                <MyHeader title="Create Passwords" navigation={this.props.navigation} />
                </View>                
                <View>
                <TextInput
                  style={styles.TextInput1}
                  placeholder="Name of Website"
                  onChangeText={(text)=>{
                    this.setState({
                        websiteName: text
                    })
                  }}
                />      
                <TextInput
                  style={styles.TextInput}
                  placeholder="Username/Email"
                  keyboardType ='email-address'
                  onChangeText={(text)=>{
                    this.setState({
                        username: text
                    })
                  }}
                />     
                <TextInput
                  style={styles.TextInput}
                  secureTextEntry = {true}
                  placeholder="password"
                  onChangeText={(text)=>{
                    this.setState({
                      password: text
                    })
                  }}
                />
                <TextInput
                  style={styles.TextInput}
                  secureTextEntry = {true}
                  placeholder="Confirm password"
                  onChangeText={(text)=>{
                    this.setState({
                      confirmPassword: text
                    })
                  }}
                />
                </View>
                <View>
                  <TouchableOpacity style={{height:30,width:90,borderWidth:1,marginTop:20,paddingTop:5,borderRadius:7,backgroundColor:'#6bffde'}}
                  onPress={()=>{this.SavePassword()}}>                
                    <Text style={{textAlign:'center',fontWeight:"bold"}}>Save</Text>
                  </TouchableOpacity>
        
                </View>
              </KeyboardAvoidingView>
        
        );
    }
}
const styles = StyleSheet.create({
    TextInput1:{
      width: 300,
      height: 40,
      borderWidth: 1.5,
      fontSize: 20,
      margin:10,
      paddingLeft:10,
      marginTop:80
      },
    TextInput:{
       width: 300,
       height: 40,
       borderWidth: 1.5,
       fontSize: 20,
       margin:10,
       paddingLeft:10,
       marginTop:10
       }
    })
