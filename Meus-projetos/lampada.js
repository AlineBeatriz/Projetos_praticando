let lampLigarDesligar = document.getElementById('lampLigarDesligar');
let lamp = document.getElementById('lamp');

// Função de verificação: 
function isLampBroken() {
    return lamp.src.indexOf('lampadaQuebrada') > -1;
}
function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './img/lampadaLigada.png';
        resetButton(); // Restaura o botão para seu estado original se a lâmpada não estiver quebrada
    }
}
function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './img/lampadaDesligada.png';
        resetButton(); // Restaura o botão para seu estado original se a lâmpada não estiver quebrada
    }
}
function lampBroken() {
    lamp.src = './img/lampadaQuebrada.png';
    lampLigarDesligar.textContent = 'Reiniciar'; // Altera o texto do botão para 'Reiniciar'

    // Adiciona o ouvinte de evento para reiniciar a página
    lampLigarDesligar.addEventListener('click', reloadPage);
}
function reloadPage() {
    location.reload(); // Recarrega a página
}
function resetButton() {
    // Remove o ouvinte de evento de reinício se a lâmpada não estiver quebrada
    lampLigarDesligar.removeEventListener('click', reloadPage);

    // Restaura o texto do botão para 'Ligar' ou 'Desligar', conforme necessário
    if (lampLigarDesligar.textContent === 'Reiniciar') {
        lampLigarDesligar.textContent = 'Ligar';
    }
}

function lampOnOff() {
    if (lampLigarDesligar.textContent === 'Ligar') {
        lampOn();
        lampLigarDesligar.textContent = 'Desligar';
    } else {
        lampOff();
        lampLigarDesligar.textContent = 'Ligar';
    }
}

// Eventos: ao clicar em ligar ou desligar
lampLigarDesligar.addEventListener('click', lampOnOff);
// Eventos: ao passar o mouse ligar e desligar
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
// Evento: duplo clique quebra a lâmpada
lamp.addEventListener('dblclick', lampBroken);