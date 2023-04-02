import React from 'react'

function Error({mensaje}) {
  return (
    <div className="bg-red-700 text-white text-center p-3 mb-5 uppercase font-bold rounded-md">
      <p>{mensaje}</p>
    </div>
  )
}

export default Error