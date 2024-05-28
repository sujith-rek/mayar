import { useState, useEffect } from 'react';

function Jokes() {
  const [lastpage, setLastPage] = useState(localStorage.getItem('lastpage') || '/jokes');
  const [joke, setJoke] = useState({ setup: '', delivery: '' });
  const [showDelivery, setShowDelivery] = useState(false);

  useEffect(() => {
    if (lastpage === '/') {
      localStorage.setItem('lastpage', '/jokes');
      setLastPage('/jokes');
      window.location.reload();
    }
  }, [lastpage]);

  const getJoke = async () => {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist&type=twopart');
    const data = await response.json();
    setJoke({ setup: data.setup, delivery: data.delivery });
    setShowDelivery(false);
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div className="jokes-container">
      <button className="jokes-button" onClick={getJoke}>Tell me a joke!</button>
      <p className="joke-setup">{joke.setup}</p>
      {showDelivery && <p className="joke-delivery">{joke.delivery}</p>}
      {!showDelivery && joke.setup && (
        <button className="jokes-button" onClick={() => setShowDelivery(true)}>????????</button>
      )}
    </div>
  );
}

export default Jokes;
