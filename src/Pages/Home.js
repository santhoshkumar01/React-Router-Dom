import React from 'react'
import { useLocation  } from 'react-router-dom'

function Home() {
  const location = useLocation()
  // const history = useHistory ()
  return (
    <>
      <h1>
        Home
      </h1>
      {/* <button onClick={()=>history.push('/contact')}>Redirect To Contact Page</button> */}
      <h1>
        Hello {location.state}
      </h1>
    </>
  )
}

export default Home
