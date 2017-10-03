import React from 'react';

export default class Map extends React.Component {
        render() {
            return (   <h3>My Google Maps Demo</h3>
                <div id="map"></div>
                <script>
                  function initMap() {
                    var uluru = {lat: -25.363, lng: 131.044};
                    var map = new google.maps.Map(document.getElementById('map'), {
                      zoom: 4,
                      center: uluru
                    });
                    var marker = new google.maps.Marker({
                      position: uluru,
                      map: map
                    });
                  }
                </script>
                <script async defer
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBNym3KECYH6cKHqfGYOz3FgvaLIhn-qak&callback=initMap">
                </script>);
            }
        }