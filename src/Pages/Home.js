import React from 'react'
import { useLocation } from 'react-router-dom'

function Home() {
  const location = useLocation()
  return (
    <>
      <h1>
        Home
      </h1>
      <h1>
        Hello {location.state}
      </h1>
    </>
  )
}

export default Home
