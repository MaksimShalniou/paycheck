export interface CardParams {
    id: number;
    created: string;
    episode: Array<string>;
    gender: string;
    image: string;
    location: any;
    name: string;
    origin: any;
    species: string;
    status: string;
    type: string;
    url: string;
}

export interface ShowCardsParams {
    cards: Array<CardParams>;
    addCard: (cards: Array<CardParams>) => void;
}