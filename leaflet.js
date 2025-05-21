// Inicializace mapy
const map = L.map('map').setView([55.7558, 37.6173], 5);  // Nastavení výchozích souřadnic na Moskvu

// Přidání tile layer (mapové dlaždice)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Přidání markerů pro události
const events = [
    { 
        title: "Začátek Operace Barbarossa", 
        coordinates: [55.7558, 37.6173], 
        description: "22. června 1941 se začala operace Barbarossa, německý útok na Sovětský svaz."
    },

    { 
        title: "Obléhání Bretské pevnosti", 
        coordinates: [52.1, 23.7], 
        description: "Od 22. června 1941 začlo útok a postupné obléhání Bretské pevnosti."
    },
    
    {
        title: "Dobytí Minsku", 
        coordinates: [53.9, 27.57],
        description: "Bitva o Bialystok-Minsk, která trvala pouhých 18 dní, od 22. června do 9. července 1941, a byla jednou z prvních akcí operace Barbarossa",  
    }, 

    {
        title: "Bitva o Smolensk", 
        coordinates: [54.78, 32.04],
        description: "První bitva o Smolensk byla součástí německého plánu Operace Barbarossa a odehrávala se v rozpětí dvou měsíců od 10. července do 10. září 1941.",  
    },

    {
        title: "Pád Kyjeva", 
        coordinates: [50.45, 30.52],
        description: "Tři měsíce po zahájení útoku na Sovětský svaz vstoupily 19. září 1941 německé jednotky do Kyjeva",  
    },
    // Další události...
];

// Přidání markerů na mapu
events.forEach(event => {
    L.marker(event.coordinates).addTo(map)
        .bindPopup(`<b>${event.title}</b><br>${event.description}`);
});
