// utilizaçao de IA para fazer o js
document.addEventListener('DOMContentLoaded', function() {
    
    const btnAdicionar = document.querySelector('.btn--outline-vendas');
    if (btnAdicionar) {
        btnAdicionar.addEventListener('click', function() {
            alert('Abrindo formulário para adicionar novo produto...');
        });
    }

    const itensProdutos = document.querySelectorAll('.product-item');
    itensProdutos.forEach(item => {
        item.addEventListener('click', function() {
            const nome = this.querySelector('.product-item__info p').innerText;
            console.log('Produto selecionado: ' + nome);
            this.style.backgroundColor = '#f0f0f0';
            setTimeout(() => {
                this.style.backgroundColor = '#FFFFFF';
            }, 200);
        });
    });

    console.log('Gráfico de vendas carregado com sucesso.');

});