// Base de datos de productos (30 productos)
const products = [
    {
        id: 1,
        name: "Arduino Uno R3 Original",
        description: "Placa de desarrollo Arduino Uno R3 original con microcontrolador ATmega328P.",
        price: 180,
        category: "arduino",
        image: "https://tse2.mm.bing.net/th/id/OIP._PEvn1hYd_cp1z4Q9Ak7hQHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1,3&o=7&rm=3",
        stock: 15,
        isNew: true
    },
    {
        id: 2,
        name: "Sensor Ultrasónico HC-SR04",
        description: "Sensor de distancia ultrasónico para medición de 2cm a 400cm.",
        price: 35,
        category: "sensores",
        image: "https://th.bing.com/th/id/OIP.0Q4zf-zf3mG8mgsHPFeKlAHaHa?w=190&h=190&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        stock: 42
    },
    {
        id: 3,
        name: "Motor DC 12V con Encoder",
        description: "Motor DC de 12V con encoder de 300 RPM para aplicaciones de robótica.",
        price: 95,
        category: "motores",
        image: "https://th.bing.com/th/id/OIP.8KjCpm0eXLW_E9QoQUwg7AHaHa?w=210&h=210&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        stock: 23
    },
    {
        id: 4,
        name: "Kit de Inicio Arduino Completo",
        description: "Kit completo con Arduino Uno, sensores, LEDs, resistencias y más.",
        price: 420,
        category: "kits",
        image: "https://th.bing.com/th/id/OIP.NUFwQM52Ze-V7Aopj_b5mwHaHa?w=200&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        stock: 8
    },
    {
        id: 5,
        name: "Arduino Mega 2560 R3",
        description: "Placa Arduino Mega con mayor memoria y más pines de E/S.",
        price: 280,
        category: "arduino",
        image: "https://th.bing.com/th/id/OIP.yqC0xGVI99tHOaUEhHoGkAHaGA?w=221&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        stock: 12
    },
    {
        id: 6,
        name: "Sensor DHT22 Temperatura/Humedad",
        description: "Sensor digital de temperatura y humedad de alta precisión.",
        price: 55,
        category: "sensores",
        image: "https://th.bing.com/th/id/OIP.tKg_cqH4lGhlCACtSyld3wHaGO?w=241&h=203&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        stock: 31
    },
    {
        id: 7,
        name: "Servomotor MG996R Alta Torque",
        description: "Servomotor de alta torque y velocidad para brazos robóticos.",
        price: 75,
        category: "motores",
        image: "https://tse1.mm.bing.net/th/id/OIP.qn1hZLRDy8s5n2l2-TUD6AHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        stock: 18
    },
    {
        id: 8,
        name: "Módulo Bluetooth HC-05",
        description: "Módulo Bluetooth para comunicación inalámbrica con Arduino.",
        price: 45,
        category: "modulos",
        image: "https://th.bing.com/th/id/OIP.JkPwTC0aA4m4Pa6R2mDJSQHaFh?w=252&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        stock: 27
    },
    {
        id: 9,
        name: "Raspberry Pi 4 Model B 4GB",
        description: "Placa Raspberry Pi 4 con 4GB RAM, ideal para proyectos avanzados.",
        price: 650,
        category: "raspberry",
        image: "https://th.bing.com/th/id/OIP.AqbMVg88672GzWP3v63dNgHaFj?w=255&h=191&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        stock: 6,
        isNew: true
    },
    {
        id: 10,
        name: "Kit de 37 Sensores para Arduino",
        description: "Kit completo con 37 sensores diferentes para múltiples aplicaciones.",
        price: 320,
        category: "kits",
        image: "https://th.bing.com/th/id/OIP.RT01N-Azwe7rXptPu-aEGwHaHa?w=197&h=196&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        stock: 14
    },
    {
        id: 11,
        name: "Motor Paso a Paso NEMA 17",
        description: "Motor paso a paso NEMA 17 con driver para impresión 3D y CNC.",
        price: 120,
        category: "motores",
        image: "https://th.bing.com/th/id/OIP.EZFS-S2vXmBZq5YRegbwAAHaHU?w=183&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        stock: 22
    },
    {
        id: 12,
        name: "Módulo WiFi ESP8266 ESP-01",
        description: "Módulo WiFi para conectar proyectos Arduino a Internet.",
        price: 38,
        category: "modulos",
        image: "https://th.bing.com/th/id/OIP.aun5Wyx9K2OsXn1HuXOqrgHaHa?w=197&h=197&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        stock: 45
    },
    {
        id: 13,
        name: "Pantalla LCD 16x2 I2C",
        description: "Pantalla LCD 16x2 con interfaz I2C para fácil conexión.",
        price: 42,
        category: "modulos",
        image: "https://th.bing.com/th/id/OIP.xH87zcOSRvtCXZ-Gq7YUhgHaHa?w=188&h=188&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        stock: 30
    },
    {
        id: 14,
        name: "Arduino Nano CH340",
        description: "Arduino Nano compacto ideal para proyectos pequeños.",
        price: 65,
        category: "arduino",
        image: "https://th.bing.com/th/id/OIP.NnU3lJmULrDxW8-JoIqjuAHaFj?w=282&h=212&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        stock: 25
    },
    {
        id: 15,
        name: "Sensor de Gas MQ-2",
        description: "Sensor de gas inflamable y humo para sistemas de seguridad.",
        price: 28,
        category: "sensores",
        image: "https://th.bing.com/th/id/OIP.T7ct8Iktu3Wp_iawsg5nLgHaHa?w=162&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        stock: 40
    },
    {
        id: 16,
        name: "Kit Herramientas Electrónica",
        description: "Set completo de herramientas para electrónica y robótica.",
        price: 150,
        category: "herramientas",
        image: "https://th.bing.com/th/id/OIP.CLoKakqJ_jK83tGj-MleAQHaER?w=329&h=189&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        stock: 12
    },
    {
        id: 17,
        name: "Fuente de Poder 12V 5A",
        description: "Fuente de alimentación regulada 12V 5A para proyectos.",
        price: 85,
        category: "otros",
        image: "https://th.bing.com/th/id/OIP.a545F0v6Mx65iioIvtNBywHaHa?w=204&h=204&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        stock: 18
    },
    {
        id: 18,
        name: "Relé 5V 10A 2 Canales",
        description: "Módulo de relé de 2 canales para control de dispositivos de alto voltaje.",
        price: 32,
        category: "modulos",
        image: "https://th.bing.com/th/id/OIP.8xFtYtexGd8ThJCvvFj1zgHaFy?w=266&h=209&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        stock: 35
    },
    {
        id: 19,
        name: "Sensor de Movimiento PIR HC-SR501",
        description: "Sensor de movimiento pasivo infrarrojo para sistemas de seguridad.",
        price: 29,
        category: "sensores",
        image: "https://th.bing.com/th/id/OIP.xCk3HuQzUFLCCSE5oIYz3gHaGG?w=232&h=191&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        stock: 28
    },
    {
        id: 20,
        name: "Motor DC 3-6V con Ruedas",
        description: "Motor DC pequeño con ruedas para robots móviles.",
        price: 25,
        category: "motores",
        image: "https://th.bing.com/th/id/OIP.rB6SOXb_RnzL7_c5tPWJVwHaHa?w=164&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        stock: 50
    },
    {
        id: 21,
        name: "Raspberry Pi Zero W",
        description: "Versión mini de Raspberry Pi con WiFi y Bluetooth integrados.",
        price: 180,
        category: "raspberry",
        image: "https://th.bing.com/th/id/OIP.DPYhFKFSpAIyzfwvqUbk0gHaHa?w=177&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        stock: 9
    },
    {
        id: 22,
        name: "Sensor de Sonido LM393",
        description: "Sensor de sonido con micrófono para detección de ruido.",
        price: 18,
        category: "sensores",
        image: "https://th.bing.com/th/id/OIP.ipp_DNdiBHg3VZOQ3aDL2QHaHa?w=199&h=199&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        stock: 60
    },
    {
        id: 23,
        name: "Protoboard 830 Puntos",
        description: "Protoboard de 830 puntos para prototipado de circuitos.",
        price: 22,
        category: "herramientas",
        image: "https://th.bing.com/th/id/OIP.2PIyqz9D5TJnKnPIX5aXUwHaHa?w=209&h=209&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3g",
        stock: 45
    },
    {
        id: 24,
        name: "Kit de Cables Dupont",
        description: "Set de cables jumper macho-hembra para conexiones.",
        price: 15,
        category: "herramientas",
        image: "https://th.bing.com/th/id/OIP.pwYDtZTHyl3cs2r4YijzpAAAAA?w=209&h=209&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        stock: 80
    },
    {
        id: 25,
        name: "Sensor de Humedad del Suelo",
        description: "Sensor para medir humedad en la tierra de plantas.",
        price: 20,
        category: "sensores",
        image: "https://th.bing.com/th/id/OIP.UpgZonVO-Pg2c-grst9gxgHaHa?w=203&h=203&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        stock: 38
    },
    {
        id: 26,
        name: "LED RGB 5mm Común Ánodo",
        description: "LED RGB de 5mm con 4 pines para efectos de color.",
        price: 8,
        category: "otros",
        image: "https://th.bing.com/th/id/OIP.FgeQctEE6koG0GHZVP728gHaGF?w=236&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        stock: 100
    },
    {
        id: 27,
        name: "Resistencias 1/2 W",
        description: "Resistencias de diferentes valores.",
        price: 320,
        category: "Resistencias",
        image: "https://th.bing.com/th/id/OIP.mTo975zy1CAutZ1Blc60FgHaHa?w=178&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        stock: 7,
        isNew: true
    },
    {
        id: 28,
        name: "Módulo RFID RC522",
        description: "Módulo lector de tarjetas RFID para sistemas de acceso.",
        price: 48,
        category: "modulos",
        image: "https://th.bing.com/th/id/OIP.N5klSpCAC0zRjBKr_ID02gHaHa?w=206&h=207&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        stock: 20
    },
    {
        id: 29,
        name: "Conector de fuente de energia para protoboard",
        description: "Fuente de alimenatcion para protoboard.",
        price: 280,
        category: "kits",
        image: "https://th.bing.com/th/id/OIP.1rhWBrcDZPnqm4npu8gLZAHaHa?w=167&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        stock: 10
    },
    {
        id: 30,
        name: "Estación de Soldadura 60W",
        description: "Estación de soldadura regulable para trabajo profesional.",
        price: 210,
        category: "herramientas",
        image: "https://th.bing.com/th/id/OIP.raVWBQQtMTURGA1Nkk7dNAHaHX?w=204&h=203&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        stock: 8
    }
];

