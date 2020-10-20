import React, {Component} from "react";
import {View, Text, ScrollView, TouchableOpacity} from "react-native"

class App extends Component{
    render(){
        return(
            <View style = {{width: "100%", height: "100%"}}>
                <View style = {{width: "100%", height: 100, backgroundColor: "#00aef9", flexDirection: "row", alignItems: "center"}}>
                    <Image source = {{uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cuddyfeder.com%2Fwp-content%2Fthemes%2Fcuddyfeder%2Fimg%2Fx-white.png&f=1&nofb=1"}} style = {{width: 50, height: 50}}/>
                    <Text style = {{marginLeft: 95, color: "white", fontSize: 36, fontWeight: "500"}}>Share Profile</Text>
                </View>

                <View style = {{backgroundColor: "lightgrey", width: "100%", height: "100%", alignItems: "center"}}>

                    <View style = {{backgroundColor: "#00aef9", width: "90%", height: 50, marginTop: 25, borderRadius: 15, justifyContent: "center"}}>
                        <Text style = {{textAlign: "center", color: "white", fontSize: 18}}>Share on Facebook</Text>
                    </View>

                    <View style = {{backgroundColor: "#00aef9", width: "90%", height: 50, marginTop: 25, borderRadius: 15, justifyContent: "center"}}>
                        <Text style = {{textAlign: "center", color: "white", fontSize: 18}}>Share on Instagram</Text>
                    </View>

                    <View style = {{backgroundColor: "#00aef9", width: "90%", height: 50, marginTop: 25, borderRadius: 15, justifyContent: "center"}}>
                        <Text style = {{textAlign: "center", color: "white", fontSize: 18}}>Copy Link</Text>
                    </View>
                </View>

            </View>
        );
    }
}

export default App;
