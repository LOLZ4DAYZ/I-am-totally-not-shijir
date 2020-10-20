import React, {Component} from "react";
import {View, Text, TouchableOpacity, TextInput} from "react-native";

class App extends Component{
    render(){
        return(
            <View style = {{width: "100", height: "100%", backgroundColor: "#00aef9"}}>
                <Text style = {{color: "white", fontSize: 36, marginTop: 50, marginLeft: 30}}>Login</Text>

                <View>
                    <View style = {{Width: "80%", height: 60, borderColor:"White", borderWidth:2, marginLeft: 30, marginTop: 30}}>
                        <TextInput></TextInput>
                    </View>

                    <View style = {{Width: "80%", height: 60, borderColor:"White", borderWidth:2, marginLeft: 30, marginTop: 30}}>
                        <TextInput></TextInput>
                    </View>
                    <TouchableOpacity style = {{Width: "80%", height: 60, borderColor:"#00aef9", borderWidth:2, marginLeft: 30, marginTop: 30, backgroundColor:"white"}}>
                        <Text style = {{color: "00aef9", fontSize:36, textAlign: "center"}}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default App;