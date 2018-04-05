import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import MainContent from '../components/MainContent'
import MainContainer from '../components/MainContainer'

import FlexC from '../components/FlexC'
import FlexI from '../components/FlexI'

import Pic from '../components/Pic'

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Alireza's portfolio"
      meta={[
        { name: 'description', content: 'portfolio' },
        { name: 'keywords', content: 'web developer, Reactjs, Django' },
      ]}
    />
    <MainContainer>
      SsSsS
    </MainContainer>
    <FlexC flow="row nowrap" justify="center" align="stretch" minw="300">

      <FlexC flow="column wrap" justify="center" align="stretch" w="100">
        <FlexI flex="0 0 10pxs">
          <Pic/>
        </FlexI>
        <FlexI flex="1 0 auto">
          link1
        </FlexI>
        <FlexI flex="1 0 auto">
          link2
        </FlexI>
        <FlexI flex="1 0 auto">
          link3
        </FlexI>
      </FlexC>

      <FlexC flow="column nowrap" justify="center" align="stretch" w="400">
        <FlexI flex="1 0 auto">
          main content
        </FlexI>
        <FlexC flow="row nowrap" justify="center" align="stretch">
          <FlexI flex="1 0 auto">
            main link1
          </FlexI>
          <FlexI flex="1 0 auto">
            main link2
          </FlexI>
          <FlexI flex="1 0 auto">
            main link3
          </FlexI>
        </FlexC>
      </FlexC>

    </FlexC>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

// <MainContainer>
//   <MainContent>
//     {children()}
//   </MainContent>
// </MainContainer>
