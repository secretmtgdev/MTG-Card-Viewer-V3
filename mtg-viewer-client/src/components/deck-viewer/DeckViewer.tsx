import React, { useCallback, useEffect, useState } from "react";
import CardViewer from "../card-viewer/CardViewer";
import { cardMock_default_cardContent } from "../../mocks/basicMocks";
import { IDeck } from "../../utils/interfaces";
import { debounce } from "../../utils/utils";
import { useDispatch } from "react-redux";

const DeckViewer = React.memo((props: IDeck.DeckViewerProps) => {
    const [deckData, setDeckData] = useState<string>('');

    const fetchDeckData = useCallback(async () => {
        const data = await fetch(props.deckUrl);
        setDeckData(await data.text());
    }, []);
    
    const dispatch = useDispatch();
    const clickTelemetryHandler = () => {
        dispatch({
            type: 'INCREMENT'
        });
    }

    const handleCardClick = debounce(useCallback(() => {
        console.log('Card was clicked');
    }, []), clickTelemetryHandler);

    useEffect(() => {
        fetchDeckData().catch(console.error);
    }, [fetchDeckData]);

    return (
        <div className='deck-view-container'>
            <header className='deck-view-header'>
                <h1>{props.name}</h1>
            </header>
            <CardViewer {...{
                cardContent: cardMock_default_cardContent,
                onClick: handleCardClick
            }
            } />
        </div>
    );
});

export default DeckViewer;