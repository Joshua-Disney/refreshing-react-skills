// 1: Which of the following statements is false?

// My answer: React is a JacaScript library

// Correct Answer: The React library contains methods that are meant for interacting with the DOM.


// 2: How do you render a component instance?

// Answer: ReactDOM.render(<MyComponentClass />, document.getElementById('app'))


// 3: Replace the question marks so that <Example /> renders <h1>Yo!</h1>.

// class Example extends React.Component {
//   get greeting() {
//     return 'Yo!';
//   }
 
//   render() {
//     ???
//   }
// }

// My Answer: return <h1>{greeting}</h1>

// Correct Answer: return <h1>{this.greeting}</h1>


// 4: My Home
// Quiz: React Components

// Which of the following answers is the correct way to get <img /> to render with fuzzyFox‘s properties?

// import React from 'react';
// import ReactDOM from 'react-dom';
 
// const fuzzyFox = {
//   src: 'http://some.url',
//   alt: 'Fuzzy Fox'
// };
 
// class FuzzyFox extends React.Component {
//   render() {
//     return(
//       <div>
//         <h1>Friendly Fuzzy Fox</h1>
//         <img />
//       </div>
//     );
//   }
// }

// Answer: <img src={fuzzyFox.src} alt={fuzzyFox.alt} />


// 5: Which is a valid component instance?

// Answer: <MyComponentClass />


// 6: Which statement best describes a component class?

// Answer: A factory that mass-procudes React components according to a blueprint.


// 7: Why won’t this render?

// import React from 'react';
// import ReactDOM from 'react-dom';
 
// class Tubes extends React.Component {
//   render() {
//     return 
//       <div>
//         <h1>Welcome to the Internet!</h1>
//         <h2>Home of the world wide web</h2>
//       </div>
//   }
// }
 
// ReactDOM.render(<Tubes />, document.getElementById('app'));

// Answer: The outermost JSX element needs to be wrapped in parenthesis


// 8: The following code is supposed to render 100 to the screen, but it won’t work for some reason. What must be changed in order to get 100 to render?

// import React from 'react';
// import ReactDOM from 'react-dom';
 
// class FavoriteNumber extends React.Component {
//   render() {
//     const fave = 100;
//     return <h1>fave</h1>;
//   }
// }
 
// ReactDOM.render(<FavoriteNumber />, document.getElementById('app'));

// Answer: In the return statement, wrap fave in curly braces.


// 9: Which line of code is used to create a component class?

// Answer: class MyComponentClass extends React.Component {}

// 77% Correct