// Carrito de compras
let cart = [];
const SHIPPING_COST = 15;

// Inicialización al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    renderProducts(products);
    setupEventListeners();
    updateCartCount();
    createWhatsAppButton();
});

// Crear botón flotante de WhatsApp
function createWhatsAppButton() {
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = "https://wa.me/59175842510?text=Hola Bolivia Robotics, tengo una consulta sobre sus productos";
    whatsappBtn.className = "whatsapp-float";
    whatsappBtn.target = "_blank";
    whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    whatsappBtn.title = "Consulta por WhatsApp";
    document.body.appendChild(whatsappBtn);
}

// Renderizar productos en el catálogo
function renderProducts(productsToRender) {
    const container = document.getElementById('productsContainer');
    container.innerHTML = '';
    
    if (productsToRender.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-search fa-3x text-muted mb-3"></i>
                <h4>No se encontraron productos</h4>
                <p class="text-muted">Intenta con otros términos de búsqueda o categorías.</p>
            </div>
        `;
        return;
    }
    
    productsToRender.forEach(product => {
        const stockClass = product.stock < 10 ? 'stock-low' : 'stock-available';
        const stockText = product.stock < 10 ? `Stock: ${product.stock} (Bajo)` : `Stock: ${product.stock}`;
        const newBadge = product.isNew ? '<span class="badge-new">Nuevo</span>' : '';
        
        const productCard = `
            <div class="col-md-6 col-lg-4 col-xl-3 mb-4">
                <div class="card product-card h-100">
                    ${newBadge}
                    <img src="${product.image}" class="card-img-top product-img" alt="${product.name}" 
                         onerror="this.src='https://via.placeholder.com/300x200?text=Imagen+no+disponible'">
                    <div class="card-body d-flex flex-column">
                        <span class="product-category">${getCategoryName(product.category)}</span>
                        <h5 class="product-title">${product.name}</h5>
                        <p class="card-text flex-grow-1">${product.description}</p>
                        <div class="d-flex justify-content-between align-items-center mt-3">
                            <div class="product-price">Bs. ${product.price.toFixed(2)}</div>
                            <div class="small ${stockClass}">${stockText}</div>
                        </div>
                        <button class="btn btn-add-to-cart mt-3" data-id="${product.id}" ${product.stock === 0 ? 'disabled' : ''}>
                            <i class="fas fa-cart-plus me-2"></i>${product.stock === 0 ? 'Agotado' : 'Añadir al Carrito'}
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += productCard;
    });
    
    // Añadir event listeners a los botones de carrito
    document.querySelectorAll('.btn-add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

// Configurar event listeners
function setupEventListeners() {
    // Buscador
    document.getElementById('searchButton').addEventListener('click', searchProducts);
    document.getElementById('searchInput').addEventListener('keyup', function(event) {
        if (event.key === 'Enter') searchProducts();
    });
    
    // Filtros por categoría
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
            
            // Añadir clase active al botón clickeado
            this.classList.add('active');
            
            // Filtrar productos
            const category = this.getAttribute('data-category');
            filterProductsByCategory(category);
        });
    });
    
    // Carrito
    document.getElementById('cartToggle').addEventListener('click', toggleCart);
    document.getElementById('closeCart').addEventListener('click', toggleCart);
    document.getElementById('cartOverlay').addEventListener('click', toggleCart);
    document.getElementById('clearCartBtn').addEventListener('click', clearCart);
    document.getElementById('checkoutBtn').addEventListener('click', startCheckout);
    
    // Modal de contacto
    document.getElementById('confirmOrderBtn').addEventListener('click', confirmOrder);
    
    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Filtrar productos por categoría
