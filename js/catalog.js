const catalogProducts = [
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
        brand: "Grana",
        desc: "Disfruta de la conveniencia y calidad de nuestro café de altura en formato de cápsulas compatibles con sistemas estándar.",
        priceStr: "Q60.00",
        image: "https://res.cloudinary.com/dacothbhi/image/upload/q_auto/f_auto/v1779125784/cafecapsula_cnbzoo.png"
    },
    {
        id: 5,
        title: "Café Huehuetenango",
        brand: "Café Barista",
        desc: "Café de las altas montañas de Huehuetenango, conocido por su acidez brillante y notas afrutadas.",
        priceStr: "Q115.00",
        image: "https://res.cloudinary.com/dacothbhi/image/upload/q_auto/f_auto/v1779895200/cafeHuehue_tntva9.png"
    },
    {
        id: 6,
        title: "Café Cobán Imperial",
        brand: "Café Barista",
        desc: "Un café con cuerpo redondo, notas a chocolate oscuro y un final prolongado que recuerda a la región lluviosa de Cobán.",
        priceStr: "Q105.00",
        image: "https://res.cloudinary.com/dacothbhi/image/upload/q_auto/f_auto/v1779895315/cafeCoban_ohwlo1.webp"
    },
    {
        id: 7,
        title: "Café Volcán de Fuego",
        brand: "Café Isabel",
        desc: "Tueste oscuro ideal para espresso, con granos que absorben la mineralidad de los suelos volcánicos.",
        priceStr: "Q130.00",
        image: "https://res.cloudinary.com/dacothbhi/image/upload/q_auto/f_auto/v1779895397/cafeExpreso_gefhyw.png"
    },
    {
        id: 8,
        title: "Cápsulas Descafeinadas",
        brand: "El Corte Inglés",
        desc: "Todo el sabor y aroma de nuestro mejor café, sin la cafeína. Ideal para disfrutar de noche.",
        priceStr: "Q65.00",
        image: "https://res.cloudinary.com/dacothbhi/image/upload/q_auto/f_auto/v1779895598/descafeinado_t1eui7.webp"
    },
    {
        id: 9,
        title: "Café Atitlán Clásico",
        brand: "El Cafetalito",
        desc: "Cultivado a las orillas del lago Atitlán, ofrece un balance perfecto con notas a caramelo y nuez.",
        priceStr: "Q110.00",
        image: "https://res.cloudinary.com/dacothbhi/image/upload/q_auto/f_auto/v1779896353/cafetalito_cq9f5w.png"
    },
    {
        id: 10,
        title: "Café Fraijanes Premium",
        brand: "Cafe Isabel",
        desc: "Granos secados al sol que destacan por su intenso aroma y acidez vibrante y jugosa.",
        priceStr: "Q125.00",
        image: "https://res.cloudinary.com/dacothbhi/image/upload/q_auto/f_auto/v1779895989/fraija_b1qdfa.png"
    },
    {
        id: 11,
        title: "Blend Familiar",
        brand: "San Martin",
        desc: "Nuestra mezcla especial diseñada para gustar a todos en casa. Tueste medio, sabor redondo y amigable.",
        priceStr: "Q95.00",
        image: "https://res.cloudinary.com/dacothbhi/image/upload/q_auto/f_auto/v1779896128/sanmartincoffee_zfvmts.jpg"
    },
    {
        id: 12,
        title: "Café Frío Cold Brew",
        brand: "Starbucks",
        desc: "Botellas listas para tomar. Café extraído en frío durante 24 horas para un sabor suave y naturalmente dulce.",
        priceStr: "Q140.00",
        image: "https://res.cloudinary.com/dacothbhi/image/upload/q_auto/f_auto/v1779896455/coldBrew_bp3foq.webp"
    },
];

const catalogContainer = document.getElementById('catalog-container');
const productModal = document.getElementById('product-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalProductImage = document.getElementById('modal-product-image');
const modalProductBrand = document.getElementById('modal-product-brand');
const modalProductTitle = document.getElementById('modal-product-title');
const modalProductDesc = document.getElementById('modal-product-desc');
const modalProductPrice = document.getElementById('modal-product-price');

function renderCatalog() {
    if (!catalogContainer) return;
    catalogContainer.innerHTML = '';

    catalogProducts.forEach(product => {
        catalogContainer.innerHTML += `
            <article class="animate-on-scroll opacity-0 translate-y-10 bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-700 border border-cafecito-medium/10 flex flex-col group h-full isolate">
                <!-- Imagen -->
                <div class="relative overflow-hidden aspect-[4/3] bg-cafecito-cream rounded-t-[2rem]">
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
                    <button onclick="openCatalogModal(${product.id})" class="w-full py-2.5 bg-cafecito-cream hover:bg-cafecito-medium hover:text-white text-cafecito-medium font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 border border-cafecito-medium/10 flex items-center justify-center gap-1.5">
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

window.openCatalogModal = function (productId) {
    const product = catalogProducts.find(p => p.id === productId);
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

function closeCatalogModal() {
    productModal.classList.add('opacity-0', 'pointer-events-none');
    productModal.querySelector('div').classList.remove('scale-100');
    productModal.querySelector('div').classList.add('scale-95');
    document.body.style.overflow = '';
}

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeCatalogModal);
}

if (productModal) {
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) closeCatalogModal();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderCatalog();
});
