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




});