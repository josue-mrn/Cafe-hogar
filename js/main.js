const products = [
    {
        title: "Café Miel",
        brand: "El dulce sabor de Guatemala",
        desc: "Disfruta de notas dulces y balanceadas que capturan la esencia del auténtico café artesanal.",
        price: "Q100.00",
        image: "https://res.cloudinary.com/dacothbhi/image/upload/q_auto/f_auto/v1779125241/CafeMielBolsa_wlh5nx.webp"
    },
    {
        title: "Café San Marcos",
        brand: "BEAN AROMA CAFE",
        desc: "Elaborado con granos de la más alta calidad, este café combina notas achocolatadas con un toque de frutos secos, ofreciendo una experiencia de sabor rica y equilibrada",
        price: "Q100.00",
        image: "https://res.cloudinary.com/dacothbhi/image/upload/q_auto/f_auto/v1779125339/cafeSanMarcos_ichhnw.webp"
    },
    {
        title: "Café Gourmet de Antigua",
        brand: "Café G & Co. Edición Artesanal",
        desc: "Café de altura con tueste medio y grano entero, presentado en una hermosa bolsa de tejido típico hecha a mano. Destaca por sus notas sutiles a limón, cacao oscuro y aromas florales.",
        price: "Q120.00",
        image: "https://res.cloudinary.com/dacothbhi/image/upload/q_auto/f_auto/v1779125435/bolsaCafetela_ssuec0.jpg"
    },
    {
        title: "Capsulas de Café",
        brand: "Café G & Co. Edición Artesanal",
        desc: "Disfruta de la conveniencia y calidad de nuestro café en cápsulas, perfectas para preparar una taza deliciosa en minutos.",
        price: "Q60.00",
        image: "https://res.cloudinary.com/dacothbhi/image/upload/q_auto/f_auto/v1779125784/cafecapsula_cnbzoo.png"
    }
];

const container = document.getElementById('products-container');

products.forEach(product => {
    container.innerHTML += `
        <article class="group relative aspect-square w-full max-w-sm overflow-hidden rounded-2xl bg-gray-100 shadow-md">
            <img src="${product.image}" alt="${product.title}" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105">
            <div class="absolute inset-0 flex flex-col justify-between bg-[#c2a68a]/90 p-6 opacity-0 backdrop-blur-[3px] transition-all duration-500 group-hover:opacity-100">
                <div class="text-right">
                    <span class="inline-block rounded-full bg-amber-950/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-950">
                        ${product.brand}
                    </span>
                </div>
                <div class="text-center">
                    <h3 class="text-2xl font-black tracking-tight text-amber-950">
                        ${product.title}
                    </h3>
                    <p class="mt-3 text-sm font-medium leading-relaxed text-amber-900/90">
                        ${product.desc}
                    </p>
                </div>
                <div class="border-t border-amber-950/20 pt-4 text-center">
                    <span class="block text-xs font-bold uppercase tracking-widest text-amber-950/60">Precio</span>
                    <span class="text-3xl font-black text-amber-950">${product.price}</span>
                </div>
            </div>
        </article>
    `;
});
