import React from 'react'
import Link from 'gatsby-link'

import MainContent from './MainContent'
import Container from './Container'

class MainContainer extends React.Component {
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
    const w = this.state.width
    const h = this.state.height
    return (
      <div>
      <span>{w} x {h}</span>
        <Container width = {w/4} height = {w/4}>

          <p>{w}
          </p>
        </Container>
        <Container width = {w/2} height = {h/4}/>
      </div>
    )
  }
}

export default MainContainer
