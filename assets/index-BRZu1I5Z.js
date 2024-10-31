(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();async function a(){let s="";s=(await(await fetch("https://fakestoreapi.com/products")).json()).map(r=>`<div class="product">
            <h1>${r.title}</h1>
            <img src=${r.image} alt="">
            <div class="description">
            ${r.description}
            </div>
            <div class="price">${r.price}$</div>
            <div class="category">${r.category}</div>
            <div class="rating">
              <div class="rate">reate: ${r.rating.rate}</div>
              <div class="count">count: ${r.rating.count}</div>
            </div>
            <a href="#" class="btn">buy now</a>
          </div>`),document.querySelector("#products").insertAdjacentHTML("afterbegin",s.join(""))}a();
