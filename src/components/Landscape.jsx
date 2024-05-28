import { useState, useEffect } from "react"

function Landscape() {
    const [landscape, setLandscape] = useState('/assets/landscape.jpg')

    const fetchLandscape = async () => {
        const URL = 'https://api.unsplash.com/photos/random?query=landscape&orientation=landscape&client_id=' + import.meta.env.VITE_UNSPLASH_ACCESS_KEY
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
        setLandscape(data.urls.regular)
    }

    const fetchNature = async () => {
        const URL = 'https://api.unsplash.com/photos/random?query=nature&orientation=landscape&client_id=' + import.meta.env.VITE_UNSPLASH_ACCESS_KEY
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
        setLandscape(data.urls.regular)
    }

    useEffect(() => {
        let isLandscape = true;
        const intervalId = setInterval(() => {
            if (isLandscape) {
                fetchLandscape();
            } else {
                fetchNature();
            }
            isLandscape = !isLandscape;
        }, 60000); // 60000 milliseconds = 1 minute

        // Clean up the interval on unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="landscape">
            <img src={landscape} alt="landscape" className="landscape-img" />
        </div>
    )
}

export default Landscape