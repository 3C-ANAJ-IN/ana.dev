document.body.style.zoom = "67%"




// Função para abrir o popup
function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    const pageContent = document.getElementById('page-content');
    
    popup.style.display = 'block';
    pageContent.classList.add('blur');  // Adiciona o desfoque ao conteúdo

    // Fechar o popup clicando fora dele
    window.onclick = function (event) {
        if (event.target == popup) {
            closePopup(popupId);
        }
    }
}

// Função para fechar o popup
function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    const pageContent = document.getElementById('page-content');
    
    popup.style.display = 'none';
    pageContent.classList.remove('blur');  // Remove o desfoque do conteúdo
}

// PROXIMA PÁGINA

document.querySelectorAll('.btn-proximo').forEach(button => {
    button.addEventListener('click', function () {
        const nextStep = this.getAttribute('data-proximo');
        showStep(nextStep);
    });
});
function showStep(step) {
    const allSteps = document.querySelectorAll('.passo');
    allSteps.forEach(passo => passo.classList.remove('ativo'));
    const currentPasso = document.getElementById('passo-' + step);
    currentPasso.classList.add('ativo');
}