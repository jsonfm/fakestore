import Cart from "./templates/card.js";

const $app = document.getElementById('app');
const $observe = document.getElementById('observe');
const API = 'https://api.escuelajs.co/api/v1/products';


localStorage["pagination"] = 5;
let firstIteration = true;


const getData = async (api)=> {
  try {
    const products = await fetch(api).then(res => res.json());
    
    if(products.length){
      const output = products.map(product => Cart(product));
      let newItem = document.createElement("section");
      newItem.classList.add("Items");
      newItem.innerHTML = output.join("");
      $observe.appendChild(newItem);
    } else {
      intersectionObserver.unobserve($observe);
      let message = document.createElement("p");
      message.setAttribute("lang", "es");
      message.textContent = "Todos los productos Obtenidos";
      $observe.appendChild(message);
    }

  } catch (err) {
    console.error(err);
  }

}

const loadData = async() => {
  const currentPagination = localStorage.getItem("pagination");
  if(firstIteration){
    firstIteration = false;
  }else {
    localStorage["pagination"] = parseInt(currentPagination) + 10;
  }
  await getData(`${API}/?offset=${currentPagination}&limit=10`);
}

const intersectionObserver = new IntersectionObserver(entries => {
    if(entries[0].isIntersecting){
      loadData();
    }
  },
  {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.5,
  }
);

intersectionObserver.observe($observe);
