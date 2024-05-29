import { useState, useEffect } from 'react';
import { game } from '../games';

function Games() {

  const [lastpage, setLastPage] = useState(localStorage.getItem('lastpage') || '/games');
  const [gameChosen, setGame] = useState(0);

  useEffect(() => {
    if (lastpage === '/') {
      localStorage.setItem('lastpage', '/games');
      setLastPage('/games');
      window.location.reload();
    }
  }, [lastpage]);

  useEffect(() => {
    // Add CSS to head
    const style = document.createElement('style');
    style.textContent = game[gameChosen].css;
    document.head.append(style);

    // Add JS to body
    const script = document.createElement('script');
    script.textContent = game[gameChosen].js;
    document.body.append(script);

    // Clean up on unmount
    return () => {
      document.head.removeChild(style);
      document.body.removeChild(script);
    };
  }, [gameChosen]);

  return (
    <div className='game-total-container'>
      <div className='game-list'>
        {game.map((game, index) => (
          <button key={index} onClick={() => setGame(index)}>{game.name}</button>
        ))}
      </div>
    <div dangerouslySetInnerHTML={{ __html: game[gameChosen].html }} className='game-cont-2'/>
    </div>
  )
}

export default Games