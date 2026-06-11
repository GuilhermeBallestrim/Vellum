// utilizaçao de IA para realizar a parte de js, pois a funçao que utilizamos iria ser necessario o uso dele 
document.addEventListener('DOMContentLoaded', function() {
    
    const botaoEsqueci = document.getElementById('botaoEsqueci');
    const botaoFechar = document.getElementById('botaoFechar');
    const painelSenha = document.getElementById('painelSenha');
    const fundoEscuro = document.getElementById('fundoEscuro');
    const btnCriarConta = document.getElementById('btnCriarConta');
    const submitEntraConta = document.getElementById('submitEntraConta');
    
    function abrirPainel(evento) {
        evento.preventDefault(); 
        painelSenha.classList.add('side-panel--open');
        fundoEscuro.classList.add('backdrop--visible');
        document.body.style.overflow = 'hidden';
    }
    
    function fecharPainel() {
        painelSenha.classList.remove('side-panel--open');
        fundoEscuro.classList.remove('backdrop--visible');
        document.body.style.overflow = 'auto';
    }
    
    botaoEsqueci.addEventListener('click', abrirPainel);
    botaoFechar.addEventListener('click', fecharPainel);
    
    fundoEscuro.addEventListener('click', fecharPainel);
    
    if (btnCriarConta) {
        btnCriarConta.addEventListener('click', function() {
            window.location.href = 'dashboard.html';
        });
    }

    if (submitEntraConta) {
        submitEntraConta.addEventListener('click', function() {
            window.location.href = 'dashboard.html';
        });
    }
    
    document.getElementById('formularioLogin').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Login enviado!');
    });
    
    document.getElementById('formularioSenha').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('emailSenha').value;
        
        if (email === 'adm@email.com') {
            alert('Acesso administrativo detectado. Redirecionando...');
            window.location.href = 'dashboard.html';
        } else {
            alert('Link de recuperação enviado para: ' + email);
            fecharPainel();
        }
    });

});