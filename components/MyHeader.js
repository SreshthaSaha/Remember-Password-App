import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';

export default class MyHeader extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: "",
    }
  }

  render(){
  return(
    <Header
      centerComponent={{ text: this.props.title, style: { color: '#000000', fontSize:30,fontWeight:"bold",marginTop:10,width:500,alignSelf:'center',marginLeft: 200} }} 
      backgroundColor = "#0cfcf4"
    />
  );
}
}