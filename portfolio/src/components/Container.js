import React from 'react'
import Link from 'gatsby-link'

class Container extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    var w = this.props.width
    var h = this.props.height
    return (
      <div style={{
        background: '#DCDCDC',
        width: w,
        height: h,
        border: "1px solid black",
      }}>
        {this.props.children}
      </div>
    )
  }
}

export default Container

        // width: {this.state.width},
        // height: {this.state.height},
