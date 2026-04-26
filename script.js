document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Inicializa AOS (Animate On Scroll)
    AOS.init({
        duration: 1000, // Duração da animação (1s)
        once: true,     // Anima apenas uma vez ao rolar
        offset: 100     // Começa a animação 100px antes do elemento aparecer
    });

    // 2. Movimento das Lanternas com o Mouse (Parallax)
    const hero = document.querySelector('.hero-section');
    const lanterns = document.querySelectorAll('.parallax-lantern');

    hero.addEventListener('mousemove', (e) => {
        // Calcula a posição do mouse relativa ao centro da tela
        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;
        
        // Move cada lanterna em uma velocidade diferente (baseada na classe)
        lanterns.forEach((lantern, index) => {
            // Define velocidades diferentes para cada lanterna
            const speeds = [40, 60, 25, 50]; 
            const speed = speeds[index] || 30;

            const xOffset = x * speed;
            const yOffset = y * speed;
            
            lantern.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });

    // 3. Lógica do Accordion (Matérias)
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');

            // Fecha todos os outros accordions (opcional - remova se quiser abrir múltiplos)
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Abre o atual se não estava ativo
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // 4. Scroll Suave do Botão Explorar
    const btnExplorar = document.getElementById('btn-explorar');
    if (btnExplorar) {
        btnExplorar.addEventListener('click', () => {
            document.getElementById('portfolio-content').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }
});

function rolarCarrossel(botao, direcao) {
    const caixa = botao.closest('.caixa-carrossel');
    const trilha = caixa.querySelector('.trilha-imagens');
    const largura = caixa.clientWidth;
    
    trilha.scrollBy({ 
        left: direcao * largura, 
        behavior: 'smooth' 
    });
}