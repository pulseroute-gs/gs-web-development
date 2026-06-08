const perguntas = [
    {
        enunciado: "O que é um 'corredor verde' no contexto de emergências urbanas?",
        alternativas: [
            "Uma faixa de vegetação nas marginais para absorver CO₂",
            "Uma rota prioritária aberta por semáforos inteligentes para a passagem de ambulâncias",
            "Um sistema de câmeras que monitora ciclistas em tempo real",
            "Um projeto de arborização das avenidas principais da cidade"
        ],
        correta: 1
    },
    {
        enunciado: "Qual sistema de posicionamento por satélite é utilizado pelo PulseRoute para rastrear a viatura em tempo real?",
        alternativas: [
            "Wi-Fi triangulation",
            "Bluetooth Low Energy (BLE)",
            "GNSS (Global Navigation Satellite System)",
            "RFID de longo alcance"
        ],
        correta: 2
    },
    {
        enunciado: "O que é Geofencing e como o PulseRoute o utiliza?",
        alternativas: [
            "É uma cerca virtual definida por coordenadas GPS que aciona os semáforos quando a ambulância entra na zona",
            "É uma cerca física de metal ao redor de cruzamentos perigosos",
            "É um protocolo de criptografia para proteger os dados do veículo",
            "É um sistema de pagamento automático de pedágios por satélite"
        ],
        correta: 0
    },
    {
        enunciado: "Por que a constelação Starlink é importante para o PulseRoute em áreas remotas?",
        alternativas: [
            "Porque funciona mesmo onde não há cobertura de rede celular convencional, garantindo baixa latência",
            "Porque substitui completamente os semáforos físicos por projeções holográficas",
            "Porque armazena os dados das rotas localmente no veículo sem precisar de internet",
            "Porque opera em frequências de rádio AM, sem necessidade de antena especial"
        ],
        correta: 0
    },
    {
        enunciado: "Qual é o serviço de atendimento de emergências médicas citado como público-alvo principal do PulseRoute?",
        alternativas: [
            "Corpo de Bombeiros (CBMSP)",
            "Defesa Civil Nacional",
            "SAMU 192",
            "Polícia Rodoviária Federal"
        ],
        correta: 2
    },
    {
        enunciado: "Quando a ambulância do PulseRoute passa por um cruzamento, o que acontece com os semáforos logo depois?",
        alternativas: [
            "Ficam todos vermelhos por 5 minutos para evitar acidentes secundários",
            "Permanecem verdes para o corredor por mais 10 minutos",
            "Voltam automaticamente ao fluxo normal de trânsito",
            "São desligados completamente até o fim do atendimento"
        ],
        correta: 2
    },
    {
        enunciado: "Qual é o benefício direto do corredor verde para o paciente em atendimento?",
        alternativas: [
            "Redução do custo da corrida de ambulância",
            "Aumento da chance de sobrevivência pela redução do tempo de deslocamento",
            "Melhora do sinal de rádio interno da viatura",
            "Geração automática de relatório médico durante o trajeto"
        ],
        correta: 1
    },
    {
        enunciado: "O algoritmo do PulseRoute roda em qual ambiente?",
        alternativas: [
            "Diretamente no painel da ambulância (processamento local)",
            "Em um servidor físico instalado na sede do SAMU de cada cidade",
            "Em nuvem, recebendo dados do GNSS e enviando comandos para os semáforos",
            "No chip embarcado dos próprios semáforos, de forma distribuída"
        ],
        correta: 2
    },
    {
        enunciado: "Qual é a estimativa de redução do tempo de deslocamento das ambulâncias com o PulseRoute?",
        alternativas: [
            "5%",
            "15%",
            "30%",
            "60%"
        ],
        correta: 2
    },
    {
        enunciado: "O PulseRoute consegue funcionar durante uma queda de energia na rede elétrica da cidade?",
        alternativas: [
            "Não, pois depende dos semáforos físicos que ficam sem energia",
            "Sim, pois o sistema via satélite e os semáforos têm bateria de backup, garantindo resiliência",
            "Somente se a ambulância tiver um gerador a bordo ligado ao sistema",
            "Sim, mas apenas em modo manual, sem abertura automática dos semáforos"
        ],
        correta: 1
    }
];

let indiceAtual = 0;
let acertos = 0;
const form = document.getElementById("quiz-form");
const btnProxima = document.getElementById("proxima-pergunta");

function renderizarPergunta() {
    const p = perguntas[indiceAtual];
    const isUltima = indiceAtual === perguntas.length - 1;

    form.innerHTML = `
        <div class="quiz-item" id="pergunta-${indiceAtual}">
            <p class="quiz-enunciado">
                <span class="quiz-contador">${indiceAtual + 1} / ${perguntas.length}</span>
                ${p.enunciado}
            </p>
            <ul class="quiz-alternativas">
                ${p.alternativas.map((alt, i) => `
                <li>
                    <input type="radio" name="quiz-resposta" id="quiz-alt-${i}"
                           class="quiz-btn" value="${i}">
                    <label for="quiz-alt-${i}">${alt}</label>
                </li>`).join("")}
            </ul>
            <p class="quiz-aviso" id="quiz-aviso" hidden>Selecione uma alternativa para continuar.</p>
        </div>
        ${isUltima ? '<button type="submit" class="btn-green quiz-submit"><span>Ver Resultado</span></button>' : ""}
    `;

    btnProxima.hidden = isUltima;
}
    
function avancar() {
    const selecionado = form.querySelector('input[name="quiz-resposta"]:checked');

    if (!selecionado) {
        document.getElementById("quiz-aviso").hidden = false;
        return;
    }

    if (Number(selecionado.value) === perguntas[indiceAtual].correta) {
        acertos++;
    }

    indiceAtual++;
    renderizarPergunta();
}

function exibirResultado(e) {
    e.preventDefault();

    const selecionado = form.querySelector('input[name="quiz-resposta"]:checked');

    if (!selecionado) {
        document.getElementById("quiz-aviso").hidden = false;
        return;
    }

    if (Number(selecionado.value) === perguntas[indiceAtual].correta) {
        acertos++;
    }

    const gifNome = acertos >= 7 ? "decisao-certa" : "decisao-errada";
    const gifAlt  = acertos >= 7 ? "Parabéns, ótimo resultado!" : "Continue estudando!";

    form.hidden = true;
    btnProxima.hidden = true;

    const divResultado = document.createElement("div");
    divResultado.className = "quiz-resultado";
    divResultado.id = "quiz-resultado";
    divResultado.innerHTML = `
        <img src="./assets/gifs/quiz/${gifNome}.gif"
             alt="${gifAlt}" class="icon-gif-resultado">
        <p>Você acertou <strong>${acertos}</strong> de ${perguntas.length}</p>
        <button type="button" class="btn-white" id="quiz-refazer">Refazer o quiz</button>
    `;

    form.after(divResultado);

    document.getElementById("quiz-refazer").addEventListener("click", reiniciar);
}

function reiniciar() {
    indiceAtual = 0;
    acertos = 0;

    const divResultado = document.getElementById("quiz-resultado");
    if (divResultado) divResultado.remove();

    form.hidden = false;
    renderizarPergunta();
}

btnProxima.addEventListener("click", avancar);
form.addEventListener("submit", exibirResultado);

renderizarPergunta();
