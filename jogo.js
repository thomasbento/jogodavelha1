const celulas = document.querySelectorAll(".celula");
let checarTurno = true;
let turno;
const JOGADOR_X = "X";
const JOGADOR_O = "O";
let jogoAcabou = false;
document.addEventListener("click", (event) => {
    if (event.target.matches(".celula") && !jogoAcabou){
        jogar(event.target.id);
    }
})

function jogar(id) {
    const celula = document.getElementById(id);
    if (celula.textContent === "") {
        turno = checarTurno ? JOGADOR_X : JOGADOR_O;
        checarTurno = !checarTurno;
        celula.textContent = turno;
        celula.classList.add(turno);
    celula.removeEventListener("click", jogar);
    verificarVencedor(turno);

    }
}
 function verificarVencedor(jogador) {
    const combinacoesVitoria = [
        [0, 1, 2],
        [3 ,4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for(const combinacao of combinacoesVitoria) {
        const [a, b, c] = combinacao;
        if (
            celulas[a].textContent === jogador &&
            celulas[b].textContent === jogador &&
            celulas[c].textContent === jogador
        ){
            jogoAcabou = true;
            alert(`O jogador ${jogador} venceu`);
            return;
        }
    }
    if ([...celulas].every((celula) => celula.textContent !== "")) {
        jogoAcabou = true;
        alert("Empate!");
    }
 }