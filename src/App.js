import React, { useState, useEffect } from 'react';
import './App.css';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InfoBox from './components/InfoBox';
import Map from './components/Map';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';



function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});

  const allCountries = "https://disease.sh/v3/covid-19/countries";

  useEffect( () => {
    fetch('https://disease.sh/v3/covid-19/all')
    .then( response => response.json())
    .then( data => {
      setCountryInfo(data);
    })
  },[])

  useEffect( () => {
    // The code here will run once when components loads 
    //console.log('Country' + countries)
    const getCountriesData = async() => {
      await fetch(allCountries)
            .then( response => response.json())
            .then( data => {
              const countriesList = data.map( country => (
                {
                  name: country.country,   // United Stated, United Kingdom
                  value: country.countryInfo.iso2 // uk, usa, fr
                }));
                setCountries(countriesList); 
            })
            .catch( error => console.log(error))
    }
    getCountriesData();
  },[]);

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    //console.log('Yooo: ' + countryCode);
    setCountry(countryCode);

    const url = countryCode === 'worldwide' ? 
    'https://disease.sh/v3/covid-19/all' : 
    `https://disease.sh/v3/covid-19/countries/${countryCode}`

    
    await fetch(url)
          .then( response => response.json())
          .then( data => {
            setCountry(countryCode);
            setCountryInfo(data);
          })
          .catch (error => console.log(error))
  }

  //console.table('Country: ',countryInfo)



  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>Covid-19 Tracker</h1>
          <FormControl className="app__dropdown">
            <Select
              onChange={onCountryChange}
              variant="outlined"
              value={country}
            >
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {
              countries.map( (country, index) => (
                <MenuItem key={index} value={country.value}>{country.name}</MenuItem>
              ))
            }
            </Select>
          </FormControl>
        </div>
        
        <div className="app__stats">
            <InfoBox
              title="Coronavirus Cases"
              cases={countryInfo.todayCases}
              total={countryInfo.cases}
            />

            <InfoBox
              title="Recovered"
              cases={countryInfo.todayRecovered}
              total={countryInfo.recovered}
            />

            <InfoBox
              title="Deaths"
              cases={countryInfo.todayDeaths}
              total={countryInfo.deaths}
            />
        </div>
        <Map/>
      </div>

      <Card className="app__right">
        <CardContent>
            <h3>Live Cases by Country</h3>
        </CardContent>
    </Card>

    </div>
  );
}

export default App;
