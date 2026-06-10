document.addEventListener('DOMContentLoaded', function() {
    
    const botoesNota = document.querySelectorAll('.btn-nota, .btn-nota-baixo');
    botoesNota.forEach(botao => {
        botao.addEventListener('click', function() {
            const novaNota = prompt('Digite a nova nota de atendimento:');
            if (novaNota) {
                const balao = document.querySelector('.balao-nota');
                const p = document.createElement('p');
                p.innerText = novaNota;
                balao.appendChild(p);
                alert('Nota adicionada com sucesso!');
            }
        });
    });
    
    const linhasHistorico = document.querySelectorAll('.tabela-historico tbody tr');
    linhasHistorico.forEach(linha => {
        linha.addEventListener('click', function() {
            const idPedido = this.querySelector('td:first-child').innerText;
            console.log('Abrindo detalhes do pedido: ' + idPedido);
            alert('Visualizando detalhes do pedido ' + idPedido);
        });
    });

    console.log('Página de detalhes do cliente carregada.');

});