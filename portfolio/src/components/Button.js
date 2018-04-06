import React from 'react';
import Link from 'gatsby-link';

import styles from "./Button.module.css";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button className={styles.button}>
        {this.props.children}
      </button>
    );
  }
}

export default Button
