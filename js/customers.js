const customers = [
    {
        name: 'Carlos Xitumul',
        opinion: '¡Mucha, qué buen café! Me encantó el lugar, súper acogedor. Vine a trabajar un rato con mi compu y se sentía una paz chilera. Además, el café huele espectacular, súper recomendado.',
        image: 'https://ui-avatars.com/api/?name=Carlos+Xitumul&background=random&color=fff',
    },
    {
        name: 'María Fernanda Monterroso',
        opinion: 'Vine el domingo por la tarde con mis hijos y nos trataron de maravilla. El café tiene un tueste perfecto. Se siente como estar en la sala de tu casa, el servicio te hace sentir especial.',
        image: 'https://ui-avatars.com/api/?name=Maria+Monterroso&background=random&color=fff',
    },
    {
        name: 'Juan Pablo Morales',
        opinion: 'Me fascina el concepto. Probé el Café San Marcos y tenía unas notas de sabor que me dejaron con ganas de llevarme dos bolsas. La señorita que nos atendió fue súper amable y atenta. 10/10.',
        image: 'https://ui-avatars.com/api/?name=Juan+Morales&background=random&color=fff',
    },
    {
        name: 'Ana Lucía Samayoa',
        opinion: 'Un rincón súper bonito para despejarse. Fui con mis amigas y la pasamos súper bien. El ambiente es relajado, la música está a buen volumen y el café es de otro nivel. Vamos a regresar fijo.',
        image: 'https://ui-avatars.com/api/?name=Ana+Samayoa&background=random&color=fff',
    },
    {
        name: 'Diego Castañeda',
        opinion: 'Llegué por casualidad por el tráfico y fue la mejor decisión. El trato del personal te hace sentir en familia desde que entrás. El cafecito estaba delicioso y súper fresco. Ya es mi spot favorito.',
        image: 'https://ui-avatars.com/api/?name=Diego+Castaneda&background=random&color=fff',
    },
    {
        name: 'Sofia Letona',
        opinion: 'Amo que le dan tanto valor al producto nacional. Compré las bolsas de café para mi casa y la verdad el sabor no tiene comparación. Aparte, el local es bellísimo y perfecto para tomar fotos.',
        image: 'https://ui-avatars.com/api/?name=Sofia+Letona&background=random&color=fff',
    },
    {
        name: 'Luis Pedro Orellana',
        opinion: 'Fui con mi novia a tomar algo tranquilo y nos encantó la vibra del lugar. Te relajás al instante. Me tomé un espresso y el sabor era puro, sin quemar, como debe ser. ¡Excelente atención muchá!',
        image: 'https://ui-avatars.com/api/?name=Luis+Orellana&background=random&color=fff',
    },
    {
        name: 'Jack Smith',
        opinion: 'I was visiting from the US and found this hidden gem. El café es espectacular y fueron súper amables intentando explicarme los tipos de tueste. Truly felt the warmth of the local culture here!',
        image: 'https://ui-avatars.com/api/?name=Jack+Smith&background=random&color=fff',
    },
    {
        name: 'Carmen Batres',
        opinion: 'Una joyita de cafetería. Es el lugar perfecto para echarse un buen chisme o simplemente para leer un libro. Me sentí súper cómoda, el olor a café recién molido es increíble y te atienden con una gran sonrisa.',
        image: 'https://ui-avatars.com/api/?name=Carmen+Batres&background=random&color=fff',
    },
];

const customersContainer = document.getElementById('customers-container');

customers.forEach(customer => {
    customersContainer.innerHTML += `
        <article class="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4 py-4">
            <div class="bg-[#FCFBFA] rounded-3xl p-8 shadow-sm h-full flex flex-col border border-[#7B5940]/10 hover:shadow-md transition-shadow duration-300">
                <div class="flex items-center gap-4 mb-6">
                    <img src="${customer.image}" alt="${customer.name}" class="w-16 h-16 rounded-full object-cover shadow-sm border-2 border-[#7B5940]/20">
                    <p class="font-bold text-xl text-amber-950">${customer.name}</p>
                </div>
                <blockquote class="text-amber-900/80 italic leading-relaxed flex-grow text-lg">
                    "${customer.opinion}"
                </blockquote>
            </div>
        </article>
    `;
});

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;
let itemsPerView = getItemsPerView();

function getItemsPerView() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
}

window.addEventListener('resize', () => {
    itemsPerView = getItemsPerView();
    updateSlider();
});

// Función para mover el slider
function updateSlider() {
    const maxIndex = customers.length - itemsPerView;
    if (currentIndex > maxIndex) currentIndex = maxIndex;
    if (currentIndex < 0) currentIndex = 0;

    // Calcula el porcentaje a desplazar
    const percentage = -(currentIndex * (100 / itemsPerView));
    customersContainer.style.transform = `translateX(${percentage}%)`;
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

// Si el usuario hace clic, reiniciamos el temporizador para que no cambie de golpe
function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 10000);
}

// Inicializar la vista
updateSlider();