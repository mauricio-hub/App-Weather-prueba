export class City {

  constructor(city,key) {
    this.city = city;
    this.key =key ;
  }



/* 
    getData(){
   
   
    const  xhttp = new XMLHttpRequest();
    
    xhttp.open('GET',`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}` ,true )
    xhttp.send();
  
    xhttp.onreadystatechange= function(){
      if (this.readyState === 4 && this.status === 200) {
        const datos = JSON.parse(this.responseText)
        return datos
     
      }
    } 
  } */
    

 
}
