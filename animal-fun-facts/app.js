import React from 'react'
import ReactDOM from 'react-dom'
import { animals } from './animals';

const title = ''
const background = (
  <img 
    className='background' 
    alt='ocean' 
    src='/images/ocean.jpg'
  />
)
const images = []
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button'
      onClick={displayFact} 
    />
  )
}
let funFact = ''
function displayFact(e) {
  const animalName = e.target.alt
  const optionalIndex = Math.floor(Math.random()
  * animalName.facts.length)
  funFact = animalName.facts[optionalIndex]
  document.getElementById('funFact')
}

const animalFacts = (
  <div>
    {background}
    <div className='animals'>
      {images}
    </div>
    <p id={funFact}>
    </p>
    <h1>
      {title === '' ? 'Click an animal for a fun fact' : title}
    </h1>
  </div>
)

ReactDOM.render(animalFacts, document.getElementById('root'))
