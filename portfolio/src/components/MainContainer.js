// MainContainer has the window dimensions data
import React from 'react'
import Link from 'gatsby-link'

import MainContent from './MainContent'
import Container from './Container'
import Row from './Row'
import Col from './Col'

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
                <Container width = "100px" height = "100px">
                  <p>{w} inside col 1
                  </p>
                </Container>
                <Container>
                  <p>{w} inside col 1
                  </p>
                </Container>
              </Col>
              <Col portion = "3">
                <Container portion = "3">
                  {this.props.children}
                </Container>
                <Row portion = "1">
                  <Container portion = "1">
                    <p>1
                    </p>
                  </Container>
                  <Container portion = "1">
                    <p>222222222
                    </p>
                  </Container>
                  <Container portion = "2">
                    <p>3
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
