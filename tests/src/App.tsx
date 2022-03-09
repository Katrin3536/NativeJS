import React from 'react';
import './App.css';

function App() {
    const elements = [
        {id: 2, name: 'Katya'},
        {id: 18, name: 'Sergey'},
        {id: 3, name: 'Yura'},
        {id: 19, name: 'Petya'}
    ];
    let LiElemets = elements.map(el => <li key={el.id}>{el.name}</li>);
    return (
        <div className="App">

            <ul>
                {LiElemets}
            </ul>
        </div>
    );
}

export default App;
