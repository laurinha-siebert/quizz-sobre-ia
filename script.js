const perguntas = [
    {
        enunciado: "Ao sair da escola, você descobre um aplicativo capaz de conversar, criar imagens e até compor músicas de forma autônoma. Qual é a sua primeira reação?",
        alternativas: [
            "Fico preocupado com o quanto essa tecnologia pode influenciar a vida das pessoas.",
            "Acho incrível como a tecnologia está evoluindo e quero experimentar logo."
        ]
    },
    {
        enunciado: "Na aula seguinte, sua professora propõe que a turma pesquise sobre como a Inteligência Artificial pode ser usada no aprendizado. Como você prefere fazer a pesquisa?",
        alternativas: [
            "Usar ferramentas de IA para resumir conteúdos e explicar de forma clara.",
            "Pesquisar em sites confiáveis, livros e conversas com colegas para formar sua própria análise."
        ]
    },
    {
        enunciado: "Durante um debate em sala, surge a questão: a IA vai transformar o mercado de trabalho. Qual posição você defende?",
        alternativas: [
            "A IA vai ajudar a criar novas profissões e aumentar a produtividade.",
            "A IA pode eliminar empregos tradicionais, por isso precisamos pensar em formas de proteger os trabalhadores."
        ]
    },
    {
        enunciado: "Depois da discussão, a professora pede que cada estudante crie uma imagem representando sua visão sobre a IA. Qual caminho você escolhe?",
        alternativas: [
            "Faço um desenho em um programa simples de design, como o Paint ou Canva.",
            "Utilizo um gerador de imagens por IA para expressar minha ideia de forma criativa."
        ]
    },
    {
        enunciado: "No trabalho em grupo de biologia, um colega copia o texto inteiro gerado pela IA sem alterações. O que você faz?",
        alternativas: [
            "Acho válido usar o texto como está, já que foi o grupo que decidiu pedir à IA.",
            "Sugiro revisar e adaptar o texto, acrescentando ideias próprias e correções para evitar erros e plágio."
        ]
    }
];
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", function(){
            atual++,
            mostraPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}
}function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}function respostaSelecionada(opcaoSelecionada){
    atual++;
    mostraPergunta();
}
mostraPergunta();let atual = 0;
let perguntaAtual;
let historiaFinal = "";function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}
// código omitido

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}// código omitido

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
     caixaAlternativas.textContent = "";
    mostraAlternativas();
}// código omitido

function mostraResultado() {
    textoPergunta.textContent = "Em 2049…";
}
// código omitido

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
// código omitido

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historia += afirmacoes + "";
    atual++;
    mostraPergunta();
}
