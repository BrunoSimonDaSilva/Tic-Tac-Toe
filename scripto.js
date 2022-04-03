const quadrado = document.querySelectorAll(".quadrado");
const jogador_X = "X";
const jogador_O = "O";
let chekturno = true;
var turno;
const quadrado0 = document.getElementById(0);
const quadrado1 = document.getElementById(1);
const quadrado2 = document.getElementById(2);
const quadrado3 = document.getElementById(3);
const quadrado4 = document.getElementById(4);
const quadrado5 = document.getElementById(5);
const quadrado6 = document.getElementById(6);
const quadrado7 = document.getElementById(7);
const quadrado8 = document.getElementById(8);


//reconhecer os cliks (eventos)

document.addEventListener("click", (event) => {
    if (event.target.matches(".quadrado")) {
        jogar(event.target.id);
    }
    if (event.target.matches(".restart")) {
        restart()
    }
})
//propriedade de empate
var x = 0;
var o = 0;

//reconhecer turno e marcar tabela 
function jogar(id) {
    const quadrado = document.getElementById(id);
    if (chekturno === true) {
        turno = jogador_X
        x++;
        quadrado.textContent = turno;
        winner(turno)
    }
    else {
        turno = jogador_O
        o++;
        quadrado.textContent = turno;
        winner(turno)

    }

}


//definir fim de jogo
function winner(turno) {
    
//verificador XXXXXXXX
    //horizontal
    if (quadrado0.textContent === "X" && quadrado1.textContent === "X" && quadrado2.textContent === "X") {
        window.alert("O X Venceu.")
        restart()
    }
    else if (quadrado3.textContent === "X" && quadrado4.textContent === "X" && quadrado5.textContent === "X") {
        window.alert("O X Venceu.")
        restart()
    }
    else if (quadrado6.textContent === "X" && quadrado7.textContent === "X" && quadrado8.textContent === "X") {
        window.alert("O X Venceu.")
        restart()
    }
    //vertical
    else if (quadrado0.textContent === "X" && quadrado3.textContent === "X" && quadrado6.textContent === "X") {
        window.alert("O Jogador (X) Venceu.")
        restart()
    }
    else if (quadrado1.textContent === "X" && quadrado4.textContent === "X" && quadrado7.textContent === "X") {
        window.alert("O Jogador (X) Venceu.")
        restart()
    }
    else if (quadrado2.textContent === "X" && quadrado5.textContent === "X" && quadrado8.textContent === "X") {
        window.alert("O Jogador (X) Venceu.")
        restart()
    }
    //Diagonal
    else if (quadrado0.textContent === "X" && quadrado4.textContent === "X" && quadrado8.textContent === "X") {
        window.alert("O Jogador (X) Venceu.")
        restart()
    }
    else if (quadrado2.textContent === "X" && quadrado4.textContent === "X" && quadrado6.textContent === "X") {
        window.alert("O Jogador (X) Venceu.")
        restart()
    }
//verificador OOOOO
    //horizontal
    else if (quadrado0.textContent === "O" && quadrado1.textContent === "O" && quadrado2.textContent === "O") {
        window.alert("O Jogador (O) Venceu.")
        restart()
    }
    else if (quadrado3.textContent === "O" && quadrado4.textContent === "O" && quadrado5.textContent === "O") {
        window.alert("O Jogador (O) Venceu.")
        restart()
    }
    else if (quadrado6.textContent === "O" && quadrado7.textContent === "O" && quadrado8.textContent === "O") {
        window.alert("O Jogador (O) Venceu.")
        restart()
    }
    //vertical
    else if (quadrado0.textContent === "O" && quadrado3.textContent === "O" && quadrado6.textContent === "O") {
        window.alert("O Jogador (O) Venceu.")
        restart()
    }
    else if (quadrado1.textContent === "O" && quadrado4.textContent === "O" && quadrado7.textContent === "O") {
        window.alert("O Jogador (O) Venceu.")
        restart()
    }
    else if (quadrado2.textContent === "O" && quadrado5.textContent === "O" && quadrado8.textContent === "O") {
        window.alert("O Jogador (O) Venceu.")
        restart()
    }
    //Diagonal
    else if (quadrado0.textContent === "O" && quadrado4.textContent === "O" && quadrado8.textContent === "O") {
        window.alert("O Jogador (O) Venceu.")
        restart()
    }
    else if (quadrado2.textContent === "O" && quadrado4.textContent === "O" && quadrado6.textContent === "O") {
        window.alert("O Jogador (O) Venceu.")
        restart()
    }
    //Empate
    if (x+o >= 9) {
        window.alert("Empate")
    }
    chekturno = !chekturno;
}

function restart() {
    quadrado0.textContent = " ";
    quadrado1.textContent = " ";
    quadrado2.textContent = " ";
    quadrado3.textContent = " ";
    quadrado4.textContent = " ";
    quadrado5.textContent = " ";
    quadrado6.textContent = " ";
    quadrado7.textContent = " ";
    quadrado8.textContent = " ";
    x = 0;
    o = 0;
}
