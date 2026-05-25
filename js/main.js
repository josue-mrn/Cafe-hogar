const products = [
    {
        id: 1,
        title: "Café Miel",
        brand: "El dulce sabor de Guatemala",
        desc: "Disfruta de notas dulces y balanceadas que capturan la esencia del auténtico café artesanal con un retrogusto suave.",
        priceStr: "Q100.00",
        image: "https://res.cloudinary.com/dacothbhi/image/upload/q_auto/f_auto/v1779125241/CafeMielBolsa_wlh5nx.webp"
    },
    {
        id: 2,
        title: "Café San Marcos",
        brand: "BEAN AROMA CAFE",
        desc: "Elaborado con granos de la más alta calidad de tierras volcánicas, combina notas achocolatadas con un toque sutil de frutos secos.",
        priceStr: "Q100.00",
        image: "https://res.cloudinary.com/dacothbhi/image/upload/q_auto/f_auto/v1779125339/cafeSanMarcos_ichhnw.webp"
    },
    {
        id: 3,
        title: "Café Gourmet de Antigua",
        brand: "Café G & Co. Edición Artesanal",
        desc: "Café de altura con tueste medio y grano entero, presentado en una hermosa bolsa de tejido típico hecha a mano por artesanos locales.",
        priceStr: "Q120.00",
        image: "https://res.cloudinary.com/dacothbhi/image/upload/q_auto/f_auto/v1779125435/bolsaCafetela_ssuec0.jpg"
    },
    {
        id: 4,
        title: "Cápsulas de Café",
        brand: "Café G & Co. Edición Artesanal",
        desc: "Disfruta de la conveniencia y calidad de nuestro café de altura en formato de cápsulas compatibles con sistemas estándar.",
        priceStr: "Q60.00",
        image: "https://res.cloudinary.com/dacothbhi/image/upload/q_auto/f_auto/v1779125784/cafecapsula_cnbzoo.png"
    }
];

// Referencias al DOM
const productsContainer = document.getElementById('products-container');
const productModal = document.getElementById('product-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalProductImage = document.getElementById('modal-product-image');
const modalProductBrand = document.getElementById('modal-product-brand');
const modalProductTitle = document.getElementById('modal-product-title');
const modalProductDesc = document.getElementById('modal-product-desc');
const modalProductPrice = document.getElementById('modal-product-price');

// 1. Renderizar Tarjetas de Productos
function renderProducts() {
    if (!productsContainer) return;
    productsContainer.innerHTML = '';

    products.forEach(product => {
        productsContainer.innerHTML += `
            <article class="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-cafecito-medium/10 flex flex-col group h-full">
                <!-- Imagen -->
                <div class="relative overflow-hidden aspect-[4/3] bg-cafecito-cream">
                    <img src="${product.image}" alt="${product.title}" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105">
                    <span class="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-cafecito-medium shadow-sm">
                        ${product.priceStr}
                    </span>
                </div>
                <!-- Contenido -->
                <div class="p-6 flex flex-col flex-grow justify-between gap-4">
                    <div class="space-y-2">
                        <span class="text-[10px] font-bold tracking-widest text-cafecito-accent uppercase block">
                            ${product.brand}
                        </span>
                        <h3 class="font-title text-xl font-bold text-cafecito-dark group-hover:text-cafecito-medium transition-colors">
                            ${product.title}
                        </h3>
                    </div>
                    <button onclick="openProductModal(${product.id})" class="w-full py-2.5 bg-cafecito-cream hover:bg-cafecito-medium hover:text-white text-cafecito-medium font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 border border-cafecito-medium/10 flex items-center justify-center gap-1.5">
                        <span>Ver detalles</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </div>
            </article>
        `;
    });
}

// 2. Abrir Modal Informativo
window.openProductModal = function (productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    modalProductImage.src = product.image;
    modalProductImage.alt = product.title;
    modalProductBrand.textContent = product.brand;
    modalProductTitle.textContent = product.title;
    modalProductDesc.textContent = product.desc;
    modalProductPrice.textContent = product.priceStr;

    productModal.classList.remove('opacity-0', 'pointer-events-none');
    productModal.querySelector('div').classList.remove('scale-95');
    productModal.querySelector('div').classList.add('scale-100');
    document.body.style.overflow = 'hidden';
};

// 3. Cerrar Modal
function closeProductModal() {
    productModal.classList.add('opacity-0', 'pointer-events-none');
    productModal.querySelector('div').classList.remove('scale-100');
    productModal.querySelector('div').classList.add('scale-95');
    document.body.style.overflow = '';
}

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeProductModal);
}

if (productModal) {
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) closeProductModal();
    });
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});
