document.addEventListener('DOMContentLoaded', function() {    
    
    const inputs = document.querySelectorAll('input[type="text"], select');
    inputs.forEach(input => {
        input.addEventListener('change', function() {
            console.log('Alteração detectada em: ' + this.previousElementSibling?.innerText || 'campo');
            
        });
    });


});