const locations = [
    {
        name: "Oakland Place",
        addressLine1: "Diagonal 6, 13-01 Zona 10, Ciudad de Guatemala",
        addressLine2: "Centro Comercial Oakland Place, Planta Baja",
        googleMapsUrl: "https://maps.google.com/?q=Oakland+Place+Guatemala",
        wazeUrl: "https://waze.com/ul?q=Oakland+Place+Guatemala",
        socials: {
            whatsapp: {
                text: "whatsapp",
                url: "https://wa.me/50212345678"
            },
            facebook: {
                text: "Facebook",
                url: "https://facebook.com/cafehogargt"
            },
            instagram: {
                text: "Instagram",
                url: "https://instagram.com/cafehogargt"
            }
        }
    }
];

const locationsContainer = document.getElementById('locations-container');

// Limpiar el contenedor y asegurar que tome todo el ancho
locationsContainer.className = "w-full flex justify-center";

locations.forEach(location => {
    locationsContainer.innerHTML = `
        <article class="relative w-full h-[600px] bg-[#7B5940] rounded-3xl p-10 md:p-16 shadow-md flex flex-col justify-between items-center text-center">
            
            <!-- Parte Superior: Nombre de la Ubicación -->
            <div class="flex flex-col items-center mt-2">
                <h3 class="text-5xl md:text-6xl font-normal text-[#FFF3E6] font-serif select-none" style="font-family: 'Inria Serif', serif;">
                    ${location.name}
                </h3>
            </div>

            <!-- Parte Central: Dirección en Texto & Botones de Navegación Abajo -->
            <div class="flex flex-col items-center gap-6 max-w-2xl">
                <!-- Dirección Escrita -->
                <p class="text-xl md:text-2xl text-[#FFF3E6]/90 font-light select-none font-serif leading-relaxed" style="font-family: 'Inria Serif', serif;">
                    ${location.addressLine1}<br/>
                    <span class="text-lg md:text-xl text-[#FFF3E6]/75">${location.addressLine2}</span>
                </p>
                
                <!-- Botones de Navegación Funcionales (Complemento debajo de la dirección) -->
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center w-full mt-2">
                    <!-- Google Maps -->
                    <a href="${location.googleMapsUrl}" target="_blank" 
                       class="flex items-center justify-center gap-3 bg-[#FFF3E6] text-[#7B5940] hover:bg-white px-6 py-3.5 rounded-full font-bold shadow-md transition-colors duration-300 w-full sm:w-auto text-sm md:text-base">
                        <i class="fa-solid fa-location-dot text-[#EA4335] text-lg"></i>
                        <span>Google Maps</span>
                    </a>
                    
                    <!-- Waze -->
                    <a href="${location.wazeUrl}" target="_blank" 
                       class="flex items-center justify-center gap-3 bg-[#33CCFF] text-white hover:bg-[#2BC0F5] px-6 py-3.5 rounded-full font-bold shadow-md transition-colors duration-300 w-full sm:w-auto text-sm md:text-base">
                        <i class="fa-brands fa-waze text-white text-lg"></i>
                        <span>Waze</span>
                    </a>
                </div>
            </div>

            <!-- Parte Inferior: Redes Sociales -->
            <div class="flex flex-col items-center mb-2">
                <!-- Título Redes Sociales -->
                <h4 class="text-2xl md:text-3xl font-normal text-[#FFF3E6] mb-6 font-serif select-none" style="font-family: 'Inria Serif', serif;">
                    Redes sociales
                </h4>

                <!-- Fila de Redes Sociales con Iconos de FontAwesome -->
                <div class="flex flex-row justify-center items-center gap-8 md:gap-16 flex-wrap">
                    <!-- WhatsApp -->
                    <a href="${location.socials.whatsapp.url}" target="_blank" 
                       class="flex items-center gap-3.5 group/item">
                        <span class="w-10 h-10 bg-[#C2C2C2] group-hover/item:bg-[#25D366] rounded-full flex items-center justify-center text-white transition-colors duration-300 shadow-md">
                            <i class="fa-brands fa-whatsapp text-xl"></i>
                        </span>
                        <span class="text-[#FFF3E6] text-xl font-serif select-none" style="font-family: 'Inria Serif', serif;">
                            ${location.socials.whatsapp.text}
                        </span>
                    </a>
                    
                    <!-- Facebook -->
                    <a href="${location.socials.facebook.url}" target="_blank" 
                       class="flex items-center gap-3.5 group/item">
                        <span class="w-10 h-10 bg-[#C2C2C2] group-hover/item:bg-[#1877F2] rounded-full flex items-center justify-center text-white transition-colors duration-300 shadow-md">
                            <i class="fa-brands fa-facebook-f text-lg"></i>
                        </span>
                        <span class="text-[#FFF3E6] text-xl font-serif select-none" style="font-family: 'Inria Serif', serif;">
                            ${location.socials.facebook.text}
                        </span>
                    </a>

                    <!-- Instagram -->
                    <a href="${location.socials.instagram.url}" target="_blank" 
                       class="flex items-center gap-3.5 group/item">
                        <span class="w-10 h-10 bg-[#C2C2C2] group-hover/item:bg-gradient-to-tr group-hover/item:from-[#f9ce34] group-hover/item:via-[#ee2a7b] group-hover/item:to-[#6228d7] rounded-full flex items-center justify-center text-white transition-colors duration-300 shadow-md">
                            <i class="fa-brands fa-instagram text-lg"></i>
                        </span>
                        <span class="text-[#FFF3E6] text-xl font-serif select-none" style="font-family: 'Inria Serif', serif;">
                            ${location.socials.instagram.text}
                        </span>
                    </a>
                </div>
            </div>

        </article>
    `;
});
