import React, {Component} from "react";
import {Text, View} from "react-native";

export default class App extends Component {
    render(){
        return(
            <View style = {{backgroundColor:"#000033", height: "100%", justifyContent:"center", alignItems:"center"}}>
                <Text style = {{color:"white", fontSize: 36, fontWeight: "600"}}>Memurising</Text>
            </View>
        );
    }
}