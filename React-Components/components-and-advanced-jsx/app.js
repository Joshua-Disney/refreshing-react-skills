// import React from 'react'
// import ReactDOM from 'react-dom'

// class Quote extends React.Component {
//   render() {
//     return (
//       <blockquote>
//         <p>
//           What is important now is to recover our senses.
//         </p>
//         <cite>
//           <a target='_blank'
//             href='https://en.wikipedia.org/wiki/Susan_Sontag'>
//             Susan Sontag
//           </a>
//         </cite>
//       </blockquote>
//     )
//   }
// }

// ReactDOM.render(<Quote />, document.getElementById('app'))


// import React from 'react'
// import ReactDOM from 'react-dom'

// const owl = {
//   title: 'Excellent Owl',
//   src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg'
// };

// // Component class starts here:
// class Owl extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{owl.title}</h1>
//         <img
//           src={owl.src}
//           alt={owl.title}
//         />
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Owl />, document.getElementById('app'))


// import React from 'react'
// import ReactDOM from 'react-dom'

// const friends = [
//   {
//     title: "Yummmmmmm",
//     src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
//   },
//   {
//     title: "Hey Guys!  Wait Up!",
//     src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
//   },
//   {
//     title: "Yikes",
//     src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
//   }
// ];

// // New component class starts here:
// class Friend extends React.Component {
//   render() {

//     const friend = friends[2]
//     return (
//       <div>
//         <h1>{friend.title}</h1>
//         <img src={friend.src} />
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Friend />, document.getElementById('app'))


import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component {
  render() {
    let plan
    if (!fiftyFifty) {
      plan = 'out'
    } else {
      plan = 'to bed'
    }
    return <h1>Tonight I'm going {plan} WOOO</h1>
  }
}

ReactDOM.render(<TonightsPlan />, document.getElementById('app'))


import React from 'react';
import ReactDOM from 'react-dom';

class MyName extends React.Component {
	// name property goes here:
  get name() {
    return 'Disney'
  }

  render() {
    return <h1>My name is {this.name}.</h1>;
  }
}

ReactDOM.render(<MyName />, document.getElementById('app'));


import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

  render() {
    return <button onClick={this.scream}>AAAAAH!</button>;
  }
}

ReactDOM.render(<Button />, document.getElementById('app'))