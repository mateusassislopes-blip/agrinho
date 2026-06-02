// Conteúdos dos modais. Para mudar as mensagens, edite os textos abaixo.
const conteudosModal = {
    solar: {
        titulo: "Energia Solar",
        texto: "A energia solar transforma a luz do sol em eletricidade e pode ser usada em propriedades rurais, escolas, agroindústrias e sistemas de bombeamento de água.\n\nExemplos: placas solares para reduzir a conta de luz de aviários, ordenhadeiras, câmaras frias e irrigação. No campo, isso ajuda a diminuir custos e reduz a dependência de fontes mais poluentes."
    },
    reflorestamento: {
        titulo: "Reflorestamento",
        texto: "Reflorestar não é apenas plantar árvores: é recuperar áreas degradadas, proteger nascentes, melhorar a infiltração da água no solo e criar abrigo para aves, insetos polinizadores e outros animais.\n\nExemplos: cercar uma nascente, plantar espécies nativas, recuperar matas ciliares e manter corredores ecológicos entre áreas verdes."
    },
    agua: {
        titulo: "Economia de Água",
        texto: "A água é essencial para a produção agrícola, para os animais e para a vida urbana. Economizar água significa usar melhor esse recurso sem comprometer a produção.\n\nExemplos: irrigação por gotejamento, sensores de umidade no solo, captação de água da chuva, manutenção de caixas d'água e reuso de água em atividades permitidas."
    },
    curiosidade: {
        titulo: "Você sabia?",
        texto: "O agro não termina na porteira da propriedade. Ele envolve pesquisa, sementes, máquinas, transporte, armazenagem, agroindústria, supermercados, feiras, exportação e alimentação escolar.\n\nNo Brasil, o agronegócio representou 23,2% do PIB em 2024, segundo CEPEA/CNA. Isso mostra como campo e cidade dependem um do outro."
    },
    impacto: {
        titulo: "Impacto ambiental",
        texto: "A produção sem cuidado pode causar erosão, assoreamento, perda de fertilidade do solo e contaminação por resíduos. A produção responsável faz o contrário: protege recursos naturais e mantém a economia local funcionando.\n\nExemplos de impacto positivo: plantio direto, terraceamento, rotação de culturas, proteção de nascentes e destino correto de embalagens."
    },
    solucao: {
        titulo: "Solução sustentável",
        texto: "Soluções sustentáveis unem conhecimento tradicional, ciência e tecnologia. Não é produzir menos: é produzir melhor, com planejamento e responsabilidade.\n\nExemplos: energia solar, biodigestores, compostagem, agricultura de precisão, coleta seletiva, recuperação de matas ciliares e educação ambiental nas escolas."
    },
    problemas: {
        titulo: "Principais problemas",
        texto: "Os principais problemas ambientais ligados ao campo e à cidade são erosão, desperdício de água, descarte incorreto de resíduos, perda de vegetação nativa e impactos climáticos.\n\nExemplos reais: seca pode reduzir produtividade; geadas podem atingir culturas sensíveis; lixo descartado de forma errada pode chegar ao solo e à água; falta de cobertura vegetal deixa o solo mais frágil."
    },
    solucoes: {
        titulo: "Soluções sustentáveis",
        texto: "As soluções precisam acontecer em conjunto: produtor rural, escola, poder público, famílias e empresas.\n\nExemplos práticos: plantio direto para proteger o solo, rotação de culturas para melhorar nutrientes, coleta seletiva para reduzir poluição, compostagem para transformar resíduos orgânicos em adubo e reflorestamento para proteger nascentes."
    },
    solo: {
        titulo: "Preservação do solo",
        texto: "Solo saudável é base da produção de alimentos. Quando o solo perde matéria orgânica ou sofre erosão, a produtividade cai e a água da chuva carrega terra para estradas, rios e áreas baixas.\n\nExemplos de cuidado: manter palhada sobre o solo, usar curvas de nível, terraceamento, adubação correta, rotação de culturas e análise de solo."
    },
    residuos: {
        titulo: "Redução da poluição",
        texto: "Reduzir poluição significa evitar que resíduos cheguem ao solo, à água e às ruas. Isso vale para lixo doméstico, restos de produção, óleo usado, plásticos e embalagens.\n\nExemplos: coleta seletiva, pontos de entrega voluntária, compostagem de resíduos orgânicos, reciclagem e devolução correta de embalagens agrícolas dentro das regras ambientais."
    },
    biodiversidade: {
        titulo: "Biodiversidade",
        texto: "Biodiversidade é a variedade de plantas, animais, fungos e microrganismos. Ela ajuda no equilíbrio natural, na polinização, na fertilidade do solo e no controle biológico de pragas.\n\nExemplos: abelhas polinizam culturas, árvores protegem cursos d'água, aves ajudam no equilíbrio ecológico e microrganismos participam da decomposição da matéria orgânica."
    }
};

