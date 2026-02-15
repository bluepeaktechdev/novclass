import React from 'react'

const Footers = () => {
     const date = new Date();
      const year = date.getFullYear();
  return (
   <div className='bg-green-700'>
        <p> {year} Non-Profit Organization. All rights reserved.</p>
      </div>
  )
}

export default Footers
