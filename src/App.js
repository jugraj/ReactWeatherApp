import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search_bar';
import WeatherList from './components/weather_list';
import WeatherBackground from './components/weather_background';
import _ from 'lodash';
import axios from 'axios';

const KEY_ID ='89f8e2eaba4777c4374bc49248b97d77';


class App extends Component {

  constructor(){
    super();
    // this.weatherLookup('Tokyo')// by Default
    this.state = {
      city:'Tokyo',
      country:'',
      weather:[]
    }
  }

weatherLookup(city){
  axios.get(`http://api.openweathermap.org/data/2.5/forecast?units=metric&q=${city}&appid=${KEY_ID}`)
  .then((response)=> {
    console.log(response.data.city)
    this.setState({
      city:city,
      country:response.data.city.country,
      weather:response.data.list
    });
  })
  .catch((error)=> {
    console.log('NO CITY LIKE THAT ' +city, error);
    this.setState({
      city:'city',
      country:'',
      weather:[]
    });
  });
}


render() {
    const wtLookup = _.debounce(city=>{this.weatherLookup(city)},1000)
    const {city,weather,country} = this.state;
    return (
      <div className="App">
        <WeatherBackground city={city} country={country}/>
        <SearchBar searchCity={wtLookup} city={city}/>
        <WeatherList city={city} country={country} weather={weather} />
      </div>
    );
  }
}

export default App;
  