const a=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};a();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */function s(){const o=new google.maps.Map(document.getElementById("map"),{center:{lat:37.424563902650114,lng:-122.09512859577026},zoom:17,mapId:"4504f8b37365c3d0"}),r=new google.maps.marker.AdvancedMarkerView({map:o,position:{lat:37.4239163,lng:-122.094},title:"This marker is visible at zoom level 15 and higher."}),n=new google.maps.marker.AdvancedMarkerView({map:o,position:{lat:37.4245,lng:-122.096},title:"This marker is visible at zoom level 16 and higher."}),i=new google.maps.marker.AdvancedMarkerView({map:o,position:{lat:37.4249,lng:-122.095},title:"This marker is visible at zoom level 17 and higher."}),e=new google.maps.marker.AdvancedMarkerView({map:o,position:{lat:37.425,lng:-122.0955},title:"This marker is visible at zoom level 18 and higher."});o.addListener("zoom_changed",()=>{console.log(o.getZoom()),r.map=o.getZoom()>14?o:null,n.map=o.getZoom()>15?o:null,i.map=o.getZoom()>16?o:null,e.map=o.getZoom()>17?o:null})}window.initMap=s;