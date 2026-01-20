// Base de datos de productos (30 productos)

        // Smooth scrolling para los enlaces internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Cambiar estilo de navbar al hacer scroll
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.nexo-navbar');
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = 'rgba(13, 110, 253, 0.98)';
            } else {
                navbar.style.backgroundColor = 'rgba(13, 110, 253, 0.95)';
            }
        });
        
        // Función para abrir el modal con la imagen en grande
        function openImageModal(imgElement) {
            const modalImage = document.getElementById('modalImage');
            modalImage.src = imgElement.src;
            modalImage.alt = imgElement.alt;
            
            // Actualizar el título del modal con el texto alternativo
            document.getElementById('imageModalLabel').textContent = imgElement.alt;
            
            // Guardar la referencia a la imagen para descargar
            modalImage.dataset.originalSrc = imgElement.src;
            modalImage.dataset.filename = imgElement.alt.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.jpg';
        }
        
        // Función para descargar la imagen
        function downloadImage() {
            const modalImage = document.getElementById('modalImage');
            const link = document.createElement('a');
            link.href = modalImage.src;
            link.download = modalImage.dataset.filename || 'imagen_nexo_pc.jpg';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        
        // Agregar evento de clic a todas las imágenes de los carruseles
        document.addEventListener('DOMContentLoaded', function() {
            // Hacer que todas las imágenes de los carruseles sean clickeables
            const carouselImages = document.querySelectorAll('.carousel-item img');
            carouselImages.forEach(img => {
                // Asegurarse de que todas las imágenes tengan el evento onclick
                if (!img.hasAttribute('onclick')) {
                    img.setAttribute('onclick', 'openImageModal(this)');
                    img.setAttribute('data-bs-toggle', 'modal');
                    img.setAttribute('data-bs-target', '#imageModal');
                }
                
                // Agregar estilo de cursor
                img.style.cursor = 'pointer';
            });
            
            // También hacer clickeable la imagen principal si existe
            const mainImage = document.querySelector('.hero-section img');
            if (mainImage) {
                mainImage.style.cursor = 'pointer';
                mainImage.addEventListener('click', function() {
                    openImageModal(this);
                    // Abrir el modal manualmente
                    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
                    imageModal.show();
                });
            }
        });
        
        // Mejorar el zoom en imágenes en dispositivos táctiles
        document.addEventListener('touchstart', function(e) {
            if (e.target.tagName === 'IMG' && e.target.classList.contains('modal-image')) {
                // Permitir zoom táctil en imágenes del modal
                e.target.style.touchAction = 'manipulation';
            }
        });
    