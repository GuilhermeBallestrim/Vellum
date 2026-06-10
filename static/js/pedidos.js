document.addEventListener('DOMContentLoaded', function() {
    
    const linhasRecentes = document.querySelectorAll('.linha-recente');
    linhasRecentes.forEach(linha => {
        linha.addEventListener('click', function() {
            const idPedido = this.querySelector('.id').innerText;
            const cliente = this.querySelector('.cliente').innerText;
            console.log('Abrindo detalhes do pedido #' + idPedido + ' - Cliente: ' + cliente);
         
            alert('Detalhes do Pedido #' + idPedido + '\nCliente: ' + cliente);
        });
    });

    const btnVerTodos = document.querySelector('.ver-todos');
    if (btnVerTodos) {
        btnVerTodos.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Navegando para a lista completa de pedidos...');
        });
    }

    const cards = document.querySelectorAll('.card-pedido');
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