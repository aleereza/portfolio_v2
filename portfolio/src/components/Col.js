//some ground rules for column
//all items in column should fill the column width
//all items in column should be one of these: fill height, place in midle, place in top, place in buttom
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
        alignItems: "stretch",
        justifyContent: "center",
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
