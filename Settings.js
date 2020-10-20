import React, {Component} from "react";
import {View, Text, ScrollView, TouchableOpacity} from "react-native"

class App extends Component{
    render(){
        return(
            <View style = {{width: "100%", height: "100%"}}>
                <View style = {{width: "100%", height: 100, backgroundColor: "#00aef9", flexDirection: "row", alignItems: "center"}}>
                    <Image source = {{uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cuddyfeder.com%2Fwp-content%2Fthemes%2Fcuddyfeder%2Fimg%2Fx-white.png&f=1&nofb=1"}} style = {{width: 50, height: 50}}/>
                    <Text style = {{marginLeft: 95, color: "white", fontSize: 36, fontWeight: "500"}}>Settings</Text>
                </View>

                <View style = {{backgroundColor: "lightgrey", width: "100%", height: "100%"}}>
                    <View style = {{marginTop: 25}}>
                        <View style = {{width: "100%", height: 50, backgroundColor: "white", justifyContent: "center", paddingLeft: 25, borderColor: "darkgrey", borderWidth: 0.5}}>
                            <Text style = {{fontSize: 18, }}>Notifications</Text>
                        </View>

                        <View style = {{width: "100%", height: 50, backgroundColor: "white", justifyContent: "center", paddingLeft: 25, borderColor: "darkgrey", borderWidth: 0.5}}>
                            <Text style = {{fontSize: 18, }}>Social</Text>
                        </View>

                        <View style = {{width: "100%", height: 50, backgroundColor: "white", justifyContent: "center", paddingLeft: 25, borderColor: "darkgrey", borderWidth: 0.5}}>
                            <Text style = {{fontSize: 18, }}>Account</Text>
                        </View>

                        <View style = {{width: "100%", height: 50, backgroundColor: "white", justifyContent: "center", paddingLeft: 25, borderColor: "darkgrey", borderWidth: 0.5}}>
                            <Text style = {{fontSize: 18, }}>Profile</Text>
                        </View>

                        <View style = {{width: "100%", height: 50, backgroundColor: "white", justifyContent: "center", paddingLeft: 25, borderColor: "darkgrey", borderWidth: 0.5}}>
                            <Text style = {{fontSize: 18, }}>Help Center</Text>
                        </View>

                        <View style = {{width: "100%", height: 50, backgroundColor: "white", justifyContent: "center", paddingLeft: 25, borderColor: "darkgrey", borderWidth: 0.5, alignItems: "center", marginTop: 50}}>
                            <Text style = {{fontSize: 18, color: "red" }}>Log Out</Text>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}

export default App;