function filterProductsByCategory(category) {
    if (category === 'all') {
        renderProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        renderProducts(filteredProducts);
    }
}

// Buscar productos
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (searchTerm === '') {
        const activeCategory = document.querySelector('.category-btn.active').getAttribute('data-category');
        filterProductsByCategory(activeCategory);
        return;
    }
    
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        product.description.toLowerCase().includes(searchTerm) ||
        getCategoryName(product.category).toLowerCase().includes(searchTerm)
    );
    
    renderProducts(filteredProducts);
}

// Añadir producto al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    // Verificar stock
    if (product.stock === 0) {
        alert(`Lo sentimos, ${product.name} está agotado.`);
        return;
    }
    
    // Verificar si el producto ya está en el carrito
    const cartItem = cart.find(item => item.id === productId);
    
    if (cartItem) {
        // Verificar stock disponible
        if (cartItem.quantity < product.stock) {
            cartItem.quantity++;
        } else {
            alert(`No hay suficiente stock de ${product.name}. Solo quedan ${product.stock} unidades.`);
            return;
        }
    } else {
        // Añadir nuevo producto al carrito
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
            stock: product.stock
        });
    }
    
    updateCart();
    showNotification(`${product.name} añadido al carrito`);
}

// Actualizar carrito
function updateCart() {
    updateCartCount();
    renderCartItems();
    calculateCartTotal();
}

