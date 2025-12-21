
   const form = document.querySelector('form');
   const submitButton = form.querySelector('button[type="submit"]');
   const nomeInput = document.querySelector('input[name="input1"]');
   const dataNascimentoInput = document.querySelector('input[name="input2"]');
  
 
    // Função para exibir o toast
    function showToast(message, isSuccess = false) {
        const toastElement = document.getElementById("toast-notification");
        toastElement.textContent = message;
        
        // Define a cor baseada no sucesso ou erro
        if (isSuccess) {
            toastElement.classList.add("success");
        } else {
            toastElement.classList.remove("success");
        }

        toastElement.classList.add("show");
        
        // Remove a notificação após 3 segundos
        setTimeout(() => { 
            toastElement.classList.remove("show"); 
        }, 3000);
    }

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário para validar antes

    let isValid = false; 

    if (nomeInput.value === "Maria Eduarda Feijo Pereira") {
        showToast("Bem-vinda, " + nomeInput.value + "!" + "Nome lindo!", true);
        isValid = true;
        if(isValid) showToast("Nome lindo :)", true);
    } else {
        showToast("Nome incorreto. Verifique a grafia. sem acentos, primeira letra maiúscula em cada palavra", false);
    }

    // segunda validação
    // O valor do input date vem como AAAA-MM-DD
    if (dataNascimentoInput.value === "2008-01-30") {
        if(isValid) showToast("Data especial encontrada! :)", true);
    }
    if (dataNascimentoInput.value === "2008-01-31") {
        if(isValid) showToast("Data especial encontrada! :)", true);
    }

    if (isValid) {
        setTimeout(function() {
            window.location.href = "paginaFinal.html";
        }, 5000);
    }
});
