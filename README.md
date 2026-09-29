# Academia Etec - Plataforma Web PWA 

Uma aplicação web funcional desenvolvida para simular a interface de um ginásio moderno de alto padrão. O projeto foca-se na estrutura de UI/UX, oferecendo uma navegação intuitiva através de secções de modalidades, história e uma grelha de planos de subscrição. 

A aplicação foi construída com suporte a **PWA (Progressive Web App)**, permitindo o funcionamento offline através de um Service Worker.

##  Tecnologias Utilizadas

*   **HTML5:** Estruturação semântica do conteúdo.
*   **CSS3:** Estilização com Flexbox, CSS Grid, variáveis e rolamento suave (smooth scroll).
*   **JavaScript (Vanilla):** Lógica de interação dos botões de planos e registo do Service Worker.
*   **PWA:** Implementação de `manifest.json` e `sw.js` (Service Worker) para cache e acesso offline.

##  Funcionalidades

*   **Design Responsivo:** Interface fluida que se adapta a diferentes tamanhos de ecrã.
*   **Acesso Offline:** Os ficheiros principais são guardados em cache pelo Service Worker, permitindo o carregamento da página mesmo sem ligação à internet.
*   **Navegação Fluida:** Rolamento suave ancorado no cabeçalho fixo (Sticky Header).
*   **Grelha de Preços Interativa:** Destaque visual para o plano principal ("Plano Black") com alertas interativos desenvolvidos em JavaScript.

##  Como correr o projeto localmente

1. Clona este repositório:
   ```bash
   git clone 