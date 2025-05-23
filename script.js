// PROXIMA PÁGINA

document.querySelectorAll('.btn-proximo').forEach(button => {
    button.addEventListener('click', function () {
        const projectNumber = this.closest('.projeto').querySelector('span').textContent;
        switch (projectNumber) {
            case '1':
                window.location.href = 'ansiedade.html';
                break;
            case '2':
                window.location.href = 'tudo-sobre-baleias.html';
                break;
            case '3':
                window.location.href = 'the-dash-of-us.html';
                break;
            case '4':
                window.location.href = 'stray-kids-streaming.html';
                break;
            case '5':
                window.location.href = 'assinatura-stayplus.html';
                break;
            case '6':
                window.location.href = 'livraria-digital.html';
                break;
            default:
                console.log('No page defined for this project');
        }
    });
});


// Função para abrir o popup
function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    const pageContent = document.getElementById('page-content');

    popup.style.display = 'block';

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
}

