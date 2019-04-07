import React, { Component } from 'react';
import './App.css';
import train from './train.png';

class App extends Component {
      componentDidMount(){
        this.renderMap()
      }
      renderMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCEulUdUn5mr_K4jX2M1jfM3JT27UiKXpo&callback=initMap")
        window.initMap = this.initMap
      }
      initMap=()=> {
        var map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 18
        });
        var infoWindow = new window.google.maps.InfoWindow();
        var handleLocationError=(browserHasGeolocation, infoWindow, pos)=> {
          infoWindow.setPosition(pos);
          infoWindow.setContent(browserHasGeolocation ?
                                'Error: The Geolocation service failed.' :
                                'Error: Your browser doesn\'t support geolocation.');
          infoWindow.open(map);
        }
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
                        
            
            var marker = new window.google.maps.Marker({
               position:{lat: position.coords.latitude,
               lng: position.coords.longitude} ,
               map: map,
               title: 'My Location',
               icon: train                  
            });
              
            window.alert( 'Your Location : ' +pos.lat + ' and ' + pos.lng);
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
               handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }    
    
    render() {
    return (
        <main>
        <div id="map"></div>
        </main>
    );
  }
}

function loadScript(url){
    var index = window.document.getElementsByTagName("script")[0]
    var script = window.document.createElement("script")
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
}

export default App;

