document.addEventListener('DOMContentLoaded', function() {
    
    const cardsEstatistica = document.querySelectorAll('.card-estatistica');
    cardsEstatistica.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(-5px)';
            this.style.transition = '0.3s';
            this.style.backgroundColor = '#ececec';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.backgroundColor = '#F4F1F1';
        });
    });

    const tituloRelatorio = document.querySelector('.card-grafico-grande h3');
    if (tituloRelatorio) {
        tituloRelatorio.addEventListener('click', function() {
            console.log('Preparando exportação do ' + this.innerText);
            alert('Exportando ' + this.innerText + ' para PDF...');
        });
    }

    console.log('Página de relatórios inicializada.');
});