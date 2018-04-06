import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import MainContent from '../components/MainContent'
import MainContainer from '../components/MainContainer'

import FlexC from '../components/FlexC'
import FlexI from '../components/FlexI'
import Button from '../components/Button'

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
  <div id="main_div">
    <FlexC flow="row nowrap" justify="center" align="stretch" minw="300px">

      <FlexC flow="column wrap" justify="center" align="stretch" w="100px">
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

      <FlexC flow="column nowrap" justify="center" align="stretch" w="400px">
        <FlexI flex="1 0 auto">
          <MainContent>
            {children()}
          </MainContent>
        </FlexI>
        <FlexC flow="row nowrap" justify="center" align="stretch">
          <FlexI flex="1 1 0">
            <Button>
              About
            </Button>
          </FlexI>
          <FlexI flex="1 1 0">
            <Button>
              Works
            </Button>
          </FlexI>
          <FlexI flex="1 1 0">
            <Button>
              Contact
            </Button>
          </FlexI>
        </FlexC>
      </FlexC>

    </FlexC>
  </div>
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
