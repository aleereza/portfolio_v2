import React from 'react'
import Link from 'gatsby-link'

class Col extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    var p = this.props.portion
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        flex: p,
        background: '#00BFFF',
        border: "2px solid #0033cc",
      }}>
        {this.props.children}
      </div>
    )
  }
}

export default Col
