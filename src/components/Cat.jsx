import { useState, useEffect, useRef } from "react"
import { Neko } from "neko-ts"

function Cat() {
  const neko = useRef(new Neko({
    nekoSize: 70,
    origin: {
      x: 50,
      y: 100,
    },
  }))

  const [catUrl, setCatUrl] = useState('')
  localStorage.setItem('lastpage', '/cat')

  useEffect(() => {
    fetchCat()
  }, [])

  const CAT_API_RANDOM = 'https://api.thecatapi.com/v1/images/search'

  const fetchCat = async () => {
    const resp = await fetch(CAT_API_RANDOM, {
      headers: {
        'x-api-key': import.meta.env.VITE_CAT_API_KEY,
      },
    })

    if (resp.ok) {
      const data = await resp.json()
      setCatUrl(data[0].url)
    }

  }

  return (
    <div>
      <div ref={neko}></div>
      <div className="cat-container">
        <img src={catUrl} alt="cat"
          style={{
            width: '300px',
            height: '300px',
            objectFit: 'cover',
          }}
        />
        <button onClick={fetchCat}>New Cat</button>
      </div>
    </div>
  )
}

export default Cat