const h1 = <h1>Hello world</h1>

{/* <p>Hello world</p> */}

const myArticle = <article></article>

const p1 = <p id='large'>foo</p>
const p2 = <p id='small'>bar</p>

const myDiv = (
    <div>
      <h1>Hello world</h1>
    </div>
  )

//   FAILS DUE TO HAVING NO OUTERMOST ELEMENT
//   const blog = (
//     <img src="pics/192940u73.jpg" />
//     <h1>
//       Welcome to Dan's Blog!
//     </h1>
//     <article>
//       Wow I had the tastiest sandwich today.  I <strong>literally</strong> almost freaked out.
//     </article>
//   );

const blog = (
    <div>
      <img src="pics/192940u73.jpg" />
      <h1>
        Welcome to Dan's Blog!
      </h1>
      <article>
        Wow I had the tastiest sandwich today.  I <strong>literally</strong> almost freaked out.
      </article>
    </div>
  );
     
  import React from 'react';
  import ReactDOM from 'react-dom';
  
  // Copy code here:
  ReactDOM.render(<h1>Hello world</h1>,
  document.getElementById('app'))

  ReactDOM.render(<h1>Render me!</h1>, document.getElementById('container'));

  const myList = (
    <ul>
      <li>First we take Manhattan</li>
      <li>Then we take Berlin</li>
    </ul>
  )
  
  ReactDOM.render(myList,document.getElementById('app'));

  const virtualDOM = <a href="https://www.codecademy.com/article/react-virtual-dom">Virtual DOM article</a>