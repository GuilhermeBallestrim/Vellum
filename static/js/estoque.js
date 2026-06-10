document.addEventListener('DOMContentLoaded', function() {
    
   
    const linhas = document.querySelectorAll('.tabela-estoque tbody tr');
    linhas.forEach(linha => {
        linha.addEventListener('click', function() {
            const nomeProduto = this.querySelector('.coluna-produto span').innerText;
            console.log('Produto selecionado: ' + nomeProduto);
            
        });
    });

    const cards = document.querySelectorAll('.card-resumo');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = '0.3s';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    const btnMenu = document.querySelector('.btn-menu');
    if (btnMenu) {
        btnMenu.addEventListener('click', function() {
            console.log('Menu lateral recolhido/expandido');
        });
    }

});