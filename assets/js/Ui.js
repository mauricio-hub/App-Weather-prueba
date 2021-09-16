export class UI {
    constructor() {
      this.location = document.getElementById("location");
      this.desc = document.querySelector("#description");
    }
  
    render(datos) { 
    
    
      if (datos.id === 3688689) {
        const {name,main:{temp}} = datos;
        const {icon} = datos.weather[0]
        const centigrados = parseInt(temp - 273.15) ;
        const LocationBogota = document.querySelector('#loaction-bogota');
        const descriptionCO  = document.querySelector('#description-CO')
        const tempBogota = document.querySelector('#temp-BO') 

        LocationBogota.textContent = datos.name;
        descriptionCO.textContent = datos.weather[0]['main']
        tempBogota.textContent = centigrados + ' °C'


        const iconboxbogota = document.querySelector('#icon-box-bogota');
        const div = document.createElement('div');

        div.innerHTML = ` <img src="http://openweathermap.org/img/wn/${icon}@2x.png" class="icon-weather-bogota">`;
        iconboxbogota.appendChild(div)
      }


       //Lyon
      if (datos.id === 2996943  ) {

        const {name,main:{humidity,temp},wind:{speed}} = datos;
        const {icon} = datos.weather[0]
        
      
        const centigrados = parseInt(temp - 273.15) ;
       
        const LocationLyon = document.querySelector('#location-Lyon');
        const tempLyon = document.querySelector('#temp-lyon')
        const humidityLyon = document.querySelector('#humidity-Lyon') 
        const windLyon  = document.querySelector('#wind_Lyon')
        
        const iconbox = document.querySelector('#icon-box');
        const div = document.createElement('div');
     
        tempLyon.textContent = centigrados  + '°C';
        humidityLyon.textContent = 'humidity '+ humidity + ' %'
        windLyon.textContent = speed + 'Km/h'
        
        div.innerHTML = ` <img src="http://openweathermap.org/img/wn/${icon}@2x.png" id="">`;

        iconbox.appendChild(div)

      

      }
       //Paris
      if (datos.id === 2988507 ) {
        const {name,main:{humidity,temp},wind:{speed}} = datos;
      
        const {icon} = datos.weather[0]
        
      
        const centigrados = parseInt(temp - 273.15) ;
       
        const LocationParis = document.querySelector('#location-paris');
        const tempParis = document.querySelector('#temp-paris')
        const humidityParis = document.querySelector('#humidity-paris') 
        const windParis  = document.querySelector('#wind-paris')

        const iconboxparis = document.querySelector('#icon-box-paris');
        const div = document.createElement('div');
       
        LocationParis.textContent = name
        tempParis.textContent = centigrados  + '°C';
        humidityParis.textContent ='humidity '+ humidity + ' %'
        windParis.textContent = speed + '  Km/h'

        div.innerHTML = ` <img src="http://openweathermap.org/img/wn/${icon}@2x.png" id="">`;
        iconboxparis.appendChild(div)
      
      }
    
  
      
    }


  }
