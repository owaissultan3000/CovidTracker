/* eslint-disable no-use-before-define */
import React,{useContext,useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { CountriesContext } from "./CountriesContext"
import Graph from "./Graph"
import Card from './Card'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  inputRoot: {
    color: "purple",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "green"
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "red"
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "purple"
    }
  }
}));




export default function ComboBox() {
  const [countries, setCountries] = useContext(CountriesContext)
  const [name, setName] = useState("")
  const classes = useStyles();

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
  
 //style={{marginLeft:"40%",marginTop:"1.5%" }} 
    return (
      <div >
        
        {name && <Card name={name} />}


        <Autocomplete
        onChange={(event,title) => counteryNameSatter(title) }
        id="combo-box-demo"
        classes={classes}
        options={countrylist}
        getOptionLabel={(option) => option}
        style={{ width: "30%",marginLeft:"35%",marginTop:"1%"}}
        renderInput={(params) => <TextField {...params}   variant="outlined" style={{backgroundColor:"white",textColor:"white"}} />}
        />

        {name && <Graph name={name} />}
  

      </div>
  );
}

