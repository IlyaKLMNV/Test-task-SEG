var b=Object.defineProperty;var p=(e,t,s)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var a=(e,t,s)=>(p(e,typeof t!="symbol"?t+"":t,s),s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const d=document.querySelector(".number-text_years"),u=document.querySelector(".number-text_projects"),m=document.querySelector(".number-text_employeers"),f=document.querySelector("sup.counts");d.classList.remove("counts--if-transition-does-not-work");u.classList.remove("counts--if-transition-does-not-work");m.classList.remove("counts--if-transition-does-not-work");f.classList.remove("counts--if-transition-does-not-work");const g=new IntersectionObserver(e=>{e.forEach(t=>{if(t.isIntersecting){d.classList.add("counts--open"),u.classList.add("counts--open"),m.classList.add("counts--open"),f.classList.add("counts--open");return}d.classList.remove("counts--open"),u.classList.remove("counts--open"),m.classList.remove("counts--open"),f.classList.remove("counts--open")})});g.observe(document.querySelector(".number-text"));const h=document.querySelector(".motivation_columns_tower"),v=document.querySelector(".motivation_columns_super"),y=document.querySelector(".motivation_columns_location");h.classList.remove("motivation_columns--if-transition-does-not-work");v.classList.remove("motivation_columns--if-transition-does-not-work");y.classList.remove("motivation_columns--if-transition-does-not-work");const W=new IntersectionObserver(e=>{e.forEach(t=>{if(t.isIntersecting){h.classList.add("motivation_columns--open"),v.classList.add("motivation_columns--open"),y.classList.add("motivation_columns--open");return}h.classList.remove("motivation_columns--open"),v.classList.remove("motivation_columns--open"),y.classList.remove("motivation_columns--open")})});W.observe(document.querySelector(".motivation_columns"));const L=document.querySelector("#footerForm");L.addEventListener("submit",e=>E(e));function E(e,t){e.preventDefault(),k()}function k(e){let t=L.querySelectorAll(".form-item--required");for(let s=0;s<t.length;s++){const r=t[s].querySelector(".Y-required"),o=t[s].querySelector(".placeholder_bottom-text");r.getAttribute("type")==="checkbox"?r.checked===!1?i(r,o):c(r,o):r.value===""?i(r,o):c(r,o)}}function x(e,t){e.preventDefault(),F()}function F(e){let t=q.querySelectorAll(".form-item--required");for(let s=0;s<t.length;s++){const r=t[s].querySelector(".Y-required"),o=t[s].querySelector(".placeholder_bottom-text");r.getAttribute("type")==="checkbox"?r.checked===!1?i(r,o):c(r,o):r.value===""?i(r,o):c(r,o)}}function i(e,t){e==null||e.parentElement.classList.add("_error"),e==null||e.classList.add("_error"),t==null||t.classList.add("_error")}function c(e,t){e==null||e.parentElement.classList.remove("_error"),e==null||e.classList.remove("_error"),t==null||t.classList.remove("_error")}const A=document.querySelector(".more-button"),O=document.querySelector(".favor-window_container__x"),w=document.querySelector(".favor-window"),C=document.querySelector(".favor-window_empty-container"),I=()=>{w.classList.add("open"),console.log("Сработала showFavorWindow")},_=()=>{w.classList.remove("open"),console.log("Сработала closeFavorWindow")};A.addEventListener("click",I);O.addEventListener("click",_);C.addEventListener("click",_);const q=document.querySelector("#favorWindowForm");q.addEventListener("submit",e=>x(e));class S{constructor(t){a(this,"turnLeft",()=>{if(this.counter===0){this.containerWithCards.style.transform=`translateX(-${this.cardWidth*(this.cards.length-1)}px)`,this.counter=this.cards.length-1;return}else{this.counter=this.counter-1,this.containerWithCards.style.transform=`translateX(-${this.cardWidth*this.counter}px)`;return}});a(this,"turnRight",()=>{if(this.counter===this.cards.length-1){this.counter=0,this.containerWithCards.style.transform=`translateX(-${this.cardWidth*this.counter}px)`;return}else{this.counter=this.counter+1,this.containerWithCards.style.transform=`translateX(-${this.cardWidth*this.counter}px)`;return}});this.element=t,this.containerWithCards=this.element.querySelector(".cards"),this.cards=this.element.querySelectorAll(".card"),this.leftArrow=this.element.querySelector(".buttons-shevron__left"),this.rightArrow=this.element.querySelector(".buttons-shevron__right"),this.cardWidth=this.element.querySelector(".card").offsetWidth,this.counter=0}init(){this.leftArrow.addEventListener("click",this.turnLeft),this.rightArrow.addEventListener("click",this.turnRight)}}const R=new S(document.getElementById("sliderRealizedObjects"));R.init();const P=new S(document.getElementById("sliderPartners"));P.init();
