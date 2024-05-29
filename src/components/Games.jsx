import { useState, useEffect } from 'react';
import { gamearr } from '../games';

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
    style.textContent = gamearr[gameChosen].css;
    document.head.append(style);

    // Add JS to body
    const script = document.createElement('script');
    script.textContent = gamearr[gameChosen].js;
    document.body.append(script);

    if(gamearr[gameChosen].res !== undefined) {
      // load the resourses js  
      const script2 = document.createElement('script');
      script2.classList.add('res-js');
      script2.src = gamearr[gameChosen].res;
      script2.async = true;
      document.body.append(script2);
    }

    // Clean up on unmount
    return () => {
      document.head.removeChild(style);
      document.body.removeChild(script);
      const resjs = document.querySelector('.res-js');
      if (resjs) {
        document.body.removeChild(resjs);
      }
    };
  }, [gameChosen]);

  return (
    <div className='game-total-container'>
      <div className='game-list'>
        {gamearr.map((gamec, index) => (
          <button key={index} onClick={() => setGame(index)}>{gamec.name}</button>
        ))}
      </div>
    <div dangerouslySetInnerHTML={{ __html: gamearr[gameChosen].html }} className='game-cont-2'/>
    </div>
  )
}

export default Games