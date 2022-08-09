let root = document.querySelector(".root")
let contador = 0

let input = document.createElement("INPUT")
let boton = document.createElement("BUTTON")
boton.appendChild(document.createTextNode("Empezar"))
root.appendChild(input)
root.appendChild(boton)

const Empezar = (n) => {
    let minutos = Math.trunc(n/60)
    minutos = (minutos < 10) ? `0${minutos}` : minutos
    let segundos = n%60
    segundos = (segundos < 10) ? `0${segundos}` : segundos
    let div = document.createElement("DIV")
    let p = document.createElement("P")
    p.classList.add("numero")
    let numbrr = document.createTextNode(`${Math.trunc(n/60)}:${n%60}`)
    p.appendChild(numbrr)
    div.appendChild(p)
    root.appendChild(div)
    
    const empezarr = setInterval(()=>{
        div.removeChild(div.firstChild)
        n--
        let minutos = Math.trunc(n / 60)
        minutos = (minutos < 10) ? `0${minutos}` : minutos
        let segundos = n % 60
        segundos = (segundos < 10) ? `0${segundos}` : segundos
        let p = document.createElement("P")
        let reloj = `${minutos}:${segundos}`
        numbrr = document.createTextNode(reloj)
        p.appendChild(numbrr)
        div.appendChild(p)
        if (n == 0) {
            clearInterval(empezarr)
            setTimeout(()=>{
                root.removeChild(root.lastChild)
            },1000)
        }
    },1000)
}

boton.addEventListener("click", ()=>{
    let n = parseInt(input.value)
    
    Empezar(n * 60)
})
