// MainContainer has the window dimensions data
import React from 'react'
import Link from 'gatsby-link'

import MainContent from './MainContent'
import Container from './Container'
import Row from './Row'
import Col from './Col'

import Pic from './Pic'

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
        <Row>
          <Col>
            <Row>
              <Col portion = "1">
                <Container portion = "0">
                  <Pic/>
                </Container>
                <Container portion = "1">
                  <p>{w} inside col 1
                  </p>
                </Container>
              </Col>
              <Col portion = "5">
                <Container portion = "5">
                  {this.props.children}
                </Container>
                <Row portion = "1">
                  <Container portion = "1">
                    <p>About
                    </p>
                  </Container>
                  <Container portion = "1">
                    <p>Work
                    </p>
                  </Container>
                  <Container portion = "1">
                    <p>Contact
                    </p>
                  </Container>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default MainContainer
// <Container width = "100px" height = "100px">
