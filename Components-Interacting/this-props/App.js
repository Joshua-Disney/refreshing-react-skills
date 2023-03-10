// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Greeting } from './Greeting';

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>
//           Hullo and, "Welcome to The Newzz," "On Line!"
//         </h1>
//         <Greeting name="My Dude" signedIn={true} />
//         <article>
//           Latest:  where is my phone?
//         </article>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <App />, 
//   document.getElementById('app')
// );


import React from 'react';
import ReactDOM from 'react-dom';
import { List } from './List';

class App extends React.Component {
  render() {
    return (
      <div>
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>
          <li>Bongo Cat</li>
        </List>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);