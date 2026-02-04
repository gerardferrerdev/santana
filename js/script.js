// js/script.js - CÓDIGO FINAL DE LIGHTBOX

document.addEventListener('DOMContentLoaded', (event) => {
    
    //ao clicar na imagem e espandir, o codigo respectivo é esse santana
    // 1. Obter referências dos elementos do Modal
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const closeBtn = document.getElementsByClassName("close-button")[0];

    // 2. Obter todos os itens do portfólio
    // Selecionamos todos os links com a classe .portfolio-item
    const portfolioLinks = document.querySelectorAll(".portfolio-item");

    // 3. Adicionar um 'ouvinte de evento' de clique a cada item/link
    portfolioLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            
            // Impede o link de navegar (ir para o topo da página)
            e.preventDefault(); 
            
            // Encontrar a imagem (<img>) dentro do link clicado
            const clickedImage = this.querySelector('img'); 

            if (clickedImage) {
                // A. Abrir o modal (tornar visível)
                modal.style.display = "block";
                
                // B. Definir o caminho da imagem no modal 
                modalImg.src = clickedImage.src;
                
                // C. Definir a descrição (caption)
                captionText.innerHTML = clickedImage.alt;
            }
        });
    });

    // 4. Fechar o Modal ao clicar no 'X' (close-button)
    closeBtn.addEventListener('click', function() { 
        modal.style.display = "none";
    });

    // 5. Fechar o Modal ao clicar fora da imagem (no fundo escuro)
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});