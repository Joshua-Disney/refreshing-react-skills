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