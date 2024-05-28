import{ useState, useEffect } from 'react';

function Jokes() {

  const [lastpage, setLastPage] = useState(localStorage.getItem('lastpage') || '/jokes');

  useEffect(() => {
    if (lastpage === '/cat') {
      localStorage.setItem('lastpage', '/jokes');
      setLastPage('/jokes');
      window.location.reload();
    }
  }, [lastpage]);

  return (
    <div>Jokes</div>
  )
}

export default Jokes