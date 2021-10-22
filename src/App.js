import './App.css';
import Canvas from './components/Canvas';

import { useState } from 'react';

function App() {
    const [canvasActive, setCanvasActive] = useState(true);

    const handleClick = () => {
        setCanvasActive(!canvasActive);
    };
    return (
        <div className="App">
            {canvasActive ? <Canvas /> : <p>Inactive</p>}
            <button onClick={handleClick}>Press me!</button>
        </div>
    );
}

export default App;
