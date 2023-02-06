/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
//import { faBus } from "@fortawesome/free-solid-svg-icons";


let map: google.maps.Map;
let marker2: google.maps.Marker;
let mrkAyunta: google.maps.Marker;

function initMap(): void {
  const coordAthletic = { lat: 43.276, lng: -2.837 };
  const coordFarmacia = { lat: 43.273, lng: -2.831 };
  const coordAyuntamiento = { lat: 43.274, lng: -2.832 };
  const coordEstacion = { lat: 43.273, lng: -2.835 };
  const coordCooperativa = { lat: 43.271, lng: -2.8272 };
  const coordColegio = { lat: 43.275, lng: -2.8306 };
  var puntosTrazado : { lat: number, lng: number}[]= [];
  const trazadoLezama = [
    { lat: 43.269, lng: -2.828 },
    { lat: 43.275, lng: -2.824 },
    { lat: 43.275, lng: -2.823 },
    { lat: 43.276, lng: -2.825 },
    { lat: 43.275, lng: -2.828 },
    { lat: 43.276, lng: -2.830 },
    { lat: 43.276, lng: -2.830 },
    { lat: 43.276, lng: -2.832 },
    { lat: 43.277, lng: -2.831 },
    { lat: 43.277, lng: -2.832 },
    { lat: 43.277, lng: -2.835 },
    { lat: 43.275, lng: -2.837 },
    { lat: 43.274, lng: -2.837 },
    { lat: 43.273, lng: -2.836 },
    { lat: 43.272, lng: -2.834 },
    { lat: 43.272, lng: -2.830 },
    { lat: 43.269, lng: -2.828 }
  ];
  
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: { lat: 43.273, lng: -2.832 },
    zoom: 16, 
    styles: [ 
      { 
        "featureType": "landscape.natural", 
        "stylers": [ 
          { "visibility": "off" } 
        ] 
      } 
    ] 
    //mapTypeId: 'terrain'
    //mapTypeId: 'satellite'
  });
  //---Ejemplo1---
  const marker1 = new google.maps.Marker({
    position: coordAthletic,
    //draggable:true,
    map: map,
  });
  //---Ejemplo2---
  marker2 = new google.maps.Marker({
    map,
    draggable: false,
    animation: google.maps.Animation.DROP,
    position: coordFarmacia,
  });
  marker2.addListener("click", toggleBounce);
  //---Ejemplo3---
  mrkAyunta = new google.maps.Marker({
    position: coordAyuntamiento,
    map,
    title: "Ayuntamiento de Lezama",
  });

  const infowindow = new google.maps.InfoWindow({
    content: ayuntamientoInfo(),
    maxWidth: 200
  });

  mrkAyunta.addListener("click", () => {
    infowindow.open({
      anchor: mrkAyunta,
      map,
    });
  });

   //---Ejemplo4--- Añadir agrupaciones.
   //const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const markers = locations.map((position, i) => {
    //const label = labels[i % labels.length];
    const marker = new google.maps.Marker({
      position
    });
    return marker;
  });

  // Add a marker clusterer to manage the markers.
  new MarkerClusterer({ markers, map });

  //---Ejemplo5--- Dibujar trazos
  const lezamaPath = new google.maps.Polygon({
    paths: trazadoLezama,
    geodesic: true,
    strokeColor: "#27a542",
    strokeOpacity: 1.0,
    strokeWeight: 3,
    fillColor: "#8ed19c",
    fillOpacity: 0.35
  });

  lezamaPath.setMap(map);

  //---Ejemplo6--- Marcador google fonts
  new google.maps.Marker({
    position: coordEstacion,
    map,
    label: {
      text: "\ue530",
      fontFamily: "Material Icons",
      color: "#ffffff",
      fontSize: "18px",
    },
    title: "Material Icon Font Marker",
  });

  //---Ejemplo7--- Marcador imagen
  const image =
    "img/banana_mini.gif";
  const beachMarker = new google.maps.Marker({
    position: coordCooperativa,
    map,
    icon: image,
    title: "Cooperativa Agrícola"
  });

   //---Ejemplo8--- Marcador SVG
   var iconImg = {
    path: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z", //SVG path of awesomefont marker
    fillColor: '#008489', //color of the marker
    fillOpacity: 1,
    strokeWeight: 0,
    scale: 0.09, //size of the marker, careful! this scale also affects anchor and labelOrigin
    anchor: new google.maps.Point(200,510), //position of the icon, careful! this is affected by scale
    labelOrigin: new google.maps.Point(205,190) //position of the label, careful! this is affected by scale
  }

  new google.maps.Marker({
    position: coordColegio,
    map,
    icon: iconImg,
    title: "Material Icon Font Marker",
  });

  //---Ejemplo9--- Dibujar circulos
  for (const city in citys) {
    // Add the circle for this city to the map.
    const cityCircle = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map,
      center: citys[city].center,
      radius: Math.sqrt(citys[city].population) * 10,
    });
  }

  // Create the initial InfoWindow.
  /*let infoWindow = new google.maps.InfoWindow({
    content: "Click the map to get Lat/Lng!",
    position: coordAthletic,
  });*/


  //infoWindow.open(map);

  // Configure the click listener.
  map.addListener("click", (mapsMouseEvent) => {
    // Create a new InfoWindow.
    /*infoWindow = new google.maps.InfoWindow({
      position: mapsMouseEvent.latLng,
    });*/

    //Crear marcador
    var marcadorlat = mapsMouseEvent.latLng.lat()
    var marcadorlng = mapsMouseEvent.latLng.lng();
    new google.maps.Marker({
      position: { lat: marcadorlat, lng: marcadorlng },
      map,
      icon: image,
      title: "lat: " + marcadorlat + " | lng:" + marcadorlng
    });
    
    //Guardar en array
    puntosTrazado.push({"lat": marcadorlat, "lng" : marcadorlng});
    console.log(puntosTrazado);

    //Dibujar un trazado
    const dibujarArea = new google.maps.Polyline({
      path: puntosTrazado,
      geodesic: true,
      strokeColor: "#0025cd",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });
    dibujarArea.setMap(map);
    
  });

}


