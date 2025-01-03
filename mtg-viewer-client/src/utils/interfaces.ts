export namespace ICard {
    export interface CardType {
        name: string;
        artLink: string;
    }

    export interface CardViewerProps {
        cardContent: CardType;
        onClick: () => void
    }
}

export namespace IDeck {
    export interface DeckViewerProps {
        name: string;
        deckUrl: string;
    }
}