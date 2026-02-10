import React from 'react'
import Navbar from '../component/Navbar'
import Herosection from '../component/Herosection'

const Home = () => {
  return (
    <div>
    <section className="selection:bg-[#5B9F0C] selection:text-black">

        <Navbar />
        <Herosection />

      </section>
    </div>
  )
}

export default Home
