/* eslint-disable no-use-before-define */
import React,{useContext,useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { CountriesContext } from "./CountriesContext"
import Graph from "./Graph"
import Card from './Card'
import "./CountriesList.css"

export default function ComboBox() {
  const [countries, setCountries] = useContext(CountriesContext)
  const [name, setName] = useState("")

  var countrylist = []
    
  for (const [key] of Object.entries(countries))
  {
    countrylist.push(`${key}` )
  }

 
  function counteryNameSatter(countryName) {
  
    setName(countryName)
    
  }
  
  if (name === null || name === undefined || name === "") {

      setName("Global")
    }
    return (
      <div className="countriesList" style={{ alignItems: "center" }}>
        
        {name && <Card name={name} />}


        <Autocomplete
          style={{paddingTop:"4%"}}
        onChange={(event,title) => counteryNameSatter(title) }
        id="combo-box-demo"
        options={countrylist}
        getOptionLabel={(option) => option}
        style={{ width: 405}}
        renderInput={(params) => <TextField {...params}   variant="outlined" style={{backgroundColor:"white",textColor:"white"}} />}
        />

        {name && <Graph name={name} />}
  

      </div>
  );
}

