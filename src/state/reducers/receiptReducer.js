var initialState = [
    {name: "AirPods Pro", freq: 0},
    {name: "Nintendo Switch", freq: 0},
    {name: "PS5", freq: 0},
    {name: "Xbox Series X", freq: 0},
    {name: "Iphone 14 Pro Max - 1TB", freq: 0},
    {name: "Samsung S22 Ultra - 1TB", freq: 0},
    {name: "MacBook Pro 14' M1 Max (64GB RAM | 4TB)", freq: 0},
    {name: "2022 Mac Studio M1 Ultra (128GB RAM | 8TB)", freq: 0},
    {name: "Pro Gaming PC(AMD 5950X, RTX 3090, 64GB, 4TB SSD)", freq: 0},
    {name: "Razer Blade 14 Top spec (2022)", freq: 0},
    {name: "Mac Pro Top spec (2022) (28 Cores, 8TB SSD, 1TB RAM, 32GB Video)", freq: 0},
    {name: "Ipad Air M1 Chip (2022) (256GB)", freq: 0},
    {name: "Tesla Bot (Available 2024)", freq: 0},
    {name: "Start your own StartUp", freq: 0},
    {name: "Open Fast Food Franchise", freq: 0},
    {name: "Spotify for 80 years", freq: 0},
    {name: "Entire Steam library (2022 - No discounts)", freq: 0},
    {name: "Netflix for 80 Years", freq: 0},
    {name: "Entire production of Nvidia GPUs for 2022", freq: 0},
    {name: "Influence 1 high ranking politician", freq: 0},
    {name: "Private Concert with ANY Super Star", freq: 0},
    {name: "Give 10,000 USD to 5000 people", freq: 0},
    {name: "LG 88' OLED 8K ThinQ®", freq: 0},
    {name: "Fiat 500", freq: 0},
    {name: "Toyota Camry", freq: 0},
    {name: "Ford F150 Raptor 2022", freq: 0},
    {name: "Tesla Model S Plaid", freq: 0},
    {name: "Cybertruck (Tri Motor)", freq: 0},
    {name: "Tesla Roadster 2022", freq: 0},
    {name: "Ferrari F8", freq: 0},
    {name: "Lamborghini Aventador SVJ", freq: 0},
    {name: "Bugatti La Voiture Noire", freq: 0},
    {name: "1000 Acres of land", freq: 0},
    {name: "Private Island, Central America (medium size)", freq: 0},
    {name: "Eating out for 80 years (4 meals/day)", freq: 0},
    {name: "Diamond Ring (Tiffany - 1 carat)", freq: 0},
    {name: "Whisky Macallan Michael Dillon 1926", freq: 0},
    {name: "Rolex", freq: 0},
    {name: "Les Femmes d’Alger by Picasso", freq: 0},
    {name: "Monalisa by Leonardo da Vinci (estimate)", freq: 0},
    {name: "Helicopter Bell 206", freq: 0},
    {name: "10 plastic surgeries", freq: 0},
    {name: "One week in EVERY country of the planet", freq: 0},
    {name: "College Education (USA)", freq: 0},
    {name: "NFL Team (Average)", freq: 0},
    {name: "NBA Team (Average)", freq: 0},
    {name: "F1 Team (Average)", freq: 0},
    {name: "Jet Gulfstream G450", freq: 0},
    {name: "M1 Abrams", freq: 0},
    {name: "Produce a Hollywood Movie", freq: 0},
    {name: "Regular Modern Apartment (3 bd, 2 ba)", freq: 0},
    {name: "Paris Luxury Apartment(3 bd, 3 ba)", freq: 0},
    {name: "L.A. Home (5bd, 6ba)", freq: 0},
    {name: "L.A. Mega Mansion (8 bd, 20 ba)", freq: 0},
    {name: "Modern Building (35 condos + 10 Offices)", freq: 0},
    {name: "Sailboat", freq: 0},
    {name: "Mega Yatch", freq: 0},
];

export const receiptReducer = ((state = initialState, action) => {
    if(action.type === 'add'){
        const receipt = state.map(item => {
            if(item.name !== action.attr_name){
                return item;
            }

            return {
                ...item,
                freq: item.freq+1
            }
        })
        return receipt
    }else if(action.type === 'remove'){
        const receipt = state.map(item => {
            if(item.name !== action.attr_name){
                return item;
            }

            return {
                ...item,
                freq: item.freq-1
            }
        })
        return receipt
    }else if(action.type === 'clear'){
        return initialState;
    }
    else{
        return state;
    }
})