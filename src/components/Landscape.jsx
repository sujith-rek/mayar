import { useState, useEffect, useRef } from "react"
import { Neko } from "neko-ts"

function Landscape() {
    const [landscape, setLandscape] = useState('/assets/landscape.jpg')
    const [counter, setCounter] = useState(60)
    const [firstTime, setFirstTime] = useState(localStorage.getItem('firstTime') || true)
    localStorage.setItem('lastpage', '/')

    const neko = useRef(new Neko({
        nekoSize: 70,
        origin: {
            x: 50,
            y: 100,
        },
    }))

    useEffect(() => {
        if (firstTime === 'true') {
            alert('Welcome to the website!, The image will change every minute, stayback and enjoy the view, for mobile double tap to see the cat moving around')
            setFirstTime(false)
            localStorage.setItem('firstTime', false)
        }
    }, [firstTime])

    const fetchLandscape = async () => {
        const URL = 'https://api.unsplash.com/photos/random?query=landscape&orientation=landscape&client_id=' + import.meta.env.VITE_UNSPLASH_ACCESS_KEY
        const response = await fetch(URL)
        const data = await response.json()
        setLandscape(data.urls.regular)
    }

    const fetchNature = async () => {
        const URL = 'https://api.unsplash.com/photos/random?query=nature&orientation=landscape&client_id=' + import.meta.env.VITE_UNSPLASH_ACCESS_KEY
        const response = await fetch(URL)
        const data = await response.json()
        setLandscape(data.urls.regular)
    }

    useEffect(() => {
        if (counter > 0) {
            const timer = setTimeout(() => setCounter(counter - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [counter]);

    useEffect(() => {
        let isLandscape = true;
        const intervalId = setInterval(() => {
            if (isLandscape) {
                fetchLandscape();
            } else {
                fetchNature();
            }
            isLandscape = !isLandscape;
            setCounter(60)
        }, 60000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div ref={neko}></div>

            <div className="landscape">
                <h1>Time till new image: {counter} seconds</h1>
                <img src={landscape} alt="landscape" className="landscape-img" />
            </div>
        </>
    )
}

export default Landscape