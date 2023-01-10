import React from 'react'

function BulletPoints({heading, points}) {
  return (
      <div className='my-4'>
        <div className='font-medium mb-2'>
          {heading}
          </div>
          <div className="ml-2">
            {points.map((point) => (
            <div key={point} className="flex  items-baseline mb-2">
                <div className="h-4 w-4 mr-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" 
                            stroke="currentColor"
                            class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                </div>
                <span>{point}</span>
            </div>
        ))}
      </div>
      </div>
  )
}

export default BulletPoints