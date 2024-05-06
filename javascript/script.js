function validarFormulario(event) {
    event.preventDefault();

    let nomeInput = document.getElementById('nome');
    let emailInput = document.getElementById('email');
    let telefoneInput = document.getElementById('telefone');

    const nomeRegex = /^[^\d]{1,100}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefoneRegex = /^[5-5]{2} [0-9]{2} [0-9]{4,5}-[0-9]{4}$/;

    if (!nomeRegex.test(nomeInput.value)) {
        alert("Por favor, insira um nome válido (máximo de 100 caracteres e sem números).");
        nomeInput.focus();
        return;
    }
    else if (!emailRegex.test(emailInput.value)) {
        alert("Por favor, insira um email válido.");
        emailInput.focus();
        return;
    }else if (!telefoneRegex.test(telefoneInput.value)) {
        alert("Por favor, insira um número de telefone válido (no formato XX XXXXX-XXXX).");
        telefoneInput.focus();
        return;
    }

    alert("Formulário válido! Dados enviados com sucesso.");
}
