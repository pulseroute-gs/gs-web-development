# AI.md — Uso de IA no projeto

Registro das interações com Inteligência Artificial no desenvolvimento do **PulseRoute**, conforme
exigido pela disciplina de Web Development.

## Interação 1 — Geração das imagens da landing page (apoio ao Figma)
- **Solicitado:** imagens ilustrativas no tema (ambulância no trânsito, semáforos inteligentes,
  satélite/cidade inteligente, equipe do SAMU, rota em mapa) para as seções e apoio ao Figma.
- **Retornou:** um conjunto de imagens nos temas pedidos.
- **Alterado/rejeitado:** mantidas as coerentes com a identidade visual (neumórfico + paleta da
  marca); descartadas as fora do tom/tema; ajustadas e exportadas com `alt` descritivo.

## Interação 2 — Organização da entrega e criação das issues (Claude Code)
- **Solicitado:** analisar a rubrica, levantar o que faltava, dividir as tarefas, criar as issues no
  GitHub e ajustar a documentação (`equipe.txt` e `AI.md`).
- **Retornou:** levantamento das features pendentes, divisão por dificuldade, criação das 5 issues e
  convenções de organização (um arquivo JS/CSS por feature, fluxo de branch + PR).
- **Alterado/rejeitado:** a IA foi orientada a **não** escrever código de feature (é da equipe); a
  issue de responsividade foi reescopada só para o menu lateral, pois o resto já estava responsivo.

## Interação 3 — Geração das perguntas e respostas do quiz (Claude Code)
- **Solicitado:** gerar 10 perguntas de múltipla escolha sobre o tema do projeto (PulseRoute,
  corredores verdes, SAMU, GNSS, Starlink, Geofencing), cada uma com 4 alternativas e o índice
  da resposta correta, no formato de array JS.
- **Retornou:** array `perguntas` com 10 objetos (`enunciado`, `alternativas[]`, `correta`),
  cobrindo os conceitos centrais da solução.
- **Alterado/rejeitado:** as posições das alternativas de algumas perguntas foram reorganizadas
  manualmente para evitar que a resposta correta ficasse sempre no mesmo índice.
