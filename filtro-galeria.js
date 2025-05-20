document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Função para filtrar itens
    function filterGallery(filterValue) {
      galleryItems.forEach(item => {
        if (item.classList.contains(filterValue)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }
    
    // Inicializa mostrando apenas itens da primeira categoria (nails)
    filterGallery('nails');
    
    // Adiciona event listeners aos botões
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class de todos os botões
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Adiciona active class ao botão clicado
        button.classList.add('active');
        
        // Filtra os itens da galeria
        const filterValue = button.getAttribute('data-filter');
        filterGallery(filterValue);
      });
    });
  });