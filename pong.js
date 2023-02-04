//canvas
let tela = document.querySelector('canvas')
let context = tela.getContext('2d')


alert(`para usar a raquete do player 1 use W e S
E para o player dois use setinha cima e setinha baixo`)


// posições da raquete
let yP1 = 200;
let yP2 = 200;

//codigo teclado
let cimaP1 = 87;
let baixoP1 = 83;
let cimaP2 = 38;
let baixoP2 = 40;

//taxa de incremento 
let taxa = 10;

//variaveis da bolinha
let xBolinha = 400;
let yBolinha = 250
let direcaoX = 1;
let direcaoY = 1;

//placar
let placarP1 = 0;
let placarP2 = 0;

let raio = 10;


let fundos = 800;


desenhaMesaPong();


function desenhaMesaPong() {

    context.fillStyle = 'black';
    context.fillRect(0, 0, fundos, 500);

    //fundo
    context.fillStyle = 'black';
    context.fillRect(0, 0, 800, 500);


    //bordas
    context.fillStyle = 'white'
    context.fillRect(0, 20, 800, 20);
    context.fillRect(0, 460, 800, 20);

    //rede
    let y = 40;

    for (let contador = 460; y < contador; contador++) {
        context.fillRect(400, y, 20, 20);
        y = y + 40;
    }

}



function desenhaRaqueteP1(yP1) {


    context.fillStyle = 'white';
    context.fillRect(20, yP1, 20, 100);

}

function desenhaRaqueteP2(yP2) {


    context.fillStyle = 'white';
    context.fillRect(760, yP2, 20, 100);

}

function desenhaBolinha(xBolinha, yBolinha) {

    context.fillStyle = 'white';
    context.beginPath();
    context.arc(xBolinha, yBolinha, raio, 0, 2 * Math.PI);
    context.fill();

}

function limpaBolinha() {

    context.clearRect(300, 200, 10, 0, 2 * Math.PI);

}

function atualizaBolinha() {
    limpaBolinha();
    limpaRaquete();
    desenhaMesaPong();
    desenhaRaqueteP1(yP1);
    desenhaRaqueteP2(yP2);
    desenhaBolinha(xBolinha, yBolinha);
    placar(placarP1);
    placar2(placarP2);



}

function resetGame() {

    atualizaBolinha();

    console.log(yP1, yP2);
    console.log(xBolinha, yBolinha);



    xBolinha = xBolinha + direcaoX;

    if (yBolinha < 50) {
        direcaoY = direcaoY - 2;
    }
    else if (yBolinha > 450) {
        direcaoY = direcaoY + 2;
    }
    yBolinha = yBolinha - direcaoY;




    if ((yBolinha > yP2)
        && (yBolinha < yP2 * 3)
        && (xBolinha >= 760)) {
        direcaoX = - 3;
    }
    else if (xBolinha >= 790) {
        alert('ponto player 1')
        xBolinha = 401;
        yBolinha = 250;
        placarP1(placarP1++);
        direcaoX = - 2
    }
    else if ((yBolinha > yP1)
        && (yBolinha < yP1 * 3)
        && (xBolinha <= 20)) {
        direcaoX = 3;
    }
    else if (xBolinha < 5) {
        alert('ponto player 2');
        xBolinha = 399;
        yBolinha = 250;
        placarP2(placarP2++);
        direcaoX = 2
    }



}


function limpaRaquete() {

    let y = 40;

    for (let contador = 460; y < contador; contador++) {
        context.clearRect(400, y, 20, 20);
        y = y + 40;
    }

    context.clearRect(0, 20, 800, 20);
    context.clearRect(0, 460, 800, 20);
    context.clearRect(0, 0, 800, 500);
    context.clearRect(20, 250, 20, 100);
}

function atualizaRaqueteP1() {

    limpaRaquete();
    desenhaMesaPong();
    desenhaRaqueteP1(yP1);
    desenhaRaqueteP2(yP2);
}



setInterval(resetGame, 1000 / 60);


function leTeclado(evento) {
    //player1
    if (evento.keyCode == cimaP1 && yP1 > 40) {
        yP1 = yP1 - taxa;
        console.log(yP1);
    }
    else if (evento.keyCode == baixoP1 && yP1 < 360) {
        yP1 = yP1 + taxa;

    }

    //player2
    if (evento.keyCode == cimaP2 && yP2 > 40) {
        yP2 = yP2 - taxa;
        console.log(yP2)
    }
    else if (evento.keyCode == baixoP2 && yP2 < 360) {
        yP2 = yP2 + taxa;
    }



}


document.onkeydown = leTeclado;

function placar(placarP1) {

    context.fillStyle = 'white'
    context.font = '50px arial';
    context.lineWidth = 4;
    context.beginPath();
    context.fillText(placarP1, 200, 100);
    context.fill();

}

function placar2(placarP2) {

    context.fillStyle = 'white'
    context.beginPath();
    context.fillText(placarP2, 600, 100);
    context.fill();

}






