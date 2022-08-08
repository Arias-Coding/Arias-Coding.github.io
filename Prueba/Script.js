let boton = document.getElementById("boton")
let lista = document.getElementById("lista")
let place = document.getElementById("texto")
        
boton.addEventListener("click", ()=>{
    let li = document.createElement("P")
    let texto = document.createTextNode(place.value)
    li.appendChild(texto)
    lista.appendChild(li)
    place.value = null
})