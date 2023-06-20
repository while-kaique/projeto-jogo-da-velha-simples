var letra = "<p>x</p>"
var jogadas = 0
var pazul = 0
var pverm = 0

const quad1 = document.getElementById("1")
const quad2 = document.getElementById("2")
const quad3 = document.getElementById("3")
const quad4 = document.getElementById("4")
const quad5 = document.getElementById("5")
const quad6 = document.getElementById("6")
const quad7 = document.getElementById("7")
const quad8 = document.getElementById("8")
const quad9 = document.getElementById("9")

const cazul = document.getElementById("contA")
const cverm = document.getElementById("contV")

var listaquadrados = document.getElementsByClassName("quadrado")

const vitorias = [
    [quad1, quad2, quad3],
    [quad4, quad5, quad6],
    [quad7, quad8, quad9],

    [quad1, quad4, quad7],
    [quad2, quad5, quad8],
    [quad3, quad6, quad9],

    [quad1, quad5, quad9],
    [quad3, quad5, quad7]
]

function adicionarp(quadradoaddp){
    if (quadradoaddp == "<p>x</p>") {
        pazul += 1
        cazul.innerText = pazul
    } else {
        pverm += 1
        cverm.innerText = pverm
    }
}

function verificar(quadradov) {

    for (let possibilidade of vitorias) {
        var verificador = 0
        for (const quadrado of possibilidade) {
            if (quadrado.innerHTML == quadradov) {
                verificador += 1
            }
            if (verificador == 3) {
                adicionarp(quadradov)
                verificador = 0
                jogadas = 0
                for (const quad of listaquadrados) {
                    quad.innerHTML = ""
                }
                letra = "<p>x</p>"
            } else {empate()}
        }
    }

}

function adicionar(quadradoa) {

    if (quadradoa.innerHTML == "") {
        quadradoa.innerHTML = letra
        if (letra == "<p>x</p>") {
            letra = "<p>o</p>"
            quadradoa.style.color = "rgb(59, 137, 255)"
        } else {
            letra = "<p>x</p>"
            quadradoa.style.color = "rgb(255, 96, 96)"
        }
        jogadas += 1

        verificar(quadradoa.innerHTML)
    }

}
function empate() {
    if (jogadas == 9){
        verificador = 0
        jogadas = 0
        for (const quad of listaquadrados) {
            quad.innerHTML = ""
        }
        letra = "<p>x</p>"
    }

}



function marcar(quadradom) {
    adicionar(quadradom)
}