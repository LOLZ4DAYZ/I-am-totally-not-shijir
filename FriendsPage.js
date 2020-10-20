import React, {Component} from 'react'
import {View, Text , Image, TouchableOpacity, button, Button, ScrollView} from 'react-native'

class Friend extends Component{
    render(){
        return(
            <View style = {{flexDirection:"row", alignItems: "center", justifyContent: "space-around", padding: 10, borderBottomWidth: 1, borderColor: "lightgrey   "}}>
                <Image source = {{uri: "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"}}
                style = {{height: 60, width: 60, borderRadius: "50%", borderWidth: 2, borderColor: "//#endregion"}} />
                <View>
                    <Text style = {{ fontSize: 18,fontWeight: "500" }}> Monkey D. Luffy</Text>
                </View>

                <Button title = "Follow" color = "6563ff" onPress = {() => Alert ("You started following Monkey D. Luffy")} > </Button>

            </View>
        )
    }
}

class App extends Component{
  render(){
    return(
    <View>
    <TouchableOpacity>
      <View style ={{backgroundColor: "#6563ff"}}>
        <Text style = {{textAlign: "center", margin: 40, color: "white", fontSize: 40, fontWeight: "400"}}>Friends</Text>



      </View>
      </TouchableOpacity>

        <ScrollView>
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
        </ScrollView>

        <View style = {{backgroundColor: "#6563ff", height: 80, width: "100%", flexDirection: "row", justifyContent:"space-around", position: "absolute", top: 610,}}>

        <TouchableOpacity>
          <View>
          <Image source = {{uri: "https://img.icons8.com/pastel-glyph/2x/home.png"}} style = {{height:50, width: 50}}/>
          </View>
          </TouchableOpacity>

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