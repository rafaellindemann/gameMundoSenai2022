let operando1 
let operando2
let operador
    // 0: +
    // 1: -
let resultado
let resposta = document.getElementById('inpResposta')
let contRespostas = 0
let maxRespostas = 5
let pontos = 0
let pontosPorAcerto = 1
let pontosPorErro = -2

gerarPergunta()

function gerarPergunta(){

    do{
        operando1 = gerarNumero(0,9)
        operando2 = gerarNumero(0,9)
        operador = gerarNumero(0,1)
        if(operador == 0){
            resultado = operando1 + operando2
            operador = '+'
        }else{
            resultado = operando1 - operando2
            operador = '-'
        }
    
    }while(resultado > 9 || resultado < 0);
    console.log(resultado);
    
    document.getElementById('divOperacao').innerHTML = `${operando1} ${operador} ${operando2}`
    document.getElementById('divResultados').innerHTML = `Pergunta ${contRespostas+1}/${maxRespostas}<br>Pontuação atual: ${pontos}`
    resposta.value = ''
    resposta.focus()
    
}

function corrigirResposta(){

    if(resposta.value == resultado){
        alert('ACERTOU :D')
        pontos += pontosPorAcerto
        document.getElementById('divResultados').style.color = 'green'
    }else{
        alert('Errou :/')
        pontos += pontosPorErro
        document.getElementById('divResultados').style.color = 'red'
    }
    contRespostas++
    document.getElementById('divResultados').innerHTML = `Pergunta ${contRespostas+1}/${maxRespostas}<br>Pontuação atual: ${pontos}`
    if(contRespostas < maxRespostas){
        gerarPergunta()
    }else{
        mostrarResultadoFinal()
    }
}

function mostrarResultadoFinal(){
    document.getElementById('divResposta').innerHTML = `<H1>Sua pontuação final foi: ${pontos}</H1>`
    document.getElementById('divResultados').innerHTML = `<button onclick="location.reload(true)">Jogar novamente</button>`
    // resposta.value = ''
    // resposta.disabled = true
}

// ============================================================================
function gerarNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function lerEnter(e)
{
    if(e.key == 'Enter')
    {
        // console.log(e);
        // console.log(e.composedPath()[0].id);
        // console.log(resposta.value);
        if(contRespostas < maxRespostas){
            corrigirResposta()
        }else{
            alert('O Jogo já acabou!')
        }

    }
}

document.onkeyup = lerEnter

