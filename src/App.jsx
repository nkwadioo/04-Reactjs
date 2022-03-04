import React from 'react'
import Card from './components/Card'

import data from './data.js';

function App() {

  const destinations = data.map((destination, index) => {
    return <Card key={index} {...destination} />
  })

  return (
    <>
    <div className="app">
        <header>
            <img src="/images/airplane.png" alt="logo" />
            <p>my travel journal.</p>
        </header>
        <div className="cardWrapper">
          {destinations}
        </div>
    </div>
    <footer>
        <a href="https://www.flaticon.com/free-icons/travel" title="travel icons">Travel icons created by Freepik - Flaticon</a>
        <a href="https://stackoverflow.com/questions/47196800/reactjs-and-images-in-public-folder" title='lazy load'>Stack overflow - Joel Harkes
</a>
    </footer>
    </>
  );
}

export default App;


