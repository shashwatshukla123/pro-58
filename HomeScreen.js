import React, { Component } from 'react';
import {Text,View,StyleSheet,TouchableOpacity,Header,Image,} from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config';


export default class HomeScreen extends Component {
dislike(){
  var dislikePressed=db.ref('Rating/'+'/');update({
'dislkePressed':1
  })
}
likePressed(){
  var like=db.ref('Rating/'+'/');update({
'lkePressed':1
  })
}
render() {
return (
<View>
<AppHeader/>
<View>
<View style={styles.buttonsContainer}>
<TouchableOpacity
style={styles.buttons}
onPress={() => this.props.navigation.navigate('JokeScreen')}>
<Text>Read a Joke</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.buttons}
onPress={() => this.props.navigation.navigate('HeroScreen')}>
<Text>Horoscope</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.buttons}
onPress={() => this.props.navigation.navigate('WeatherScreen')}>
<Text>Weather</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.buttons}
onPress={() => this.props.navigation.navigate('NewsScreen')}>
<Text>Top News</Text>
</TouchableOpacity>
</View>
<View style={styles.ratingContainer}>
<Text style={{ textAlign: 'center', margin:5 }}>Rate us</Text>
<TouchableOpacity onPress ={this.likePressed}>
<Image
style={{ width: 50, height: 50, marginLeft: 5 }}
source={require('../assets/thumbs-up-hand-symbol.png')}/>
</TouchableOpacity>
<TouchableOpacity onPress ={this.dislikePressed}>
<Image
style={{
width: 50,
height: 50,
marginTop: -35,
marginLeft: 100,
 }}
source={require('../assets/thumbs-down-silhouette.png')}/>
 </TouchableOpacity>
 </View>
 </View>
 </View>
);
}
}

const styles = StyleSheet.create({
buttonsContainer: {
alignSelf: 'center',
marginTop: 50,
},
buttons:{
alignItems:'center',
justifyContent: 'center',
borderWidth:2,
borderRadius:15,
margin:10,
width:150,
height:40,
},
ratingContainer: {
alignSelf: 'center',
marginTop: 50,
},
});
