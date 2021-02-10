import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CountriesContext} from "./CountriesContext"


const useStyles = makeStyles({
  root: {
        height:"-1%",
        minWidth: "10%",
        maxWidth: "40%",
        margin: "1.5%",
        paddingLeft: "-9%"
        
        
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.2)',
  },
  title: {
    fontSize: "70%",
  },
  pos: {
    marginBottom: "2%"
      
  },
});

export default function SimpleCard({name}) {

    const [countries, setCountries] = useContext(CountriesContext)
  
  
  // console.log(countries['Global'])
  if (countries[name]!== undefined && name === 'Global') {

  var infact = countries[name].Global.infact
  var recover = countries[name].Global.recover
  var deaths = countries[name].Global.deaths
  var time = countries[name].Global.time
    
  }
  else if (countries[name]!== undefined) { 
  var infact = countries[name].infact
  var recover = countries[name].recover
  var deaths = countries[name].deaths
  var time = countries[name].time
  }
  
  
  
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
      <div style={{display:"flex",flexDirection:"row",marginTop: "0.7%",marginLeft: "1%",justifyContent:"center"}}>
    <Card className={classes.root}>
      <CardContent style={{backgroundColor: "#ADDFFF"}}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
                  <span style={{ color: "#696969",fontWeight:"bold" }} >INFECTED ({name})</span>
        </Typography>
        <Typography variant="h6" component="h3">
          {infact}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {time}
        </Typography>
        <Typography variant="body2" component="p">
          Number Of Active Cases Of
          <br />
          <span style={{color:"#FF0000",fontWeight:"bold"}}>COVID-19</span>
        </Typography>
      </CardContent>

            </Card>
            

                <Card className={classes.root}>
      <CardContent style={{backgroundColor:"#6AFB92"}}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
                  <span style={{ color: "#696969",fontWeight:"bold" }} >RECOVERED ({name})</span>
        </Typography>
        <Typography variant="h5" component="h2">
          {recover}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {time}
        </Typography>
        <Typography variant="body2" component="p">
          Number Of Recoveries From
          <br />
          <span style={{color:"#FF0000",fontWeight:"bold"}}>COVID-19</span>
        </Typography>
      </CardContent>

            </Card>
            

                <Card className={classes.root}>
      <CardContent style={{backgroundColor:"#FC6C85"}}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
                  <span style={{ color: "#696969",fontWeight:"bold" }} >DEATHS ({name})</span>
        </Typography>
        <Typography variant="h5" component="h2">
          {deaths}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {time}
        </Typography>
        <Typography variant="body2" component="p">
          Number Of Deaths Caused By
          <br />
          <span style={{color:"#FF0000",fontWeight:"bold"}}>COVID-19</span>
        </Typography>
      </CardContent>

    </Card>
        </div>
  );
}
