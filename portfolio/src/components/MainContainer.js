import React from 'react'
import Link from 'gatsby-link'

class MainContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { width: 0, height : 0}
  }
  //binding with arrow notation (?!)
  updateDimensions = () => {
    var w = window
    var d = document
    var documentElement = d.documentElement
    var body = d.getElementsByTagName('body')[0]
    var width = w.innerWidth || documentElement.clientWidth || body.clientWidth
    var height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight
    this.setState({width: width, height: height});
  }
  componentWillMount() {
    this.updateDimensions()
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <div>
      <span>{this.state.width} x {this.state.height}</span>
      {this.props.children}
      </div>
    )
  }
}

export default MainContent
