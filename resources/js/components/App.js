import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import Follow from './follow'
import Work from './Work' 

function App() {
    return (
        <div>
       
        
        <Home/>
        <Work/>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
