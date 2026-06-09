// Criação da função trocarFundo, que vai propiciar a troca de cores do background instantaneamente ao ser selecionado

function trocarFundo(value) {
    // 1. Limpa os temas anteriores do body
    document.body.className = "";

    // 2. Testa qual opção foi escolhida e aplica a classe certa
    if (value == "branco") {
        document.body.classList.add("tema-1");
    } 
    if (value == "escuro") {
        document.body.classList.add("tema-2");
    } 
    if (value == "colorido") {
        document.body.classList.add("tema-3");
    }
}