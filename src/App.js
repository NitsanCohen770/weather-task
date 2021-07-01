import axios from 'axios';
import { useEffect } from 'react';
import GetLocationButton from './components/GetLocationButton/GetLocationButton';
import Background from './components/Background/Background';
import WeatherList from './components/WeatherList/WeatherList';
import CityName from './components/CityName/CityName';
import { useState } from 'react';

function App() {
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(success => {
      const params = {
        access_key: 'fe0df6125d30a706712397818b071aac',
        query: `${success.coords.latitude},${success.coords.longitude}`,
      };
      axios
        .get(`https://api.positionstack.com/v1/reverse`, { params })
        .then(res => {
          setCity(res.data.data[0].county);
        });
    });
  };

  const [city, setCity] = useState('New York');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const weatherParams = {
      access_key: 'ead7a56932cc1bbb3a9a6367dc384b40',
      query: city,
    };
    axios
      .get('https://api.weatherstack.com/forecast', {
        params: weatherParams,
      })
      .then(response => {
        console.log(response.data);
        setWeatherData(response.data.current);
      })
      .catch(error => {
        console.error(error);
      });
  }, [city]);

  return (
    <>
      <GetLocationButton getLocation={getLocation} />
      <CityName cityName={city} />
      <Background isDay={weatherData?.is_day} />
      <WeatherList weatherData={weatherData} />
    </>
  );
}

export default App;
