//ANA JÚLIA RIBEIRO FERREIRA 3C - 27.05.25


//Função para abrir o popup
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

