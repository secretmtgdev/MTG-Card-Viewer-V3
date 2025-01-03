import React from 'react';

import './CardViewer.css';
import { ICard } from '../../utils/interfaces';


const CardViewer = React.memo(({cardContent, onClick}: ICard.CardViewerProps) => {
    console.log('RENDERING CARD');
    return (
        <div className='card-viewer-container' onClick={onClick}>
            <header className='card-viewer-header'>
                <h2>{cardContent.name}</h2>
            </header>
        </div>
    )
});

export default CardViewer;