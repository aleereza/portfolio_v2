import React from 'react'
import Link from 'gatsby-link'
import profile_pic from "../images/test.png"

import styles from "./Pic.module.css"
// this component has no child
class Pic extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    // var p = this.props.portion
    // var w = this.props.width
    // var h = this.props.height
    return (
      <img className={styles.pic}
      src={profile_pic}
      alt="Profile Pic" />
    )
  }
}

export default Pic
