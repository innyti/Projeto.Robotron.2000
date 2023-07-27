const robotrom = document.querySelector('#robotron')

robotron.addEventListener("click", (evento) => {
    console.log(evento)
})

function dizOi(nome) {
    console.log("oi" + nome)
    console.log("Bem-vindos ao Robotron 2000")
}

dizOi("Pedro")
