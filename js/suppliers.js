const suppliers = [
    {
        name: 'Supracafé',
        image: 'https://res.cloudinary.com/dacothbhi/image/upload/q_auto/f_auto/v1779129563/supracafe_l8dsy6.webp',
        hasDarkBg: false
    },
    {
        name: 'San Martín',
        image: 'https://res.cloudinary.com/dacothbhi/image/upload/q_auto/f_auto/v1779129489/SanMartin_mqiw7r.png',
        hasDarkBg: false
    },
    {
        name: 'El Cafetalito',
        image: 'https://res.cloudinary.com/dacothbhi/image/upload/q_auto/f_auto/v1779129212/elcafetalito_b8goyu.jpg',
        hasDarkBg: false
    },
    {
        name: 'Barista',
        image: 'https://res.cloudinary.com/dacothbhi/image/upload/q_auto/f_auto/v1779129170/barista_hpfbcd.webp',
        hasDarkBg: false
    },
];

const suppliersContainer = document.getElementById('suppliers-container');

// Duplicamos el arreglo para efecto marquee infinito
const infiniteSuppliers = [...suppliers, ...suppliers, ...suppliers, ...suppliers, ...suppliers];

function renderSuppliers() {
    if (!suppliersContainer) return;
    suppliersContainer.innerHTML = '';

    infiniteSuppliers.forEach(supplier => {
        suppliersContainer.innerHTML += `
            <div class="flex-shrink-0 w-44 h-24 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-105 cursor-pointer bg-white rounded-2xl p-4 shadow-sm hover:shadow-[0_10px_20px_-5px_rgba(111,78,55,0.2)] border border-cafecito-medium/10">
                <img src="${supplier.image}" alt="${supplier.name}" class="w-full h-full object-contain">
            </div>
        `;
    });
}

// Estilos de animación marquee continua
const style = document.createElement('style');
style.textContent = `
    @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(calc(-228px * ${suppliers.length})); }
    }
    .animate-marquee {
        animation: marquee 28s linear infinite;
        width: max-content;
    }
    .animate-marquee:hover {
        animation-play-state: paused;
    }
`;
document.head.appendChild(style);

if (suppliersContainer) {
    suppliersContainer.classList.add('animate-marquee');
}

document.addEventListener('DOMContentLoaded', () => {
    renderSuppliers();
});
