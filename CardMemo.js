import React, {Component} from 'react'
import {View, Text , Image, TouchableOpacity} from 'react-native'
import Timer from './timer'
class App extends Component{

  state = {
    randomNumbers: []
  }

  generateRandomNumbers = ()=>{

    const randomWordsArray = [];

    let numbers = ["AS", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "10S", "JS", "QS", "KS", "AH", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "10H", "JH", "QH", "KH", "AC", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "JC", "QC", "KC", "AD", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "10D", "jC", "QD", "KD"];
    for(let i=0; i<52; i++){
      let number =Math.floor(Math.random() * randomWordsArray.length)
      numbers.push(randomWordsArray[number])
    }
    this.setState({randomNumbers: numbers.join(" ")}); 
  }


  
  render(){
    return(
    <View>
    <TouchableOpacity onPress = {this.generateRandomNumbers}>
      <View style ={{backgroundColor: "#70ff4a"}}>
        <Text style = {{textAlign: "center", margin: 40, color: "white", fontSize: 40, fontWeight: "400"}}>Cards</Text>
      </View>
      </TouchableOpacity>

      <View style ={{flexDirection: "row", justifyContent: "space-around", height: 50, backgroundColor: "lightgrey", alignItems: "center"}}>
        <View>
          <TouchableOpacity>
            <View style = {{borderWidth: 2, borderColor: "black"}}><Text style = {{fontSize: 18, marginTop: 10, marginBottom: 10, marginRight: 20, marginLeft: 20}}>Back</Text></View>
          </TouchableOpacity>
        </View>

        <View>
          <Timer/>
        </View>
       <View> 
          <TouchableOpacity>
            <View style = {{borderWidth: 2, borderColor: "black"}}><Text style = {{fontSize: 18, marginTop: 10, marginBottom: 10, marginRight: 20, marginLeft: 20}}>Recall</Text></View>
          </TouchableOpacity>
        </View>
        
      </View>

      <View style = {{margin:20}}>
        <Text style = {{fontSize: 24, letterSpacing: 3}}>{this.state.randomNumbers}</Text>
      </View>
        <View style = {{backgroundColor: "#70ff4a", height: 80, marginTop: 83, flexDirection: "row", justifyContent:"space-around"}}>

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