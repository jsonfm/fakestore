(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const d=r=>{const{images:n,title:t,price:s}=r;return`
        <div class="Card">
            <img
                src="${n[0]}"
                alt="${t}"
            >
            <h2>
                ${t}
                <small>$ ${s}</small>
            </h2>
        </div>
    `};document.getElementById("app");const i=document.getElementById("observe"),u="https://api.escuelajs.co/api/v1/products";localStorage.pagination=5;let l=!0;const p=async r=>{try{const n=await fetch(r).then(t=>t.json());if(n.length){const t=n.map(e=>d(e));let s=document.createElement("section");s.classList.add("Items"),s.innerHTML=t.join(""),i.appendChild(s)}else{a.unobserve(i);let t=document.createElement("p");t.setAttribute("lang","es"),t.textContent="Todos los productos Obtenidos",i.appendChild(t)}}catch(n){console.error(n)}},f=async()=>{const r=localStorage.getItem("pagination");l?l=!1:localStorage.pagination=parseInt(r)+10,await p(`${u}/?offset=${r}&limit=10`)},a=new IntersectionObserver(r=>{r[0].isIntersecting&&f()},{root:null,rootMargin:"0px 0px 0px 0px",threshold:.5});a.observe(i);
