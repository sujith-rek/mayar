import { useEffect, useState } from "react";
import { Tldraw } from 'tldraw';
import 'tldraw/tldraw.css';

function Idle() {
  const [lastpage, setLastPage] = useState(localStorage.getItem('lastpage') || '/idle');

  useEffect(() => {
    if (lastpage === '/') {
      localStorage.setItem('lastpage', '/idle');
      setLastPage('/idle');
      window.location.reload();
    }
  }, [lastpage]);

  useEffect(() => {
    if (localStorage.getItem('TLDRAW_USER_DATA_v3') !== null) {
      const data = JSON.parse(localStorage.getItem('TLDRAW_USER_DATA_v3'))
      data.user.isDarkMode = true
      localStorage.setItem('TLDRAW_USER_DATA_v3', JSON.stringify(data))
    }
    else{
      localStorage.setItem('TLDRAW_USER_DATA_v3', JSON.stringify({version: 5, user: {
        id: "TiFUD4Vsvy7V-_opfLCnV",
        isDarkMode: true
      }}))
    }
  })

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);


    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div style={{ position: 'fixed', top: '10vh', left: 0, right: 0, bottom: 0 }}>
      <Tldraw />
    </div>
  );
}

export default Idle;