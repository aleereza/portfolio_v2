// Layout Component
// Flex Container
import React from 'react'
import Link from 'gatsby-link'

class FlexC extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    var flow = this.props.flow //string, flex-direction flex-wrap, ex: "row nowrap"
    var justify = this.props.justify //string, justify-content ex: "center"
    var align = this.props.align //string, align-items ex: "stretch"
    var minw = this.props.minw
    var maxw = this.props.maxw
    var w = this.props.w
    var h = this.props.h

    var order = this.props.order //integer
    var flex = this.props.flex //string ex: "0 1 auto"

    return (
      <div style={{
        order: order,
        flex: flex,

        minWidth: minw,
        maxWidth: maxw,
        width: w,
        height: h,
        overflow: "auto",
        display: "flex",
        flexFlow: flow,
        justifyContent: justify,
        alignItems: align,

        // background: '#DCDCDC',
        border: "1px solid blue",
      }}>
        {this.props.children}
      </div>
    )
  }
}

export default FlexC
