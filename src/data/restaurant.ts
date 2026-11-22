
export interface Restaurant {
    id: string;
    name: string;
    city: string;
    province: string;
    instagram: string;
    address: string | null;
    phone: string | null;
    openingHours: string | null;
    deliveryEnabled: boolean;
    onlineOrdersEnabled: boolean;
    demoMode: boolean;
}

export const restaurant: Restaurant = {
    id: "new-refugio",
    name: "New Refugio",
    city: "Villasana de Mena",
    province: "Burgos",
    instagram: "https://www.instagram.com/newrefugio18/",

    // Pendiente de confirmar con el propietario
    address: null,
    phone: null,
    openingHours: null,

    // Deshabilitado mientras desarrollamos la demo
    deliveryEnabled: false,
    onlineOrdersEnabled: false,
    demoMode: true,
};