// Actualizar contador del carrito
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = totalItems;
}

// Renderizar items del carrito
function renderCartItems() {
    const container = document.getElementById('cartItems');
    const cartSummary = document.getElementById('cartSummary');
    
    if (cart.length === 0) {
        container.innerHTML = '<p class="text-muted text-center" id="emptyCartMessage">Tu carrito está vacío</p>';
        cartSummary.classList.add('d-none');
        return;
    }
    
    cartSummary.classList.remove('d-none');
    container.innerHTML = '';
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        const cartItem = `
            <div class="cart-item">
                <div class="row align-items-center">
                    <div class="col-3">
                        <img src="${item.image}" class="cart-item-img" alt="${item.name}" 
                             onerror="this.src='https://via.placeholder.com/60x60?text=Imagen'">
                    </div>
                    <div class="col-6">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="small text-muted">Bs. ${item.price.toFixed(2)} c/u</div>
                        <div class="mt-2">
                            <button class="btn btn-sm btn-outline-secondary btn-decrease" data-id="${item.id}">
                                <i class="fas fa-minus"></i>
                            </button>
                            <span class="mx-2">${item.quantity}</span>
                            <button class="btn btn-sm btn-outline-secondary btn-increase" data-id="${item.id}" ${item.quantity >= item.stock ? 'disabled' : ''}>
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-3 text-end">
                        <div class="cart-item-price">Bs. ${itemTotal.toFixed(2)}</div>
                        <button class="btn btn-sm btn-outline-danger mt-2 btn-remove" data-id="${item.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cartItem;
    });
    
    // Añadir event listeners a los botones del carrito
    document.querySelectorAll('.btn-increase').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            updateCartItemQuantity(productId, 1);
        });
    });
    
    document.querySelectorAll('.btn-decrease').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            updateCartItemQuantity(productId, -1);
        });
    });
    
    document.querySelectorAll('.btn-remove').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
}

// Actualizar cantidad de un item en el carrito
function updateCartItemQuantity(productId, change) {
    const cartItem = cart.find(item => item.id === productId);
    
    if (!cartItem) return;
    
    const newQuantity = cartItem.quantity + change;
    
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }
    
    // Verificar stock
    const product = products.find(p => p.id === productId);
    if (newQuantity > product.stock) {
        alert(`No hay suficiente stock de ${product.name}. Solo quedan ${product.stock} unidades.`);
        return;
    }
    
    cartItem.quantity = newQuantity;
    updateCart();
}

// Eliminar producto del carrito
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Calcular total del carrito
function calculateCartTotal() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const discount = subtotal > 500 ? subtotal * 0.1 : 0; // 10% de descuento si el subtotal es mayor a 500 Bs.
    const total = subtotal - discount + SHIPPING_COST;
    
    document.getElementById('cartSubtotal').textContent = `Bs. ${subtotal.toFixed(2)}`;
    document.getElementById('cartShipping').textContent = `Bs. ${SHIPPING_COST.toFixed(2)}`;
    document.getElementById('cartDiscount').textContent = `Bs. ${discount.toFixed(2)}`;
    document.getElementById('cartTotal').textContent = `Bs. ${total.toFixed(2)}`;
}

// Mostrar/ocultar carrito
function toggleCart() {
    document.getElementById('cartSidebar').classList.toggle('open');
    document.getElementById('cartOverlay').classList.toggle('show');
}

// Vaciar carrito
function clearCart() {
    if (cart.length === 0) return;
    
    if (confirm('¿Estás seguro de que deseas vaciar el carrito?')) {
        cart = [];
        updateCart();
        showNotification('Carrito vaciado');
    }
}

// Iniciar proceso de compra
function startCheckout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    // Mostrar modal para datos de contacto
    const contactModal = new bootstrap.Modal(document.getElementById('contactModal'));
    contactModal.show();
}

// Confirmar pedido y abrir WhatsApp
function confirmOrder() {
    // Validar formulario
    const name = document.getElementById('customerName').value;
    const phone = document.getElementById('customerPhone').value;
    const address = document.getElementById('customerAddress').value;
    const email = document.getElementById('customerEmail').value || 'No especificado';
    const notes = document.getElementById('customerNotes').value || 'Sin notas adicionales';
    
    if (!name || !phone || !address) {
        alert('Por favor completa todos los campos obligatorios (*)');
        return;
    }
    
    // Calcular total
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const discount = subtotal > 500 ? subtotal * 0.1 : 0;
    const total = subtotal - discount + SHIPPING_COST;
    
    // Generar número de pedido
    const orderNumber = 'BR-' + Date.now().toString().slice(-6);
    
    // Construir mensaje de WhatsApp
    let whatsappMessage = `¡Hola Bolivia Robotics! \n\n`;
    whatsappMessage += `*NUEVO PEDIDO - ${orderNumber}*\n\n`;
    whatsappMessage += `*DATOS DEL CLIENTE:*\n`;
    whatsappMessage += `• Nombre: ${name}\n`;
    whatsappMessage += `• Teléfono: ${phone}\n`;
    whatsappMessage += `• Correo: ${email}\n`;
    whatsappMessage += `• Dirección: ${address}\n`;
    whatsappMessage += `• Notas: ${notes}\n\n`;
    
    whatsappMessage += `*PRODUCTOS PEDIDOS:*\n`;
    cart.forEach((item, index) => {
        whatsappMessage += `${index + 1}. ${item.name}\n`;
        whatsappMessage += `   Cantidad: ${item.quantity}\n`;
        whatsappMessage += `   Precio unitario: Bs. ${item.price.toFixed(2)}\n`;
        whatsappMessage += `   Subtotal: Bs. ${(item.price * item.quantity).toFixed(2)}\n\n`;
    });
    
    whatsappMessage += `*RESUMEN DE PAGO:*\n`;
    whatsappMessage += `• Subtotal: Bs. ${subtotal.toFixed(2)}\n`;
    if (discount > 0) {
        whatsappMessage += `• Descuento (10%): Bs. ${discount.toFixed(2)}\n`;
    }
    whatsappMessage += `• Costo de envío: Bs. ${SHIPPING_COST.toFixed(2)}\n`;
    whatsappMessage += `• *TOTAL A PAGAR: Bs. ${total.toFixed(2)}*\n\n`;
    
    whatsappMessage += `*INSTRUCCIONES:*\n`;
    whatsappMessage += `1. Confirmar disponibilidad de productos\n`;
    whatsappMessage += `2. Indicar métodos de pago disponibles\n`;
    whatsappMessage += `3. Coordinar envío y tiempo de entrega\n\n`;
    
    whatsappMessage += ` *Fecha y hora:* ${new Date().toLocaleString('es-BO')}\n`;
    whatsappMessage += ` *Número de pedido:* ${orderNumber}`;
    
    // Codificar mensaje para URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Número de WhatsApp
    const whatsappNumber = "59172035156"; 
    
    // Crear URL de WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Mostrar confirmación antes de abrir WhatsApp
    const confirmationHTML = `
        <div class="alert alert-success text-center">
            <i class="fas fa-check-circle fa-3x text-success mb-3"></i>
            <h5>¡Pedido Listo para Enviar!</h5>
            <p>Se abrirá WhatsApp para que envíes tu pedido automáticamente.</p>
            <p><strong>Número de Pedido: ${orderNumber}</strong></p>
            
            <div class="order-summary mt-3">
                <h6>Resumen del Pedido:</h6>
                <p><strong>Cliente:</strong> ${name}</p>
                <p><strong>Total:</strong> Bs. ${total.toFixed(2)}</p>
                <p><strong>Productos:</strong> ${cart.length} diferentes</p>
            </div>
            
            <div class="qr-container">
                <p class="small text-muted mb-2">También puedes escanear este código para contacto rápido:</p>
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/${whatsappNumber}?text=Consulta%20Bolivia%20Robotics&color=1a237e&bgcolor=f5f5f5" 
                     alt="QR WhatsApp">
                <p class="small text-muted mt-2">Escanea para contactarnos</p>
            </div>
            
            <hr>
            <div class="d-grid gap-2 mt-3">
                <a href="${whatsappURL}" class="btn btn-success btn-lg" target="_blank" id="openWhatsAppBtn">
                    <i class="fab fa-whatsapp me-2"></i>Abrir WhatsApp y Enviar Pedido
                </a>
                <button class="btn btn-outline-primary" id="copyOrderBtn">
                    <i class="fas fa-copy me-2"></i>Copiar Información del Pedido
                </button>
                <button class="btn btn-outline-secondary" id="closeConfirmationBtn">
                    <i class="fas fa-times me-2"></i>Cerrar
                </button>
            </div>
        </div>
    `;
    
    // Reemplazar contenido del carrito con confirmación
    document.getElementById('cartItems').innerHTML = confirmationHTML;
    document.getElementById('cartSummary').classList.add('d-none');
    
    // Botón para copiar información del pedido
    document.getElementById('copyOrderBtn').addEventListener('click', function() {
        navigator.clipboard.writeText(whatsappMessage.replace(/\*/g, ''))
            .then(() => {
                showNotification('Información del pedido copiada al portapapeles', 'info');
            })
            .catch(() => {
                alert('No se pudo copiar la información. Por favor, ábrelo en WhatsApp.');
            });
    });
    
    // Botón para cerrar confirmación
    document.getElementById('closeConfirmationBtn').addEventListener('click', function() {
        // Vaciar carrito
        cart = [];
        updateCart();
        toggleCart();
        
        // Volver a vista normal del carrito
        renderCartItems();
        calculateCartTotal();
        document.getElementById('cartSummary').classList.remove('d-none');
        document.getElementById('checkoutBtn').textContent = 'Continuar con la Compra';
        document.getElementById('checkoutBtn').removeEventListener('click', startCheckout);
        document.getElementById('checkoutBtn').addEventListener('click', startCheckout);
    });
    
    // Cerrar modal
    const contactModal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
    contactModal.hide();
    
    // Limpiar formulario
    document.getElementById('customerName').value = '';
    document.getElementById('customerPhone').value = '';
    document.getElementById('customerEmail').value = '';
    document.getElementById('customerAddress').value = '';
    document.getElementById('customerNotes').value = '';
    
    // Mostrar notificación
    showNotification('Pedido preparado. Se abrirá WhatsApp en 3 segundos...', 'info');
    
    // Abrir WhatsApp después de 3 segundos
    setTimeout(() => {
        window.open(whatsappURL, '_blank');
    }, 3000);
}

// Mostrar notificación
function showNotification(message, type = 'success') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} position-fixed`;
    notification.style.cssText = `
        bottom: 20px;
        right: 20px;
        z-index: 1100;
        min-width: 300px;
        max-width: 400px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        animation: slideIn 0.3s ease;
    `;
    
    const icon = type === 'success' ? 'fa-check-circle' : 
                type === 'info' ? 'fa-info-circle' : 'fa-exclamation-circle';
    
    notification.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="fas ${icon} me-2"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Añadir al DOM
    document.body.appendChild(notification);
    
    // Eliminar después de 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Obtener nombre legible de la categoría
function getCategoryName(category) {
    const categories = {
        'arduino': 'Arduino',
        'sensores': 'Sensores',
        'motores': 'Motores',
        'kits': 'Kits',
        'raspberry': 'Raspberry Pi',
        'modulos': 'Módulos',
        'herramientas': 'Herramientas',
        'otros': 'Otros Componentes'
    };
    
    return categories[category] || category;
}

// Añadir animaciones CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .fade-in {
        animation: fadeIn 0.5s ease;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);