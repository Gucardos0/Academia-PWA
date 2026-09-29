// 1. Registo do Service Worker para o PWA (Modo Offline)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registado com sucesso!');
        })
        .catch(error => {
          console.log('Falha ao registar o Service Worker:', error);
        });
    });
}

// 2. Interatividade dos botões de planos
document.addEventListener("DOMContentLoaded", () => {
    const botoesAssinar = document.querySelectorAll('.btn-assinar');

    botoesAssinar.forEach(botao => {
        botao.addEventListener('click', (evento) => {
            // Vai buscar o nome do plano ao elemento anterior (h3)
            const nomePlano = evento.target.parentElement.querySelector('h3').innerText;
            alert(`Fantástico! Escolheste o ${nomePlano}. Vamos redirecionar-te para o registo.`);
        });
    });
});

