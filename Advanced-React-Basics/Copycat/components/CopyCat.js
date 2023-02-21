import React from 'react';
import { styles } from '../styles'

export class CopyCat extends React.Component {
  
  render() {
    const copying = this.props.copying;
    const toggleTape = this.props.toggleTape
    
    return (
      <div style={styles.divStyles}>
        <h1 style={{ marginBottom: 80 }}>Copy Cat</h1>
        <input
          type='text'
          value={this.props.value}
          onChange={this.props.handleChange} 
        />
        <img 
          alt='cat'
          src={copying ? this.props.images.copycat : this.props.images.quietcat}
          onClick={toggleTape}
          style={styles.imgStyles}
        />
        <p>{copying === true ? value.diplay = true : value.display = false}</p>
      </div>
    );
  };
}
