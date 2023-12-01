interface Client {
    id: number;
    name: string;
    phone: string;
    email: string;
    photo: string;
    createdAt: string;
    properties: Property[];
    visits: {
        property: Property;
        date: string;
    }[];
}

const cleaningSchedule = [
    {   
        id: 1,
        date: '2020-01-01',
        team: 'https://example.com/team/1',
        property: 'https://example.com/property/1',
    },
]


interface CleaningSchedule {
    id: number;
    date: string;
    team: string;
    property: string;
}

interface Property {
    id: number;
    category: string;
    name: string;
    adress: string;
    city: string;
    state: string;
    country: string;
    rooms: number;
    bathrooms: number;
    parkingSpaces: number;
    squareMeters: number;
    postalCode: string;
    latitude: number;
    longitude: number;
    basement: boolean;
    images: string[];
    owner: {
        name: string;
        phone: string;
        email: string;
    };
    recurrence: {
        type: string;
        interval: number;
    };
    schedule: {
        id: number;
        date: string;
        time: string;
    }[];
}

interface User {
    id: number;
    name: string;
    phone: string;
    email: string;
    photo: string;
    admin: boolean;
    teams: string[];
    categories: string[];
}

interface Team {
    id: number;
    name: string;
    photo: string;
    leader: string;
    members: string[];
}

interface Country {
    iso2: string;
    iso3: string;
    country: string;
    cities: string[];
}
