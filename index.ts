/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import { MarkerClusterer } from "@googlemaps/markerclusterer";
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

  //---Ejemplo6--- Marcador icono
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
