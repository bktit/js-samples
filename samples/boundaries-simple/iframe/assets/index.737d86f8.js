const c=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};c();/**
* @license
* Copyright 2022 Google LLC. All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/let l,s;function f(){l=new google.maps.Map(document.getElementById("map"),{center:{lat:20.773,lng:-156.01},zoom:12,mapId:"a3efe1c035bad51b"}),s=l.getFeatureLayer("LOCALITY");const n={strokeColor:"#810FCB",strokeOpacity:1,strokeWeight:3,fillColor:"#810FCB",fillOpacity:.5};s.style=o=>{if(o.feature.placeId=="ChIJ0zQtYiWsVHkRk8lRoB1RNPo")return n}}window.initMap=f;
