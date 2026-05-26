const locations = [
    {
        id: "oakland",
        name: "Oakland Place",
        subtitle: "Express & Especialidad",
        addressLine1: "Diagonal 6, 13-01 Zona 10",
        addressLine2: "CC Oakland Place, Planta Baja, Guatemala",
        schedule: [
            { days: "Lunes a Viernes", hours: "7:00 AM - 8:00 PM" },
            { days: "Sábados y Domingos", hours: "8:00 AM - 9:00 PM" }
        ],
        googleMapsUrl: "https://maps.app.goo.gl/",
        wazeUrl: "https://waze.com/ul?q=Oakland+Place+Guatemala",
        embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15442.270631267676!2d-90.51866385!3d14.5951664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a3c1c4f5cd8f%3A0x67db206f1d7d0a6c!2sOakland%20Place!5e0!3m2!1sen!2sgt!4v1700000000000!5m2!1sen!2sgt",
        socials: {
            whatsapp: { url: "https://wa.me/50212345678", icon: "fa-whatsapp", color: "#25D366" },
            facebook: { url: "https://facebook.com/cafehogargt", icon: "fa-facebook-f", color: "#1877F2" },
            instagram: { url: "https://instagram.com/cafehogargt", icon: "fa-instagram", gradient: "from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]" }
        }
    },
    {
        id: "antigua",
        name: "Antigua Guatemala",
        subtitle: "Flagship & Catación",
        addressLine1: "5a Avenida Norte #12",
        addressLine2: "Casa Portal, Antigua Guatemala",
        schedule: [
            { days: "Lunes a Jueves", hours: "8:00 AM - 7:00 PM" },
            { days: "Viernes a Domingo", hours: "7:00 AM - 10:00 PM" }
        ],
        googleMapsUrl: "https://maps.app.goo.gl/",
        wazeUrl: "https://waze.com/ul?q=Antigua+Guatemala",
        embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30889.37905183313!2d-90.75549022634455!3d14.556276800637152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85890e75cc66432b%3A0x77d12f3e8f815a!2sAntigua%20Guatemala!5e0!3m2!1sen!2sgt!4v1700000000000!5m2!1sen!2sgt",
        socials: {
            whatsapp: { url: "https://wa.me/50212345679", icon: "fa-whatsapp", color: "#25D366" },
            facebook: { url: "https://facebook.com/cafehogargt", icon: "fa-facebook-f", color: "#1877F2" },
            instagram: { url: "https://instagram.com/cafehogargt", icon: "fa-instagram", gradient: "from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]" }
        }
    },
    {
        id: "xela",
        name: "Quetzaltenango",
        subtitle: "Laboratorio de Filtros",
        addressLine1: "12 Avenida 4-15, Zona 1",
        addressLine2: "Bistró del Parque, Quetzaltenango",
        schedule: [
            { days: "Todos los días", hours: "7:00 AM - 8:00 PM" }
        ],
        googleMapsUrl: "https://maps.app.goo.gl/",
        wazeUrl: "https://waze.com/ul?q=Quetzaltenango",
        embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61745.242784576395!2d-91.56453916947683!3d14.834479905206265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858c027419a5840d%3A0xd6c273ecb8e0e03e!2sQuetzaltenango!5e0!3m2!1sen!2sgt!4v1700000000000!5m2!1sen!2sgt",
        socials: {
            whatsapp: { url: "https://wa.me/50212345680", icon: "fa-whatsapp", color: "#25D366" },
            facebook: { url: "https://facebook.com/cafehogargt", icon: "fa-facebook-f", color: "#1877F2" },
            instagram: { url: "https://instagram.com/cafehogargt", icon: "fa-instagram", gradient: "from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]" }
        }
    }
];

const locationsContainer = document.getElementById('locations-container');

function renderLocationsSection() {
    if (!locationsContainer) return;
    
    // Create the outer wrapper
    locationsContainer.className = "w-full flex flex-col items-center gap-10 max-w-7xl mx-auto";

    // 1. Render Tabs
    const tabsHtml = `
        <div class="flex flex-wrap justify-center gap-4 w-full bg-white/50 backdrop-blur-md p-2 rounded-full border border-cafecito-medium/10 shadow-sm max-w-fit">
            ${locations.map((loc, index) => `
                <button onclick="selectLocation('${loc.id}')" id="tab-${loc.id}" 
                    class="px-6 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 ${index === 0 ? 'bg-cafecito-dark text-white shadow-md' : 'text-cafecito-dark/60 hover:text-cafecito-dark hover:bg-cafecito-medium/10'}">
                    ${loc.name}
                </button>
            `).join('')}
        </div>
    `;

    // 2. Render Main Content Area
    const contentHtml = `
        <div class="w-full bg-white rounded-[2.5rem] shadow-2xl border border-cafecito-medium/10 overflow-hidden flex flex-col lg:flex-row relative animate-fade-in min-h-[500px]" id="location-details-container">
            <!-- Rendered dynamically via selectLocation -->
        </div>
    `;

    locationsContainer.innerHTML = tabsHtml + contentHtml;
    
    // Select first location by default
    if (locations.length > 0) {
        selectLocation(locations[0].id);
    }
}

