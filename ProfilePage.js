import React, {Component} from 'react'
import {View, Text , Image, TouchableOpacity, button, Button, ScrollView} from 'react-native'



class App extends Component{
  render(){
    return(
    <View>
        <View style = {{backgroundColor: "#6563ff", width: "100%", height: 250, justifyContent: "center", alignItems: "center"}}>
            <Image source = {{uri:"https://cdn3.iconfinder.com/data/icons/mixed-communication-and-ui-pack-1/48/general_pack_NEW_glyph_profile-512.png",}} style = {{ height: 100, width: 100}}/>
            <Text style = {{fontSize: 24, fontWeight: "600"}}>Monkey D. Luffy</Text>
            <Text style = {{fontSize: 18, fontWeight: "400"}}>Rank: Memory God</Text>
        </View>

        <View style = {{padding: 20}}> 
            <Text style = {{textAlign: "center", marginBottom: 50}}>Best Scores</Text>
            <Text>Cards: 37.37 seconds</Text>
            <Text>Names: 30 names</Text>
            <Text>Binary: 1200 digits</Text>
            <Text>Numbers: 550 digits</Text>
            <Text>Images: 322 images</Text>
            <Text>Words: 128 words</Text>
        </View>

        <View style = {{backgroundColor: "#6563ff", height: 80, width: "100%", flexDirection: "row", justifyContent:"space-around", position: "absolute", top: 610,}}>

          <View>
          <Image source = {{uri: "https://img.icons8.com/pastel-glyph/2x/home.png"}} style = {{height:50, width: 50}}/>
          </View>

          <TouchableOpacity>
          <View>
              <Image source = {{uri: "https://www.freeiconspng.com/uploads/circle-of-friends-icon-png-1.png"}} style = {{height:50, width: 50}}/>
          </View>
          </TouchableOpacity>

          <TouchableOpacity>
          <View>
              <Image source = {{uri: "https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/19339625881548233621-512.png"}} style = {{height:50, width: 50}}/>
          </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default App;