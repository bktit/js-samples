const s=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}};s();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */class c{constructor(o){this.alt=null,this.maxZoom=17,this.minZoom=0,this.name=null,this.projection=null,this.radius=6378137,this.tileSize=o}getTile(o,l,i){const e=i.createElement("div");return e.innerHTML=String(o),e.style.width=this.tileSize.width+"px",e.style.height=this.tileSize.height+"px",e.style.fontSize="10",e.style.borderStyle="solid",e.style.borderWidth="1px",e.style.borderColor="#AAAAAA",e}releaseTile(o){}}function d(){const r=new google.maps.Map(document.getElementById("map"),{zoom:10,center:{lat:41.85,lng:-87.65}}),o=new c(new google.maps.Size(256,256));r.overlayMapTypes.insertAt(0,o)}window.initMap=d;