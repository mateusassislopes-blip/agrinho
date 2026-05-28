// Conteúdos dos modais. Para mudar as mensagens, edite os textos abaixo.
const conteudosModal = {
    solar: {
        titulo: "Energia Solar",
        texto: "A energia limpa ajuda o agro a produzir sem agredir o meio ambiente."
    },
    reflorestamento: {
        titulo: "Reflorestamento",
        texto: "Preservar hoje garante recursos para o futuro."
    },
    agua: {
        titulo: "Economia de Água",
        texto: "Tecnologias inteligentes evitam desperdícios."
    },
    curiosidade: {
        titulo: "Você sabia?",
        texto: "O agro conecta campo e cidade: alimento, transporte, indústria, ciência e comércio trabalham juntos."
    },
    impacto: {
        titulo: "Impacto ambiental",
        texto: "Quando a produção respeita o solo, a água e as matas, a cidade cresce com mais qualidade de vida."
    },
    solucao: {
        titulo: "Solução sustentável",
        texto: "Sensores de irrigação, energia solar e recuperação de nascentes são tecnologias que ajudam a preservar."
    },
    problemas: {
        titulo: "Principais problemas",
        texto: "Desperdício de água, desgaste do solo, resíduos descartados de forma incorreta e perda de áreas verdes afetam a produção, a saúde e a qualidade de vida."
    },
    solucoes: {
        titulo: "Soluções sustentáveis",
        texto: "Ações como irrigação inteligente, plantio direto, compostagem, coleta seletiva e reflorestamento ajudam a reduzir impactos e proteger o futuro."
    },
    solo: {
        titulo: "Preservação do solo",
        texto: "Solo protegido segura mais umidade, sofre menos erosão e mantém nutrientes importantes para produzir alimentos com qualidade."
    },
    residuos: {
        titulo: "Redução da poluição",
        texto: "Separar resíduos, reaproveitar materiais e evitar descarte irregular diminui a contaminação do ambiente e melhora a vida da comunidade."
    },
    biodiversidade: {
        titulo: "Biodiversidade",
        texto: "A diversidade de plantas, animais e microrganismos mantém o equilíbrio natural e ajuda no controle de pragas, na fertilidade do solo e na preservação da água."
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
}

// Esta função fecha a janela modal.
function fecharJanelaModal() {
    modal.classList.remove("ativo");
    modal.setAttribute("aria-hidden", "true");
}

// Ativa os botoes que possuem data-modal.
document.querySelectorAll("[data-modal]").forEach((botao) => {
    botao.addEventListener("click", () => abrirModal(botao.dataset.modal));
});

// Ativa os botoes rapidos do topo.
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
