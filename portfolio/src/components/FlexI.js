// Layout Component
// Flex Item
import React from 'react'
import Link from 'gatsby-link'

class FlexI extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    var order = this.props.order //integer
    var flex = this.props.flex //string ex: "0 1 auto"
    return (
      <div style={{
        order: order,
        flex: flex,

        textAlign: "center",
        verticalAlign: "middle",

        // background: '#DCDCDC',
        border: "1px solid red",
      }}>
        {this.props.children}
      </div>
    )
  }
}

export default FlexI
