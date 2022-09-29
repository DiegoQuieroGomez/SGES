
const btnIngresarCarga = document.querySelector("#btn-ingresarCarga")
const contenedor1 = document.querySelector(".contenedor1")



const eventoEscuchado = () => {

    console.log("evento Escuchado")

}

btnIngresarCarga.addEventListener("click", renderizarForm)


function renderizarForm(){
    contenedor1.innerHTML = ``
    const formIngreso = document.createElement("div")
    formIngreso.className = "formIngreso"
    formIngreso.id = "formIngreso"
    formIngreso.innerHTML=`
        <h2 class="formTittle">Ingreso de Cargas</h2>
        
        <label>Cierre de Negocio</label>
        <input type="text" class="cierreNegocio">

        <label>Origen</label>
        <select name="origen" class="origen">
        <option value="frigomerc">Frigomerc</option>
        <option value="beef">Beef Paraguay</option>
        <option value="redCarnica">Red Carnica</option>
        <option value="minerva">Minerva</option>
        <option value="pulsa">Pulsa</option>
        <option value="carrasco">Carrasco</option>
        </select>
    `
    contenedor1.append(formIngreso)
    
}



//lista productos por tipo (CONSOLA/JUEGO/ACCESORIO/OTRO) -ARREGLAR DATOS SOLICITADOS-
function listarProductosPorTipo(array){
    productContainer.innerHTML =""
    array.forEach((producto) => {
        
        const item = document.createElement("div")
        item.className = "product"
        item.innerHTML =`         
            <img src="${producto.imagen}" class="productImg">
            <h2 class="productName"> ${producto.nombreProducto} </h2>
            <span class="productPrice"> $ ${producto.precio} </span>
            <button id= "${producto.sku}" class="buttonCTA"> Agregar al carro </button>
         `
        productContainer.append(item)

        //Añade listeners al contenido generado dinámicamente
        listenersContenido(".buttonCTA", agregarProducto)

    })
    
}