// Pegamos os elementos do HTML para controlar a janela modal.
const modal = document.querySelector("#modal");
const tituloModal = document.querySelector("#tituloModal");
const textoModal = document.querySelector("#textoModal");
const fecharModal = document.querySelector("#fecharModal");
const botaoTema = document.querySelector("#alternarTema");
const botaoAumentarFonte = document.querySelector("#aumentarFonte");
const botaoDiminuirFonte = document.querySelector("#diminuirFonte");

const botaoMenu = document.querySelector("#botaoMenu");
const menu = document.querySelector(".menu");
const formularioMensagem = document.querySelector("#formularioMensagem");
const nomeVisitante = document.querySelector("#nomeVisitante");
const mensagemVisitante = document.querySelector("#mensagemVisitante");
const retornoFormulario = document.querySelector("#retornoFormulario");



// Esta variável controla o tamanho das letras. O valor 100 representa 100%.
let tamanhoFonte = 100;

// Esta função abre a janela modal com o conteúdo escolhido.
function abrirModal(tipo) {
    const conteudo = conteudosModal[tipo];

    if (!conteudo) {
        return;
    }

    tituloModal.textContent = conteudo.titulo;
    textoModal.textContent = conteudo.texto;
    modal.classList.add("ativo");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-aberto");
}

// Esta função fecha a janela modal.
function fecharJanelaModal() {
    modal.classList.remove("ativo");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-aberto");
}

// Ativa os botões que possuem data-modal.
document.querySelectorAll("[data-modal]").forEach((botao) => {
    botao.addEventListener("click", () => abrirModal(botao.dataset.modal));
});

// Ativa os botões rápidos do topo.
document.querySelectorAll("[data-acao]").forEach((botao) => {
    botao.addEventListener("click", () => abrirModal(botao.dataset.acao));
});

// Fecha o modal no botão X.
fecharModal.addEventListener("click", fecharJanelaModal);

// Fecha o modal quando o usuário clica fora da janela.
modal.addEventListener("click", (evento) => {
    if (evento.target === modal) {
        fecharJanelaModal();
    }
});

// Botão Transformar: adiciona ou remove a classe que deixa o cenário verde.
document.querySelector("#botaoTransformar").addEventListener("click", () => {
    document.querySelector("#cenarioSustentavel").classList.toggle("transformado");
});

// Atualiza o tamanho das letras usando uma variável CSS criada no arquivo style.css.
function atualizarFonte() {
    document.documentElement.style.setProperty("--tamanho-fonte", `${tamanhoFonte}%`);
}

// Aumenta as letras sem deixar passar de 130%, para manter o layout organizado.
botaoAumentarFonte.addEventListener("click", () => {
    if (tamanhoFonte < 130) {
        tamanhoFonte += 10;
        atualizarFonte();
    }
});

// Diminui as letras sem deixar menor que 90%, mantendo a leitura confortável.
botaoDiminuirFonte.addEventListener("click", () => {
    if (tamanhoFonte > 90) {
        tamanhoFonte -= 10;
        atualizarFonte();
    }
});

// Alterna entre modo claro e modo escuro.
botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("modo-escuro");

    const escuroAtivo = document.body.classList.contains("modo-escuro");
    botaoTema.textContent = escuroAtivo ? "Modo claro" : "Modo escuro";
    botaoTema.setAttribute("aria-pressed", escuroAtivo.toString());
});


// Abre e fecha o menu hamburger no celular.
botaoMenu.addEventListener("click", () => {
    menu.classList.toggle("aberto");

    const menuAberto = menu.classList.contains("aberto");
    botaoMenu.textContent = menuAberto ? "×" : "☰";
    botaoMenu.setAttribute("aria-label", menuAberto ? "Fechar menu" : "Abrir menu");
    botaoMenu.setAttribute("aria-expanded", menuAberto.toString());
});

// Fecha o menu depois que a pessoa escolhe uma seção.
document.querySelectorAll(".links-menu a").forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("aberto");
        botaoMenu.textContent = "☰";
        botaoMenu.setAttribute("aria-label", "Abrir menu");
        botaoMenu.setAttribute("aria-expanded", "false");
    });
});

// Formulário de participação: mostra uma confirmação personalizada na própria página.
formularioMensagem.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = nomeVisitante.value.trim();
    const mensagem = mensagemVisitante.value.trim();

    if (nome === "" || mensagem === "") {
        retornoFormulario.textContent = "Preencha seu nome e sua mensagem antes de enviar.";
        return;
    }

    retornoFormulario.textContent = `Mensagem enviada! Obrigado pela participação, ${nome}. Sua ideia ajuda a fortalecer um futuro mais sustentável.`;
    formularioMensagem.reset();
});

