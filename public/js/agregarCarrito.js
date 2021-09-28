const clickButton = document.querySelectorAll(".contenedor-btn");
const contenedorProducto = document.querySelector(".listado-servicios");
let carrito = []

clickButton.forEach(btn => {
    btn.addEventListener("click", addToCarritoItem)
})

function addToCarritoItem(e) {
    const button = e.target;
    const item = button.closest(".servicios");
    const itemTitle = item.querySelector(".titulo-del-servicio").textContent;
    const itemPrice = item.querySelector(".precio-servicio").textContent
    const itemImage = item.querySelector(".imagen-servicio").src

    const newItem = {
        titulo: itemTitle,
        precio: itemPrice,
        imagen: itemImage,
        cantidad: 1
    }

    addCarritoItem(newItem)
}

function addCarritoItem(newItem) {
    carrito.push(newItem)
    renderCarrito()

}





JSON.stringify(localStorage.setItem("carrito", carrito))




































/*const addToShoppingCartButtons = document.querySelectorAll(".contenedor-btn");

addToShoppingCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener("click", addToCartClicked)
})

const shoppingCartItemsContainer = document.querySelector(".shoppingCartItemsContainer")

function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest(".servicios")
    const itemTitle = item.querySelector(".titulo-del-servicio").textContent; 
    const itemPrice = item.querySelector(".precio-servicio").textContent;
    const itemImage = item.querySelector(".imagen-servicio");
    itemImage.src

    

addItemToShoppinCart(itemTitle,itemPrice,itemImage);    
}

function addItemToShoppinCart(itemTitle,itemPrice,itemImage) {
   const shoppingCartRow = document.createElement("div");
   const shoppingCartContent = ` 
   <div class="contenedor-producto">
   <div class="imagen-producto"> 
   <img class="imagen-producto" src= ${itemImage}> 
   </div>
   <div class="descripcion-producto"> ${itemTitle} 
   </div>
   <div class="precio-producto"> ${itemPrice} 
   </div>
   </div>
`
shoppingCartRow.innerHTML = shoppingCartContent;
shoppingCartItemsContainer.append(shoppingCartRow);
}*/