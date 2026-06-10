document.addEventListener('DOMContentLoaded', function() {
    
   
    const linhas = document.querySelectorAll('.tabela-estoque tbody tr');
    linhas.forEach(linha => {
        linha.addEventListener('click', function() {
            const nomeProduto = this.querySelector('.coluna-produto span').innerText;
            console.log('Produto selecionado: ' + nomeProduto);
            
        });
    });

  

});