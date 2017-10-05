import React, { Component } from 'react';
// import logo rom './logo.svg';
import './App.css';
import GetData from './components/Data'
import WeatherAll from './components/Weather'
import * as firebase from 'firebase'


class App extends Component {
  constructor(){
    super();
    this.state ={
      apiData: null,
      zip: '',
      location: null,
      temp: null,
      mintemp: null,
      maxtemp: null,
      humidity: null,
      pressure: null,
      wind: null,
      weather: null,
    //  tempZip: '',
    }

 const config = {
    apiKey: "AIzaSyDC9f6grYXOP4CmbxN8SNt9-YrOMIHBujk",
    authDomain: "weather-app-cb4a0.firebaseapp.com",
    databaseURL: "https://weather-app-cb4a0.firebaseio.com",
    projectId: "weather-app-cb4a0",
    storageBucket: "weather-app-cb4a0.appspot.com",
    messagingSenderId: "566760201352"
  };
  firebase.initializeApp(config);

this.rootRef = firebase.database().ref();
this.zipRef = this.rootRef.child('zip');


    this.weather= this.weather.bind(this);
    this.getUserInput = this.getUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

//  

  
// get the json object
   weather(){
return fetch( `http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zip},us&appid=a7756c70cd2ba30c0c6164448e652627`)
     .then(res => res.json())
     .then(jsonRes => {
      console.log(jsonRes);
      this.setState({
        location:jsonRes.name,
        temp: Math.round(jsonRes.main.temp * 9/5 - 459.67),
        mintemp: Math.round(jsonRes.main.temp_min * 9/5 - 459.67),
        maxtemp: Math.round(jsonRes.main.temp_max * 9/5 - 459.67),
        humidity: jsonRes.main.humidity,
        pressure: jsonRes.main.pressure,
        wind: jsonRes.wind.speed,
        weather: jsonRes.weather[0].description,
          })
       })
    }

componentDidMount(){
  this.zipRef.on('child_added',snapshot =>{
    console.log(snapshot.val())
    const updateMessages = [...this.state.zip]
    // const snapshot1 = snapshot.val()
  })
}
 // event = props
 // getting the value from the input
      getUserInput(event){
        this.setState ({
          zip: event.target.value
        })
        console.log(event.target.value)
      }

       
      handleSubmit(event){
        event.preventDefault();
      }

      handleClick(event){
        console.log('hanlde click', event);
        this.zipRef.push().set(this.state.zip)
      }

    

// api == the weather the function 
  render() {
    return (
      <div className="App">
        <GetData 
          apiData={this.weather} 
          userInput={this.getUserInput} 
          handleSubmit={this.handleSubmit}
        
        />
        <WeatherAll 
          location={this.state.location} 
          temp={this.state.temp} 
          mintemp={this.state.mintemp} 
          maxtemp={this.state.maxtemp} 
          humidity={this.state.humidity}  
          pressure={this.state.pressure} 
          wind={this.state.wind} 
          weather={this.state.weather} 
          zip={this.state.zip} 
          handleClick = {this.handleClick}
        />

      </div>
    );
  }
}

export default App;
