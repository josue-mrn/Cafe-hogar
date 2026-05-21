const suppliers = [
    {
        image: 'https://res.cloudinary.com/dacothbhi/image/upload/q_auto/f_auto/v1779129563/supracafe_l8dsy6.webp'
    },
    {
        image: 'https://res.cloudinary.com/dacothbhi/image/upload/q_auto/f_auto/v1779129489/SanMartin_mqiw7r.png'
    },
    {
        image: 'https://res.cloudinary.com/dacothbhi/image/upload/q_auto/f_auto/v1779129212/elcafetalito_b8goyu.jpg'
    },
    {
        image: 'https://res.cloudinary.com/dacothbhi/image/upload/q_auto/f_auto/v1779129170/barista_hpfbcd.webp'
    },
]

const suppliersContainer = document.getElementById('suppliers-container');

// Duplicamos el arreglo para que el carrusel nunca se vea vacío (efecto infinito)
const infiniteSuppliers = [...suppliers, ...suppliers, ...suppliers, ...suppliers, ...suppliers];

infiniteSuppliers.forEach(supplier => {
    suppliersContainer.innerHTML += `
        <div class="flex-shrink-0 w-48 h-48 flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110 cursor-pointer">
            <img src="${supplier.image}" alt="Proveedor" class="w-full h-full object-contain">
        </div>
    `;
});

// Estilos dinámicos para la animación continua
const style = document.createElement('style');
style.textContent = `
    @keyframes marquee {
        0% { transform: translateX(0); }
        /* 224px es la suma del width (192px) + el gap-8 (32px) del contenedor */
        100% { transform: translateX(calc(-224px * ${suppliers.length})); } 
    }
    .animate-marquee {
        animation: marquee 20s linear infinite;
        width: max-content;
    }
    .animate-marquee:hover {
        animation-play-state: paused;
    }
`;
document.head.appendChild(style);

// Agregamos la clase de animación al contenedor principal
suppliersContainer.classList.add('animate-marquee');
