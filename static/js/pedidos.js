document.addEventListener('DOMContentLoaded', function() {
    
    const linhasRecentes = document.querySelectorAll('.list-panel__row');
    linhasRecentes.forEach(linha => {
        linha.addEventListener('click', function() {
            const idPedido = this.querySelector('.list-panel__cell--bold').innerText;
            const cliente = this.querySelector('.cliente').innerText;
            console.log('Abrindo detalhes do pedido #' + idPedido + ' - Cliente: ' + cliente);
         
            alert('Detalhes do Pedido #' + idPedido + '\nCliente: ' + cliente);
        });
    });

    const btnVerTodos = document.querySelector('.list-panel__link');
    if (btnVerTodos) {
        btnVerTodos.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Navegando para a lista completa de pedidos...');
        });
    }

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#ececec';
            this.style.transition = '0.2s';
        });
        card.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#F4F1F1';
        });
    });

});