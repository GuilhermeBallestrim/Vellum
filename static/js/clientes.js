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

});