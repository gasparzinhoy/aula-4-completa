const caixaprincipal = documnet .querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
    enunciado: "Insira o enunciado da Pergunta 1",
    alternativas: ["Alternativa 1" , "Alternativa 2"],
    },
    {
    enunciado: "Insira o enunciado da Pergunta 2",
    alternativas: ["Alternativa 1" , "Alternativa 2"],
    },
    {
    enunciado: "Insira o enunciado da Pergunta 3",
    alternativas: ["alternativa 1" , "alternativa 2"]
    },
    ];
let atual = 0;
let perguntaAtual;
function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}
mostraPergunta();