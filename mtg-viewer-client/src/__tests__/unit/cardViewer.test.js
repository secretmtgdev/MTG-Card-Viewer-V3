import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CardViewer from '../../components/card-viewer/CardViewer';

describe('Card Viewer component', () => {
    test('Renders a card with a simple name', () => {
        const CARD_NAME = 'Simple Card';
        const cardContent = {
            name: CARD_NAME,
            artLink: ''
        };

        const onClickHandler = () => {};
        render(<CardViewer cardContent={cardContent} onClick={onClickHandler} />);
        expect(screen.getByText(CARD_NAME)).toBeInTheDocument();
    });
});