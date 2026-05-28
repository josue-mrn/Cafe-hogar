const customers = [
    {
        name: 'Carlos Xitumul',
        opinion: '¡Mucha, qué buen café! Me encantó el lugar, súper acogedor. Vine a trabajar un rato con mi compu y se sentía una paz chilera. Además, el café huele espectacular, súper recomendado.',
        image: 'https://res.cloudinary.com/dacothbhi/image/upload/q_auto/f_auto/v1779122497/samples/man-portrait.jpg',
        stars: 5
    },
    {
        name: 'María Fernanda Monterroso',
        opinion: 'Vine el domingo por la tarde con mis hijos y nos trataron de maravilla. El café tiene un tueste perfecto. Se siente como estar en la sala de tu casa, el servicio te hace sentir especial.',
        image: 'https://res.cloudinary.com/dacothbhi/image/upload/q_auto/f_auto/v1779122502/main-sample.png',
        stars: 5
    },
    {
        name: 'Juan Pablo Morales',
        opinion: 'Me fascina el concepto. Probé el Café San Marcos y tenía unas notas de sabor que me dejaron con ganas de llevarme dos bolsas. La señorita que nos atendió fue súper amable y atenta. 10/10.',
        image: 'https://res.cloudinary.com/dacothbhi/image/upload/q_auto/f_auto/v1779122497/samples/man-on-a-street.jpg',
        stars: 5
    },
    {
        name: 'Ana Lucía Samayoa',
        opinion: 'Un rincón súper bonito para despejarse. Fui con mis amigas y la pasamos súper bien. El ambiente es relajado, la música está a buen volumen y el café es de otro nivel. Vamos a regresar fijo.',
        image: 'https://res.cloudinary.com/dacothbhi/image/upload/q_auto/f_auto/v1779122496/samples/outdoor-woman.jpg',
        stars: 4
    },
    {
        name: 'Diego Castañeda',
        opinion: 'Llegué por casualidad por el tráfico y fue la mejor decisión. El trato del personal te hace sentir en familia desde que entrás. El cafecito estaba delicioso y súper fresco. Ya es mi spot favorito.',
        image: 'https://ui-avatars.com/api/?name=Diego+Castaneda&background=d4af37&color=fff',
        stars: 5
    },
    {
        name: 'Sofia Letona',
        opinion: 'Amo que le dan tanto valor al producto nacional. Compré las bolsas de café para mi casa y la verdad el sabor no tiene comparación. Aparte, el local es bellísimo y perfecto para tomar fotos.',
        image: 'https://ui-avatars.com/api/?name=Sofia+Letona&background=6f4e37&color=fff',
        stars: 5
    },
    {
        name: 'Luis Pedro Orellana',
        opinion: 'Fui con mi novia a tomar algo tranquilo y nos encantó la vibra del lugar. Te relajás al instante. Me tomé un espresso y el sabor era puro, sin quemar, como debe ser. ¡Excelente atención muchá!',
        image: 'https://res.cloudinary.com/dacothbhi/image/upload/q_auto/f_auto/v1779122494/samples/smile.jpg',
        stars: 5
    },
    {
        name: 'Jack Smith',
        opinion: 'I was visiting from the US and found this hidden gem. El café es espectacular y fueron súper amables intentando explicarme los tipos de tueste. Truly felt the warmth of the local culture here!',
        image: 'https://ui-avatars.com/api/?name=Jack+Smith&background=a87c5c&color=fff',
        stars: 5
    },
    {
        name: 'Carmen Batres',
        opinion: 'Una joyita de cafetería. Es el lugar perfecto para echarse un buen chisme o simplemente para leer un libro. Me sentí súper cómoda, el olor a café recién molido es increíble y te atienden con una gran sonrisa.',
        image: 'https://res.cloudinary.com/dacothbhi/image/upload/q_auto/f_auto/v1779122501/cld-sample.jpg',
        stars: 5
    },
];

const customersContainer = document.getElementById('customers-container');
const sliderDots = document.getElementById('slider-dots');

