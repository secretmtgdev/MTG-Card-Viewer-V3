import { Provider, useSelector } from 'react-redux';

import './App.css';

import DeckViewer from './components/deck-viewer/DeckViewer';
import { deckMock_default_props } from './utils/mocks';
import { store } from './utils/engagment';

function App() {
  const clickCount = useSelector((state:any) => state.clickCount); 
  return (
    <div className='app-container'>
      <div className='debug-stats'>
        <ul>
          <li key='click-count'>
            Number of times something was clicked: {clickCount}
          </li>
        </ul>
      </div>
      <DeckViewer {...deckMock_default_props} />
    </div>
  );
}

export default App;
