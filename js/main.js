const sr = ScrollReveal({
    origin: 'top',
    distance: '1px',
    duration: 2000,
    reset: true
})

ScrollReveal().reveal('.cabecalho_titulo, .cabecalho_pesquisa', { delay: 200 });
ScrollReveal().reveal('.card , .conteudo', { delay: 200 });