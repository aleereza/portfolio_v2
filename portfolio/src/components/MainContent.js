import React from 'react'
import Link from 'gatsby-link'

class MainContent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
	       {this.props.children}
      </div>
    )
  }
}

export default MainContent
