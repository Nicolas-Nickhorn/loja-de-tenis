function red(){
    document.getElementById("img-tenis").innerHTML = "<img src = 'imagens/tenis_red-removebg-preview.png'>"
    document.body.style.background = `linear-gradient(to right, rgb(240, 25, 25), rgba(114, 2, 2, 0.70))`
    document.getElementById("img-model").innerHTML = ''
}

function blue(){
    document.getElementById("img-tenis").innerHTML = "<img src = 'imagens/tenis_blue-removebg-preview.png'>"
    document.body.style.background = `linear-gradient(to right, rgb(50, 20, 130), rgba(25, 5, 100, 0.10))`
}

function green(){
    document.getElementById("img-tenis").innerHTML = "<img src = 'imagens/tenis_green2-removebg-preview.png'>"
    document.body.style.background = `linear-gradient(to right, rgba(70, 240, 100, 0.50), rgb(5, 210, 40))`
}

function yellow(){
    document.getElementById("img-tenis").innerHTML = "<img src = 'imagens/tenis_yellow2-removebg-preview.png'>"
    document.body.style.background = `linear-gradient(to right, rgb(255, 255, 0), rgb(40, 5, 120))`
}
