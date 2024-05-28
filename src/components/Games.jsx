import { useState, useEffect } from 'react';

function Games() {

  const [lastpage, setLastPage] = useState(localStorage.getItem('lastpage') || '/games');

  useEffect(() => {
    if (lastpage === '/') {
      localStorage.setItem('lastpage', '/games');
      setLastPage('/games');
      window.location.reload();
    }
  }, [lastpage]);
  return (
    <div>Games</div>
  )
}

export default Games