let boton = document.getElementById("boton")
let lista = document.getElementById("lista")
let place = document.getElementById("texto")
        
boton.addEventListener("click", ()=>{
    let li = document.createElement("P")
    let texto = document.createTextNode(place.value)
    li.appendChild(texto)
    lista.appendChild(li)
    place.value = null

    comentar()

    
    let responderr = document.querySelectorAll(".responder")    
    responderr.forEach((key)=>{
        key.addEventListener("click", ()=>{
            responder()
        })
    })
})

let comentar = ()=> {
    let id = Math.trunc(Math.random()*1000)
    let div = document.createElement("DIV")
    div.classList.add("respuestas")
    div.classList.add(id)

    let divV = document.createElement("DIV")
    divV.classList.add("listaRespuestas")
    let input = document.createElement("INPUT")
    let buttom = document.createElement("BUTTON")
    let texto = document.createTextNode("Responder")
    div.appendChild(divV)
    div.appendChild(input)
    div.appendChild(buttom)
    buttom.appendChild(texto)
    buttom.classList.add("responder")
    input.classList.add("respuesta")

    lista.appendChild(div)
    console.log(div)
}


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
