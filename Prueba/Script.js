let boton = document.getElementById("boton")
let lista = document.getElementById("lista")
let place = document.getElementById("texto")
        
boton.addEventListener("click", ()=>{
    let p = document.createElement("P")
    let respuesta = document.createElement("DIV")
    let texto = document.createTextNode(place.value)
    p.appendChild(texto)
    respuesta.appendChild(p)
    place.value = null

//   
    let id = Math.trunc(Math.random()*1000)

    let divV = document.createElement("DIV")
    divV.classList.add("listaRespuestas")
    let input = document.createElement("INPUT")
    let buttom = document.createElement("BUTTON")
    let textoo = document.createTextNode("Responder")
    respuesta.appendChild(divV)
    respuesta.appendChild(input)
    respuesta.appendChild(buttom)
    buttom.appendChild(textoo)
    buttom.classList.add("responder")
    input.classList.add("respuesta")
    respuesta.classList.add(id)
    respuesta.classList.add("id")

    lista.appendChild(respuesta)
    console.log(respuesta)
// 
    
    let responderr = document.querySelectorAll(".responder")    
    responderr.forEach((key)=>{
        key.addEventListener("click", ()=>{
            responder()
        })
    })
})


let responder = ()=> {
    const respuestaa = document.querySelector(".respuesta")
    let respuesta = respuestaa.value

    let listaRespuestas = document.querySelector(".listaRespuestas")
    
    let p = document.createElement("P")
    let texto = document.createTextNode(respuesta)
    p.appendChild(texto)
    listaRespuestas.appendChild(p)
    respuestaa.value = null

    console.log(respuesta)
}
