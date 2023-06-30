import React from 'react'

const page = ({params}) => {
  return (
    <div className='py-24'>page {params.slug}</div>
  )
}

export default page