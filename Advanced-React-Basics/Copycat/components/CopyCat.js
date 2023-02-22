import React from 'react';
import { styles } from '../styles'
import PropTypes from 'prop-types'

export class CopyCat extends React.Component {
  
  render() {
    
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
          src={this.props.copying ? this.props.images.copycat : this.props.images.quietcat}
          onClick={this.props.toggleTape}
          style={styles.imgStyles}
        />
        {this.props.copying && <p>{this.props.value}</p>}
      </div>
    );
  };
}
