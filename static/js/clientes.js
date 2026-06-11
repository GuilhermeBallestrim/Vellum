document.addEventListener('DOMContentLoaded', function() {
    
    const botoesNota = document.querySelectorAll('.btn--action-badge');
    botoesNota.forEach(botao => {
        botao.addEventListener('click', function() {
            const novaNota = prompt('Digite a nova nota de atendimento:');
            if (novaNota) {
                const balao = document.querySelector('.notes-container__balloon');
                const p = document.createElement('p');
                p.innerText = novaNota;
                balao.appendChild(p);
                alert('Nota adicionada com sucesso!');
            }
        });
    });
    
    const linhasHistorico = document.querySelectorAll('.data-table tbody tr');
    linhasHistorico.forEach(linha => {
        linha.addEventListener('click', function() {
            const idPedido = this.querySelector('td:first-child').innerText;
            console.log('Abrindo detalhes do pedido: ' + idPedido);
            alert('Visualizando detalhes do pedido ' + idPedido);
        });
    });

    console.log('Página de detalhes do cliente carregada.');

});