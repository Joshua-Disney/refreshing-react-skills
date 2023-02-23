import React from 'react';
import ReactDOM from 'react-dom';
import { CopyCat } from '../components/CopyCat'

class CopyCatContainer extends React.Component {
    constructor(props) {
    super(props);

    this.state = { 
      copying: true,
      input: '',
      name: 'Jerry'
    };

    this.toggleTape = this.toggleTape.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  toggleTape() {
    this.setState({copying: !this.state.copying, input: ''})
  }

  handleChange(e) {
    this.setState({input: e.target.value})
  }
  
  render() {
    
    return (
      <CopyCat 
        copying={this.state.copying} 
        input={this.state.input}
        name={this.state.name}
        toggleTape={this.toggleTape}
        handleChange={this.handleChange}
      />
    );
  };
}


ReactDOM.render(<CopyCatContainer />, document.getElementById('app'));
