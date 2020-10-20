import React, {component} from "react";
import {Text, View, Button, TouchableOpacity, Touchablehighlight, Image} from "react-native";

class App extends Component{
    render(){
        return(
            <View style = {{backgroundColor:"#00adff", alignItems: "center", width: "100%", height: "100%"}}>
                <Image source = {{uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mcri.edu.au%2Fsites%2Fdefault%2Ffiles%2Fmedia%2Fimages%2Fphoto_library%2Fresearch_images%2Fbrain_icon.png&f=1&nofb=1"}} style = {{width: 100, height: 100,marginTop: 100, marginBottom: 100}}/>
                <Text style = {{ fontSize: 44, fontWeight: "500", color: "white", letterSpacing: 2,}}>Memurising</Text>

                <View style = {{marginTop: 290, width: "100%", alignItems: "center"}}>
                    <TouchableOpacity style = {{width: "80%", backgroundColor: "white", height: 60, borderRadius: 5, marginBottom: 25,}}>
                        <Text style = {{textAlign: "center", fontSize: 36, color: "00aef9"}}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {{width: "800%", backgroundColor:"#00aef5", height: 60, borderRadius: 5, borderWidth: 1, borderColor: "white"}}>
                        <Text style = {{textAlign: "center", fontSize: 36, }}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default App;