import React from 'react';
import Nav from './Components/Nav'
import Card from './Components/Card'
import CountriesList from './Components/CountriesList'
import Graph from './Components/Graph'
import CountriesDataApi from './Components/CountriesDataApi'
import {CountriesProvider } from './Components/CountriesContext'

import './App.css';

function App() {
  return (
    <div className="App">
     
      <Nav />

      <CountriesProvider>
      
        <CountriesDataApi />
          {/* <Card /> */}
          <CountriesList/>
          {/* <Graph /> */}
          

        
      </CountriesProvider>
      
      

    </div>
  );
}

export default App;
