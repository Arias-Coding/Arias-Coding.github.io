class Comentario {
    constructor(comentario) {
        this.id = Math.trunc(Math.random()*1000)
        this.comentario = comentario
        this.respuestas = new Array()
    }
    responder(respuesta) {
        this.respuestas.push(respuesta)
    }
}
listaDeComentarios = []

let boton = document.getElementById("boton")
let lista = document.getElementById("lista")
let place = document.getElementById("texto")
        
        
const agregarRespuesta = (place, lista) =>{
    
    let nuevoComentario = new Comentario(place.value)
    listaDeComentarios.push(nuevoComentario)
    
    //
    let respuesta = document.createElement("DIV")
    let p = document.createElement("P")
    let texto = document.createTextNode(nuevoComentario.comentario)
    p.appendChild(texto)
    p.classList.add("aca")
    
    respuesta.appendChild(p)
    
    let divV = document.createElement("DIV")
    divV.classList.add("listaRespuestas")
    
    let input = document.createElement("INPUT")
    let buttom = document.createElement("BUTTON")
    
    respuesta.appendChild(divV)
    respuesta.appendChild(input)
    respuesta.appendChild(buttom)
    
    let textoo = document.createTextNode("Responder")
    buttom.appendChild(textoo)
    buttom.setAttribute('id', nuevoComentario.id)
    input.setAttribute('id', `id${nuevoComentario.id}`)
    divV.setAttribute('id', `id${nuevoComentario.id}`)
    
    buttom.classList.add("responder")
    input.classList.add("respuesta")
    respuesta.classList.add("id")
    
    lista.appendChild(respuesta)
    
    // 
    place.value = null
    //
    buttom.addEventListener("click", () => {
        agregarRespuesta( input.value, divV)
        input.value = null
    })
}
        
        
        
boton.addEventListener("click", ()=>{
    agregarRespuesta(place, lista)
})


let responder = (id, respuesta, lista)=> {
    let p = document.createElement("P")
    let texto = document.createTextNode(respuesta)
    p.appendChild(texto)
    
    lista.appendChild(p)
}
