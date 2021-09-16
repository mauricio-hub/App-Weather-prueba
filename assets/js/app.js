import {City} from './City.js'
import {UI} from './Ui.js'


const key =  "c2e55b8bbf7d1fbe1ce96d24319d6c43"
const weatherCO = new City("bogota",key);
const weatherPR = new City("paris",key);
const weatherLY = new City('lyon',key)


const ui = new UI();

function getData(location){
  const {city,key} = location
 
  const  xhttp = new XMLHttpRequest();
  
  xhttp.open('GET',`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}` ,true )
  xhttp.send();

  xhttp.onreadystatechange= function(){
    if (this.readyState === 4 && this.status === 200) {
      const datos = JSON.parse(this.responseText)
      ui.render(datos) 
   
    }
  } 
} 

function forecastBogota() {
 const  xhttp = new XMLHttpRequest();

   const url  = `http://api.openweathermap.org/data/2.5/forecast?q=${weatherCO.city}&appid=${key}&cnt=24`


  
 xhttp.open('GET',url ,true )
  xhttp.send();
  xhttp.onreadystatechange= function(){
    if (this.readyState === 4 && this.status === 200) {
      const datos = JSON.parse(this.responseText)
      
     /*    console.log(datos.list)  */
   
    }
  } 

}



getData( weatherCO)
getData(weatherPR)
getData(weatherLY) 


