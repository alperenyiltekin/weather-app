import React from 'react';
import './App.css';
import Wheather from './components/Wheather';
import Form from './components/Form';
import 'weather-icons/css/weather-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const key = "cabe9836dd55220e6d5f2d21d2c3187b";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false,

    };
    this.getWeatherIcon = {
      ThunderStorm: 'wi-thunderstorm',
      Drizzle: 'wi-sleet',
      Rain: 'wi-storm-showers',
      Snow: 'wi-snow',
      Atmosphere: 'wi-fog',
      Clear: 'wi-day-sunny',
      Clouds: 'wi-day-fog'
    }
  }
  calcCelsius(param) {
    let celsius = Math.floor(param - 273.15);
    return celsius;
  }
  get_WeatherIcon(icons, rangeID) {
    switch (true) {
      case rangeID >= 200 && rangeID <= 232:
        this.setState({ icon: this.getWeatherIcon.ThunderStorm });
        break;
      case rangeID >= 300 && rangeID <= 321:
        this.setState({ icon: this.getWeatherIcon.Drizzle });
        break;
      case rangeID >= 500 && rangeID <= 531:
        this.setState({ icon: this.getWeatherIcon.Rain });
        break;
      case rangeID >= 600 && rangeID <= 622:
        this.setState({ icon: this.getWeatherIcon.Snow });
        break;
      case rangeID >= 701 && rangeID <= 781:
        this.setState({ icon: this.getWeatherIcon.Atmosphere });
        break;
      case rangeID === 800:
        this.setState({ icon: this.getWeatherIcon.Clear });
        break;
      case rangeID >= 801 && rangeID <= 804:
        this.setState({ icon: this.getWeatherIcon.Clouds });
        break;
      default:
        this.setState({ icon: this.getWeatherIcon.Clouds });
    }
  }

  getWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    if (city && country) {
      const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${key}`);
      const response = await api.json();

      if (response.cod == 404) {
        window.alert("Please make sure the entered city and country name correctly")
        window.location.reload();
      }


      this.setState({
        city: `${response.name} , ${response.sys.country}`,
        celsius: this.calcCelsius(response.main.temp),
        description: response.weather[0].description,
        error: false,
        temp_max: this.calcCelsius(response.main.temp_max),
        temp_min: this.calcCelsius(response.main.temp_min),
      });

      this.get_WeatherIcon(this.getWeatherIcon, response.weather[0].id);
    } else {
      alert('some')
      this.setState({ error: true })
    }
  }
  render() {

    return (
      <div className="App">

        <Form
          loadWeather={this.getWeather}
          error={this.state.error} />
        <Wheather
          celsius={this.state.celsius}
          city={this.state.city}
          country={this.state.country}
          description={this.state.description}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          weatherIcon={this.state.icon} />
      </div>
    );
  }
}

export default App;
