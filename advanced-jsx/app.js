import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myDiv = <div className="big">I AM A BIG DIV</div>

ReactDOM.render(myDiv, document.getElementById('app'))

const profile = (
    <div>
      <h1>I AM JENKINS</h1>
      <img src="images/jenkins.png" />
      <article>
        I LIKE TO SIT
        <br/>
        JENKINS IS MY NAME
        <br/>
        THANKS HA LOT
      </article>
    </div>
  );

ReactDOM.render(<h1>2 + 3</h1>, document.getElementById('app'))

ReactDOM.render(<h1>{2 + 3}</h1>, document.getElementById('app'))

const math = <h1>2 + 3 = {2 + 3}</h1>
const pi = (
  <div>
    <h1>
      PI, YALL!
    </h1>
    <p>
      {Math.PI.toFixed(20)}
    </p>
  </div>
);

ReactDOM.render(pi, document.getElementById('app'))

const theBestString = 'tralalalala i am da best';

ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('app'));

const goose = 'https://content.codecademy.com/courses/React/react_photo-goose.jpg';

// Declare new variable here:
const gooseImg = (
  <img
    src={goose} />
)

ReactDOM.render(gooseImg, document.getElementById('app'))

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img 
		src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg" 
		alt="kitty"
    onClick={makeDoggy} />
);

ReactDOM.render(kitty, document.getElementById('app'));


function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
  doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};
let img;

// if/else statement begins here:
if (coinToss() === 'heads') {
  img = (
    <img
      src={pics.kitty}
    />
  )
} else {
  img = <img src={pics.doggy} />
}

ReactDOM.render(img, document.getElementById('app'))

function coinToss () {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
  doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};

const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;

ReactDOM.render(
	img, 
	document.getElementById('app')
);



// judgmental will be true half the time.
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      {/* Only displays if judgmental === false */}
      {!judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);

ReactDOM.render(
	favoriteFoods, 
	document.getElementById('app')
);


const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person =>
  // expression goes here:
  (
    <li>{person}</li>
  )
);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'))

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) =>
  // expression goes here:
  (
    <li key={'person_' + i}>{person}</li>
  )
);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'))

const greatestDivEver = <div>i am div</div>;

const greatestDivEver = React.createElement(
  "div",
  null,
  "i am div"
);
