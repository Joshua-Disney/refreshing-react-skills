// 10 out of 11 correct, 90%

// 1: Which file or files should use ReactDOM.render()?

// // Inner.js
 
// import React from 'react';
 
// export class Inner extends React.Component {
//   render() {
//     return <p>How's it going?</p>;
//   }
// }
 
// // Outer.js
 
// import React from 'react';
// import { Inner } from './Inner';
 
// class Outer extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello world</h1>
//         <Inner />
//       </div>
//     );
//   }
// }

// Answer: Correct! Since Outer.js renders Inner.js, Outer.js is the root component and should use ReactDOM.render().


// 2: this.props evaluates to what data type?

// Answer: Object


// 3: Which is the correct way to pass a prop?

// Correct Answer: <Headline text='Hello world' />


// 4: What does this.props.children return?

// Answer: Everything between a component's opening and closing tags


// 5: Which file or files needs to use an export statement?

// // Inner.js
 
// import React from 'react';
 
// class Inner extends React.Component {
//   render() {
//     return <p>How's it going?</p>;
//   }
// }
 
// // Outer.js
 
// import React from 'react';
// import { Inner } from './Inner';
 
// class Outer extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello world</h1>
//         <Inner />
//       </div>
//     );
//   }
// }

// Answer: Inner.js


// 6: Importer.js and Exporter.js share a parent folder. In Importer.js, what code evaluates to "Hello world"?

// // Exporter.js
// export const myObj = {
//   dang: "Hello world"
// };

// Answer: import { myObj } from './Exporter.js'
// myObj.dang


// 7: Why can’t you call this.setState from within the render method?

// Answer: this.setState automatically calls render, so it would cause an infinite loop


// 8: How would you get an <Animal /> to render <h1>cat</h1>?

// import React from 'react';
 
// class Animal extends React.Component {
//   render() {
//     if (this.props.type == 'cat') {
//       return <h1>Meow Meow</h1>;
//     } else if (this.props.type == 'dog') {
//       return <h1>Arf Arf</h1>;
//     }
//   }
// }

// Answer: You can't


// 9: What’s wrong with this way of setting an initial state?

// constructor(props) {
//   super(props);
//   this.state = 'Hello world';
// }

// Answer: this.state should be equal to an object.


// 10: What could you put in Exporter.js to make h1 equal <h1>Hello world</h1>?

// // Importer.js
// import { greet } from './Exporter';
// const h1 = greet('Hello world');

// Answer: export function greet(text) {
//     return <h1>{text}</h1>
// }


// 11: Fill in the blank, so that clicking on a button will capitalize the button’s inner text.

// import React from 'react';
 
// class Button extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { message: 'Hello world' };
//     this.capitalize = this.capitalize.bind(this);
//   }
 
//   capitalize() {
//     this.setState({
//       message: this.state.message.toUpperCase()
//     });
//   }
 
//   render() {
//     return (
//       <button ____________________>
//         {this.state.message}
//       </button>
//     );
//   }
// }

// Answer: onClick={this.capitalize}