const locations = [
  { lat: 43.262, lng: -2.947 },
  { lat: 43.261, lng: -2.934 },
  { lat: 43.258, lng: -2.921 },
  { lat: 43.279, lng: -2.961 },
  { lat: 43.274, lng: -2.947 },
  { lat: 43.268, lng: -2.962 },
  { lat: 43.249, lng: -2.919 },
  { lat: 43.268, lng: -2.918 },
];

const citys = {
  amorebieta: {center: { lat: 43.221, lng: -2.7341 },population: 21140},
  durango: {center: { lat: 43.170, lng: -2.6307 },population: 33789},
  losangeles: {center: { lat: 43.298, lng: -2.992 },population: 105044},
  vancouver: {center: { lat: 43.219, lng: -2.819 },population: 4520},
};


function ayuntamientoInfo() {
   const contentString =
    '<div id="content">' +
    '<h2 id="firstHeading" class="firstHeading">Ayuntamiento de Lezama</h2>' +
    '<div id="bodyContent">' +
    "<p><b>Horario de invierno: (octubre a mayo)</b></p>" +
    "L a V: 8:30 a 14:30 - J: 16:00 a 19:00<br>" +
    "<p><b>Horario de verano: (junio a septiembre)</b></p>" +
    "L a V: 8:30 a 14:00 - J: Cerrado a la tarde<br>" +
    "<p><b>Teléfono:</b> 94 455 60 07</p>" +
    "<p><b>Fax:</b> 94 455 64 57</p>" +
    "</div>" +
    "</div>";
    return contentString;
}

function toggleBounce() {
  if (marker2.getAnimation() !== null) {
    marker2.setAnimation(null);
  } else {
    marker2.setAnimation(google.maps.Animation.BOUNCE);
  }
}


declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
