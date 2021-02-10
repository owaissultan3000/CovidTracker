import React,{useContext} from 'react';
import { Bar } from 'react-chartjs-2';
import {CountriesContext} from "./CountriesContext"


const data = {
  
  labels: ['Infected','Recovered','Deaths'],
  datasets: [
    {
      label: 'COVID-19 ',
      fontColor: 'white',
      backgroundColor: 'rgba(255,99,132,0.7)',
      borderColor: 'rgba(255,99,132,0.1)',
      borderWidth: 1,
      data: [],
      backgroundColor: [
        '#ADDFFF',
        '#6AFB92',
        '#FC6C85'
      ]
    }
  ]
};

var options = {
  responsive: true,
  
   maintainAspectRatio: false,
   legend: {
      fontColor: "white",
   },
   scales: {
      xAxes: [{
         ticks: {
            fontColor: "white",
        },
        gridLines: {
        zeroLineColor: '#ffcc33'
        },
        gridLines: {
        color: "#FFFF33"
}
      }],
      yAxes: [{
         ticks: {
            fontColor: "white",
            beginAtZero: true
        },
        gridLines: {
        zeroLineColor: '#ffcc33'
        },
        gridLines: {
        color: "#FFFF33"
}
      }]
   }
};

export default function Graph({name}) {

  const [countries, setCountries] =useContext(CountriesContext)
    
  if (countries[name]!== undefined && name!== undefined && name === 'Global') {
        var values=[countries[name].Global.infact,countries[name].Global.recover,countries[name].Global.deaths]

  }
  else if(countries[name]!== undefined) {
    var values=[countries[name].infact,countries[name].recover,countries[name].deaths]
  }

    

    
  
  data.datasets[0].data = values
  // console.log(name)
    return (
        <div style={{marginTop:"2%", marginLeft:"25%", width:"50%", height: "300px"}}>
            <h3 style={{color: '#f5f5f5',fontWeight: 'bold'}}>COVID-19 BAR GRAPH</h3>
            <Bar
                data={data}
                width={50}
                height={100}
                options={options}
            />
        </div>
    );
}