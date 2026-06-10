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

    const switches = document.querySelectorAll('input[type="checkbox"]');
    switches.forEach(sw => {
        sw.addEventListener('click', function() {
            const status = this.checked ? 'ativada' : 'desativada';
            console.log('Notificação ' + status);
        });
    });

    const linksMenu = document.querySelectorAll('.navegacao a');
    linksMenu.forEach(link => {
        link.addEventListener('click', function() {
            linksMenu.forEach(l => l.classList.remove('item-ativo'));
            this.classList.add('item-ativo');
        });
    });

});