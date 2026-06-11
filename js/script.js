const conteudosModal = {
    solar: {
        titulo: "Energia Solar",
        texto: "A energia solar transforma a luz do sol em eletricidade e pode ser usada em propriedades rurais, escolas, agroindústrias e sistemas de bombeamento de água.\n\nExemplos: placas solares para reduzir a conta de luz de aviários, ordenhadeiras, câmaras frias e irrigação. No campo, isso ajuda a diminuir custos e reduzir a dependência de fontes mais poluentes."
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

const modal = document.querySelector("#modal");
const tituloModal = document.querySelector("#tituloModal");
const textoModal = document.querySelector("#textoModal");
const fecharModal = document.querySelector("#fecharModal");
const botaoTema = document.querySelector("#alternarTema");
const botaoAumentarFonte = document.querySelector("#aumentarFonte");
const botaoDiminuirFonte = document.querySelector("#diminuirFonte");
const formularioMensagem = document.getElementById("formularioMensagem");
const nomeVisitante = document.getElementById("nomeVisitante");
const mensagemVisitante = document.getElementById("mensagemVisitante");
const retornoFormulario = document.getElementById("retornoFormulario");

let tamanhoFonte = 100;

function abrirModal(tipo) {
    const conteudo = conteudosModal[tipo];
    if (!conteudo) return;

    tituloModal.textContent = conteudo.titulo;
    textoModal.textContent = conteudo.texto;
    modal.classList.add("ativo");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-aberto");
}

function fecharJanelaModal() {
    const iframeExistente = document.querySelector('#modalVideo');
    if (iframeExistente) {
        iframeExistente.remove();
    }
    if (textoModal) {
        textoModal.style.display = '';
    }
    modal.classList.remove("ativo");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-aberto");
}

document.querySelectorAll("[data-modal]").forEach((botao) => {
    botao.addEventListener("click", () => abrirModal(botao.dataset.modal));
});

document.querySelectorAll("[data-acao]").forEach((botao) => {
    botao.addEventListener("click", () => abrirModal(botao.dataset.acao));
});

if (fecharModal) {
    fecharModal.addEventListener("click", fecharJanelaModal);
}

if (modal) {
    modal.addEventListener("click", (evento) => {
        if (evento.target === modal) {
            fecharJanelaModal();
        }
    });
}

const voltarTopo = document.querySelector('.voltar-topo');
if (voltarTopo) {
    voltarTopo.classList.add('escondido');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            voltarTopo.classList.remove('escondido');
            voltarTopo.classList.add('visivel');
        } else {
            voltarTopo.classList.add('escondido');
            voltarTopo.classList.remove('visivel');
        }
    });
    voltarTopo.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#inicio')?.scrollIntoView({ behavior: 'smooth' });
    });
}

const botaoTransformar = document.querySelector("#botaoTransformar");
if (botaoTransformar) {
    botaoTransformar.addEventListener("click", () => {
        document.querySelector("#cenarioSustentavel").classList.toggle("transformado");
    });
}

function atualizarFonte() {
    document.documentElement.style.setProperty("--tamanho-fonte", `${tamanhoFonte}%`);
}

if (botaoAumentarFonte) {
    botaoAumentarFonte.addEventListener("click", () => {
        if (tamanhoFonte < 130) {
            tamanhoFonte += 10;
            atualizarFonte();
        }
    });
}

if (botaoDiminuirFonte) {
    botaoDiminuirFonte.addEventListener("click", () => {
        if (tamanhoFonte > 90) {
            tamanhoFonte -= 10;
            atualizarFonte();
        }
    });
}

if (botaoTema) {
    botaoTema.addEventListener("click", () => {
        document.body.classList.toggle("modo-escuro");
        const escuroAtivo = document.body.classList.contains("modo-escuro");
        botaoTema.textContent = escuroAtivo ? "Modo claro" : "Modo escuro";
        botaoTema.setAttribute("aria-pressed", escuroAtivo.toString());
    });
}

const botaoMenu = document.querySelector("#botaoMenu");
const menu = document.querySelector(".menu");

if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", (e) => {
        e.stopPropagation();
        menu.classList.toggle("aberto");
        
        const menuAberto = menu.classList.contains("aberto");
        botaoMenu.textContent = menuAberto ? "✕" : "☰";
        botaoMenu.setAttribute("aria-label", menuAberto ? "Fechar menu" : "Abrir menu");
        botaoMenu.setAttribute("aria-expanded", menuAberto.toString());
    });
}

document.querySelectorAll(".links-menu a").forEach((link) => {
    link.addEventListener("click", () => {
        if (menu && window.innerWidth <= 900) {
            menu.classList.remove("aberto");
            if (botaoMenu) {
                botaoMenu.textContent = "☰";
                botaoMenu.setAttribute("aria-label", "Abrir menu");
                botaoMenu.setAttribute("aria-expanded", "false");
            }
        }
    });
});

document.addEventListener("click", (evento) => {
    const isMobile = window.innerWidth <= 900;
    if (isMobile && menu && menu.classList.contains("aberto")) {
        if (!menu.contains(evento.target) && evento.target !== botaoMenu && !botaoMenu?.contains(evento.target)) {
            menu.classList.remove("aberto");
            if (botaoMenu) {
                botaoMenu.textContent = "☰";
                botaoMenu.setAttribute("aria-label", "Abrir menu");
                botaoMenu.setAttribute("aria-expanded", "false");
            }
        }
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 900 && menu && menu.classList.contains("aberto")) {
        menu.classList.remove("aberto");
        if (botaoMenu) {
            botaoMenu.textContent = "☰";
            botaoMenu.setAttribute("aria-label", "Abrir menu");
            botaoMenu.setAttribute("aria-expanded", "false");
        }
    }
});

if (formularioMensagem) {
    formularioMensagem.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const nome = nomeVisitante?.value.trim() || "";
        const mensagem = mensagemVisitante?.value.trim() || "";

        if (nome === "" || mensagem === "") {
            if (retornoFormulario) {
                retornoFormulario.textContent = "Preencha seu nome e sua mensagem antes de enviar.";
            }
            return;
        }

        if (retornoFormulario) {
            retornoFormulario.textContent = `Mensagem enviada! Obrigado pela participação, ${nome}. Sua ideia ajuda a fortalecer um futuro mais sustentável.`;
        }
        if (formularioMensagem) {
            formularioMensagem.reset();
        }
    });
}