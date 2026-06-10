document.addEventListener('DOMContentLoaded', function() {    
    
    const inputs = document.querySelectorAll('input[type="text"], select');
    inputs.forEach(input => {
        input.addEventListener('change', function() {
            console.log('Alteração detectada em: ' + this.previousElementSibling?.innerText || 'campo');
            
        });
    });

    const btnAdicionar = document.querySelector('.btn-azul-pequeno');
    if (btnAdicionar) {
        btnAdicionar.addEventListener('click', function() {
            alert('Abrindo formulário para novo membro da equipe...');
        });
    }










});