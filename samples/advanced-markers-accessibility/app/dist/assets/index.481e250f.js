const a=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};a();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */function c(){const s=new google.maps.Map(document.getElementById("map"),{zoom:12,center:{lat:34.84555,lng:-111.8035},mapId:"4504f8b37365c3d0"}),o=[[{lat:34.8791806,lng:-111.8265049},"Boynton Pass"],[{lat:34.8559195,lng:-111.7988186},"Airport Mesa"],[{lat:34.832149,lng:-111.7695277},"Chapel of the Holy Cross"],[{lat:34.823736,lng:-111.8001857},"Red Rock Crossing"],[{lat:34.800326,lng:-111.7665047},"Bell Rock"]],n=new google.maps.InfoWindow;o.forEach(([l,e],t)=>{const r=new google.maps.marker.PinView({glyph:`${t+1}`}),i=new google.maps.marker.AdvancedMarkerView({position:l,map:s,title:`${t+1}. ${e}`,content:r.element});i.addListener("click",({domEvent:d,latLng:f})=>{n.close(),n.setContent(i.title),n.open(i.map,i)})})}window.initMap=c;