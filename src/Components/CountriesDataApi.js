import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import { CountriesContext } from "./CountriesContext"

const CountriesDataApi = () => {
                var store = []
                var Global = []
    const [global, setGlobal] = useState([]);
    // const [apidata,setApidata] = useState([])
    const [countries, setCountries] = useContext(CountriesContext)
    var data;
    var data2;
        useEffect(() => {
            async function fetchdata()
            {
                const item1 = await fetch("https://corona-api.com/countries")
                const item2 = await fetch("https://covid19.mathdro.id/api")

                data2 = await item2.json()
          
                Global = loadStore2(data2)
               

                data = await item1.json()    
                store = loadStore1(data)
            
                setCountries(store)
                
                setCountries(oldState => ({ ...oldState, Global}));
                                
            }
                    setTimeout(() => {
                    fetchdata()
                    }, 1000);
            
        

        }, [])
    
    
    
    
        if (countries !== undefined && global.confirmed !== undefined)
        {
                     
        return (

            <div></div>
        )
    }
     else { return <div></div> }

}
function loadStore1(covid) {
    var store={};
    for (var i = 0; i < 249; i++) {

                var name = covid.data[i].name
                var deaths = covid.data[i].latest_data.deaths
                var infact = covid.data[i].latest_data.confirmed
                var recover = covid.data[i].latest_data.recovered
                var time = covid.data[i].updated_at

                var coviddata =
                {
                    deaths, infact, recover, time
                }
                store[name]=coviddata
    }
    return store;
}

function loadStore2(globaldata) {
            var tempDate = new Date();
            var time = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
 
            var store2 = {}
            var name = 'Global'
            var infact = globaldata.confirmed.value;
            var recover = globaldata.recovered.value;
            var deaths = globaldata.deaths.value;
    
            var objddata = {
                deaths,infact,recover,time

    }
    store2[name] = objddata;
    return store2


}
export default CountriesDataApi
