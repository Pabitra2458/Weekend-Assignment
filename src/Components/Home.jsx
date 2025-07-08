import React from 'react'
import './Home.css'
import myphoto from '../assets/myphoto.jpg'

const Home = () => {
  return (
    <div className='home'>
      <h1>  Hi,  <br />
           I Am Pabitra
      </h1>
      <img src={myphoto} alt="MyPhoto" id="photo" />
    </div>
  )
}

export default Home
