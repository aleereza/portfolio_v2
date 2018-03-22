// kind of flex container for columns
import React from 'react'
import Link from 'gatsby-link'

class Row extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    var p = this.props.portion
    var w = this.props.width
    var h = this.props.height
    return (
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flex: p,
        width: w,
        height: h,

        background: '#B22222',
        border: "2px solid #800000",
      }}>
        {this.props.children}
      </div>
    )
  }
}

export default Row
        // margin: "auto",
