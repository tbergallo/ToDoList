class Item {
    constructor(nuevaTarea) {
        this.crearDiv(nuevaTarea)
    }
    crearDiv(nuevaTarea) {
        // crear primer input
        let inputItem = document.createElement("input")
        inputItem.type = "text"
        inputItem.value = nuevaTarea
        inputItem.setAttribute("disabled", "")
        inputItem.classList.add("item-input")
        // crear boton editar
        let botonEditar = document.createElement("button")
        botonEditar.innerHTML = "<i class='fas fa-lock'></i>"
        botonEditar.classList.add("boton-editar")
        botonEditar.addEventListener("click", function () {
            if (inputItem.disabled == true) {
                inputItem.removeAttribute("disabled")
                botonEditar.innerHTML = "<i class='fa fa-unlock-alt'></i>"
            }
            else {
                inputItem.setAttribute("disabled", "")
                botonEditar.innerHTML = "<i class='fas fa-lock'></i>"
            }
        })
        // crear boton remover
        let botonRemover = document.createElement("button")
        botonRemover.innerHTML = "<i class='fa fa-trash'></i>"
        botonRemover.classList.add("boton-remover")
        botonRemover.addEventListener("click", function(){
        newDiv.remove()
        })
        // Nuevo div
        let newDiv = document.createElement("div")
        newDiv.classList.add("item")
        newDiv.appendChild(inputItem)
        newDiv.appendChild(botonEditar)
        newDiv.appendChild(botonRemover)

        let container = document.querySelector(".container")
        container.appendChild(newDiv)
    }
}

// Boton de agregar 

let botonAgregar = document.querySelector(".boton-agregar")
let mainInput = document.querySelector(".input")

function chequearInput () {
    if (mainInput.value != "") {
        let newItem = new Item(mainInput.value);
        mainInput.value = ""
    }
}

botonAgregar.addEventListener("click", chequearInput)