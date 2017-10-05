import React from 'react';

function WeatherAll(props){
    return(
     <div className="weather">
        <div className="main">
            <div className="location">
                Location: {props.location}
            </div>
            <div className="current-w">
                Temperature: {props.temp}
            </div>
            <div className="min-w">
                Min: {props.mintemp}
            </div>
            <div className="max-w">
                Max: {props.maxtemp}
            </div>
            <div className="humidity">
               Humidity: {props.humidity}%
            </div>
            <div className="pressure">
                Pressure: {props.pressure}
            </div>
            <div className="wind">
               Wind: {props.wind}
            </div>
            <div className="weather">
               Weather: {props.weather}
            </div>
            <div className="zip">
                Zip: {props.zip}
            </div>
            </div>
            <button onClick={props.handleClick}>Save</button>
        </div>
        );
}

export default WeatherAll;
