import"./assets/styles-JE8YjOlG.js";import{a}from"./assets/vendor-N5iQpiFS.js";const l="https://dummyjson.com",n={CATEGORIES:"/products/category-list",PRODUCTS:"/products"},r=20;a.defaults.baseURL=l;async function _(){const{data:t}=await a.get(n.CATEGORIES);return t}async function g(t=1){const s=(t-1)*r,{data:e}=await a.get(`${n.PRODUCTS}?limit=${r}&skip=${s}`);return e}const i={categoriesList:document.querySelector(".categories"),productsList:document.querySelector(".products")};function m(t){const e=["All",...t].map(c=>`
        <li class="categories__item">
            <button class="categories__btn" type="button">${c}</button>
        </li>
    `).join("");i.categoriesList.innerHTML=e;const o=document.querySelector(".categories__btn");o&&o.classList.add("categories__btn--active")}function y(t){const s=t.map(({title:e,brand:o,category:c,price:d,thumbnail:u,id:p})=>`
    <li class="products__item" data-id="${p}">
        <img class="products__image" src="${u}" alt=""/>
        <p class="products__title">${e}</p>
        <p class="products__brand"><span class="products__brand--bold">Brand: ${o||"no brand"}</span></p>
        <p class="products__category">Category: ${c}</p>
        <p class="products__price">Price: ${d}$</p>
    </li>

    `).join("");i.productsList.insertAdjacentHTML("beforeend",s)}async function L(){const t=await _();m(t);const{products:s}=await g();y(s)}document.addEventListener("DOMContentLoader",L());
//# sourceMappingURL=index.js.map
