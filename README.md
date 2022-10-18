# FakeStore.shop

FakeStore somos comercio en línea con una gran cantidad de productos a comercializar. 

### Instalación

```
npm install
```

### Desarrollo

```
npm run dev
```

### Deploy

```
npm run deploy
```

### Debug

- http://localhost:5173/fakestore/

### Documentación

- Variable llamada $app donde haremos render de nuestra app.
- Elemento del DOM que será Observado.
- Constante 'API': Utilizamos la FakeAPI de Platzi.

```javascript
const $app = document.getElementById("app");
const $observe = document.getElementById("observe");
const API = "https://api.escuelajs.co/api/v1/products";
```

Función llamada 'getData' que se encarga de hacer Fetch a una API y debe de construir un elemento nuevo en el DOM.

```javascript
const getData = (api) => {
  const products = await fetch(api).then(res => res.json());
  ...
};
```

Función encargada de obtener de los Productos.

```javascript
const loadData = () => {
  getData(API);
};
```

Intersection Observer

```javascript
const intersectionObserver = new IntersectionObserver(
  (entries) => {
    // logic...
  },
  {
    rootMargin: "0px 0px 100% 0px",
  }
);

intersectionObserver.observe($observe);
```

## RETO

- [x] API fetch actualizada
- [x] Renderizado de productos
- [] Paginación con LocalStorage
- [x] Configuración IntersectionObserver API
- [x] Empaquetador Vite.js Añadido
- [x] Depliegue en GitHub Pages


### Licencia

js-challenge se lanza bajo la licencia [MIT](https://opensource.org/licenses/MIT).
