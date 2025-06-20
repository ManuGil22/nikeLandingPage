# NikeLandingPage

Este proyecto es una landing page de Nike, desarrollado como trabajo especial para la cursada del Seminario de Angular de TUDAI 2025.

**Estudiante:** Manuel Gil  
**DNI:** 39555887  
**Email:** manuelgilmoltrasio@gmail.com  
**Sede:** Tandil

---

## 🔗 Deploy

El proyecto puede verse online en los siguientes enlaces:

- 💻 **StackBlitz:**  
  [https://stackblitz.com/edit/github-ehnetkut](https://stackblitz.com/edit/github-ehnetkut)

- 🌐 **GitHub Pages:**  
  [https://manugil22.github.io/nikeLandingPage/featured](https://manugil22.github.io/nikeLandingPage/featured)

---

## 🛠️ API

Se utilizaron dos APIs alojadas en [mockapi.io](https://mockapi.io), debido a las limitaciones del plan gratuito.

### 📦 Shoes

Para el recurso de zapatillas se utilizó la siguiente [URL base](https://68378bfe2c55e01d184a2365.mockapi.io/api): 

#### `/Shoes`
El endpoint `/shoes` almacena una estructura como la siguiente:

```json
[
  {
    "id": "1",
    "name": "Kobe IX Elite High Protro",
    "category": "men",
    "img": "https://nikearprod.vtexassets.com/arquivos/ids/1368763-1200-1200?width=1200&height=1200&aspect=true"
  }
]
```

Este endpoint se utiliza para mostrar los listados con detalles generales en las categorias `featured`, `men`, `women`, `kids`.

#### `/Shoe`
El endpoint `/shoe` almacena una estructura como la siguiente:

```json
[
  {
    "id": "1",
    "shoeId": 1,
    "name": "Kobe IX Elite High Protro",
    "price": 439999,
    "category": "men",
    "imgs": [
      "https://nikearprod.vtexassets.com/arquivos/ids/1368763-1200-1200?width=1200&height=1200&aspect=true",
      "https://nikearprod.vtexassets.com/arquivos/ids/1100213-1200-1200?width=1200&height=1200&aspect=true"
    ],
    "colors": ["black","white"],
    "qty": [10,15],
    "sizes": [[40,41,42,43],[40,42,43,44,45]]
  }
]
```

Este endpoint se utiliza para mostrar el detalle de cada producto seleccionado.

### 📦 Purchase

Para el recurso de zapatillas se utilizó la siguiente [URL base](https://685574de6a6ef0ed66328dbd.mockapi.io/): 

El endpoint `/Purchase` almacena una estructura como la siguiente:


```json
[
  {
    "createdAt": "2025-06-20T09:37:00.819Z",
    "name": "Manuel",
    "surname": "Gil",
    "address": "14 de Julio 473 3B",
    "phone": "2235951241",
    "identificationNumber": "39555774",
    "department": "Tandil",
    "city": "Tandil",
    "shoes": [
      {
        "shoeId": 5,
        "qty": 1,
        "size": 41,
        "color": "orange",
        "img": "https://nikearprod.vtexassets.com/arquivos/ids/1055486-1200-1200?width=1200&height=1200&aspect=true",
        "name": "Nike Run Swift 3",
        "precio": 149999
      }
    ],
    "id": "1"
  }
]
```

Este endpoint se utiliza para almacenar las compras realizadas en la app. Guarda los datos cargados en el formulario de compra y los productos que se encontraban en el carrito al momento de realizar la misma.