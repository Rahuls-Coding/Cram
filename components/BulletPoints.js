import React from 'react'

function BulletPoints({heading, points}) {
  return (
      <div>
          {heading}
          <ul>
              {points.map((point) => {
                  return (<li key={point}>{point}</li>)
              })}
          </ul>
      </div>
  )
}

export default BulletPoints