window.selectLocation = function(id) {
    const loc = locations.find(l => l.id === id);
    if (!loc) return;

    // Update Tab Styles
    locations.forEach(l => {
        const tab = document.getElementById(`tab-${l.id}`);
        if (tab) {
            if (l.id === id) {
                tab.className = "px-6 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 bg-cafecito-dark text-white shadow-md";
            } else {
                tab.className = "px-6 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 text-cafecito-dark/60 hover:text-cafecito-dark hover:bg-cafecito-medium/10";
            }
        }
    });

    const detailsContainer = document.getElementById('location-details-container');
    
    detailsContainer.innerHTML = `
        <!-- Left Column: Info -->
        <div class="w-full lg:w-5/12 p-8 md:p-12 flex flex-col justify-center bg-[#FCFBFA] z-10">
            <span class="text-xs font-black uppercase tracking-widest text-cafecito-accent mb-2">Sucursal</span>
            <h3 class="font-title text-4xl lg:text-5xl font-bold text-cafecito-dark leading-tight mb-2">
                ${loc.name}
            </h3>
            <p class="text-cafecito-medium font-semibold mb-8">${loc.subtitle}</p>

            <div class="space-y-6 mb-10">
                <!-- Address -->
                <div class="flex gap-4 items-start">
                    <div class="w-10 h-10 rounded-full bg-cafecito-accent/15 flex items-center justify-center text-cafecito-accent shrink-0">
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <div>
                        <h4 class="font-bold text-cafecito-dark text-sm mb-1">Dirección</h4>
                        <p class="text-sm text-cafecito-dark/70 leading-relaxed">
                            ${loc.addressLine1}<br>${loc.addressLine2}
                        </p>
                    </div>
                </div>

                <!-- Schedule -->
                <div class="flex gap-4 items-start">
                    <div class="w-10 h-10 rounded-full bg-cafecito-accent/15 flex items-center justify-center text-cafecito-accent shrink-0">
                        <i class="fa-regular fa-clock"></i>
                    </div>
                    <div class="w-full">
                        <h4 class="font-bold text-cafecito-dark text-sm mb-2">Horarios</h4>
                        <div class="space-y-1.5 w-full">
                            ${loc.schedule.map(s => `
                                <div class="flex justify-between text-sm border-b border-cafecito-medium/10 pb-1.5">
                                    <span class="text-cafecito-dark/70">${s.days}</span>
                                    <span class="font-semibold text-cafecito-dark">${s.hours}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-3 mb-10">
                <a href="${loc.googleMapsUrl}" target="_blank" 
                   class="flex items-center justify-center gap-2 bg-white border border-cafecito-medium/20 text-cafecito-dark hover:bg-gray-50 px-5 py-3 rounded-xl font-bold shadow-sm transition-all text-sm w-full">
                    <i class="fa-solid fa-map-location-dot text-[#EA4335]"></i>
                    Google Maps
                </a>
                <a href="${loc.wazeUrl}" target="_blank" 
                   class="flex items-center justify-center gap-2 bg-[#33CCFF]/10 border border-[#33CCFF]/20 text-[#0099CC] hover:bg-[#33CCFF]/20 px-5 py-3 rounded-xl font-bold shadow-sm transition-all text-sm w-full">
                    <i class="fa-brands fa-waze"></i>
                    Waze
                </a>
            </div>

            <!-- Socials -->
            <div>
                <h4 class="font-bold text-cafecito-dark text-sm mb-4">Contacto Directo</h4>
                <div class="flex gap-4">
                    ${Object.entries(loc.socials).map(([key, social]) => {
                        if (social.gradient) {
                            return `<a href="${social.url}" target="_blank" class="w-11 h-11 rounded-full flex items-center justify-center text-white shadow-md transition-transform hover:scale-110 bg-gradient-to-tr ${social.gradient}"><i class="fa-brands ${social.icon} text-lg"></i></a>`;
                        } else {
                            return `<a href="${social.url}" target="_blank" class="w-11 h-11 rounded-full flex items-center justify-center text-white shadow-md transition-transform hover:scale-110" style="background-color: ${social.color}"><i class="fa-brands ${social.icon} text-lg"></i></a>`;
                        }
                    }).join('')}
                </div>
            </div>
        </div>

        <!-- Right Column: Map Embed -->
        <div class="w-full lg:w-7/12 min-h-[400px] lg:min-h-full bg-gray-100 relative">
            <iframe 
                src="${loc.embedUrl}" 
                class="absolute inset-0 w-full h-full border-0"
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    `;
};

// Auto-initialize when the DOM is ready
document.addEventListener('DOMContentLoaded', renderLocationsSection);
// If loaded asynchronously, render immediately
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    renderLocationsSection();
}
