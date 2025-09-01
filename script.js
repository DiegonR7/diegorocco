document.getElementById('contato-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede envio real
    alert('Formulário enviado! Obrigado pelo contato.');
    this.reset(); // Limpa o formulário
});