function renderCustomers() {
    if (!customersContainer) return;
    customersContainer.innerHTML = '';

    customers.forEach(customer => {
        // Generar estrellas de calificación
        let starsHtml = '';
        for (let i = 0; i < 5; i++) {
            if (i < customer.stars) {
                starsHtml += '<span class="text-cafecito-accent">★</span>';
            } else {
                starsHtml += '<span class="text-cafecito-medium/20">★</span>';
            }
        }

        customersContainer.innerHTML += `
            <article class="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4 py-4">
                <div class="bg-white/40 backdrop-blur-md hover:bg-white rounded-[2rem] p-8 shadow-sm h-full flex flex-col justify-between border border-cafecito-medium/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group isolate">
                    <!-- Comillas decorativas de fondo -->
                    <span class="absolute -right-2 -bottom-6 text-9xl text-cafecito-accent/10 font-serif select-none pointer-events-none group-hover:scale-110 transition-transform duration-500">“</span>
                    
                    <div class="space-y-6">
                        <!-- Estrellas y Opinión -->
                        <div class="space-y-4">
                            <div class="flex gap-0.5 text-lg">
                                ${starsHtml}
                            </div>
                            <blockquote class="text-cafecito-dark/85 italic leading-relaxed text-sm">
                                "${customer.opinion}"
                            </blockquote>
                        </div>
                    </div>

                    <!-- Usuario -->
                    <div class="flex items-center gap-4 mt-8 pt-6 border-t border-cafecito-cream relative z-10">
                        <img src="${customer.image}" alt="${customer.name}" class="w-12 h-12 rounded-full object-cover shadow-sm border-2 border-cafecito-accent/30">
                        <div>
                            <p class="font-bold text-sm text-cafecito-dark">${customer.name}</p>
                            <p class="text-[10px] text-cafecito-dark/50 font-medium">Cliente Verificado</p>
                        </div>
                    </div>
                </div>
            </article>
        `;
    });
}

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;
let itemsPerView = getItemsPerView();

function getItemsPerView() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
}

// Renderizar dots indicadores
function renderDots() {
    if (!sliderDots) return;
    sliderDots.innerHTML = '';
    const maxIndex = customers.length - itemsPerView + 1;
    for (let i = 0; i < maxIndex; i++) {
        const dot = document.createElement('button');
        dot.className = `w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-cafecito-accent w-5' : 'bg-cafecito-medium/20 hover:bg-cafecito-medium/40'}`;
        dot.setAttribute('aria-label', `Ir al slide ${i + 1}`);
        dot.addEventListener('click', () => {
            currentIndex = i;
            updateSlider();
            resetInterval();
        });
        sliderDots.appendChild(dot);
    }
}

window.addEventListener('resize', () => {
    const oldItemsPerView = itemsPerView;
    itemsPerView = getItemsPerView();
    
    // Limitar el índice actual antes de renderizar los dots y mover el slider
    const maxIndex = customers.length - itemsPerView;
    if (currentIndex > maxIndex) currentIndex = maxIndex;
    if (currentIndex < 0) currentIndex = 0;

    if (oldItemsPerView !== itemsPerView) {
        renderDots();
    }
    updateSlider();
});

// Función para mover el slider
function updateSlider() {
    const maxIndex = customers.length - itemsPerView;
    if (currentIndex > maxIndex) currentIndex = maxIndex;
    if (currentIndex < 0) currentIndex = 0;

    // Calcula el porcentaje a desplazar en base al ancho total del contenedor (customers.length)
    const percentage = -(currentIndex * (100 / customers.length));
    customersContainer.style.transform = `translateX(${percentage}%)`;

    // Actualizar dots
    if (sliderDots) {
        const dots = sliderDots.querySelectorAll('button');
        dots.forEach((dot, idx) => {
            if (idx === currentIndex) {
                dot.className = 'w-2 h-2 rounded-full transition-all duration-300 bg-cafecito-accent w-5';
            } else {
                dot.className = 'w-2 h-2 rounded-full transition-all duration-300 bg-cafecito-medium/20 hover:bg-cafecito-medium/40';
            }
        });
    }
}

// Siguiente diapositiva
function nextSlide() {
    const maxIndex = customers.length - itemsPerView;
    if (currentIndex < maxIndex) {
        currentIndex++;
    } else {
        currentIndex = 0; // Vuelve al inicio
    }
    updateSlider();
}

// Diapositiva anterior
function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = customers.length - itemsPerView; // Va al final
    }
    updateSlider();
}

// Eventos de los botones
if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });
}

// Movimiento automático cada 10 segundos
let slideInterval = setInterval(nextSlide, 10000);

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 10000);
}

// Inicializar la vista
document.addEventListener('DOMContentLoaded', () => {
    renderCustomers();
    renderDots();
    updateSlider();
});