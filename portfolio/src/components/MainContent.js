import React from 'react'
import Link from 'gatsby-link'

class MainContent extends React.Component {
  constructor(props) {
    super(props)
    // this.id = "main_content"
    // this.dim_id = this.id + "_dim" //id of dimension element
    // this.state = { width: 0, id: "main_content",  dim_id: "main_content_dim",}
  //
  }
  // componentDidMount () {
  //   var element = document.getElementById(this.id)
  //   this.updateDimensions()
  //   window.addEventListener('resize', this.updateDimensions);
  //
  //   // var dimension_div = document.createElement("div")
  //   // var dimension_text = document.createTextNode(this.width)
  //   // dimension_div.appendChild(dimension_text);
  //   // element.insertAdjacentElement('afterend', dimension_div)
  // }
  //
  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.updateDimensions);
  // }
  //
  // updateDimensions() {
  //   var element = document.getElementById(this.state.id)
  //   console.log(this.state.id)
  //   console.log("inside update")
  //   console.log(element)
  //   var rect = element.getBoundingClientRect()
  //   // rect is a DOMRect object with eight properties: left, top, right, bottom, x, y, width, height
  //   this.setState({ width: rect.width });
  //
  //   var dimension_div = document.getElementById(this.dim_id);
  //   dimension_div.innerHTML=this.state.width;
  //
  // }


  render() {
    return (
      <div>
        <p>something...
        </p>
      </div>
    )
  }
}

export default MainContent
