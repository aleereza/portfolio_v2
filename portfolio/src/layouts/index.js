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
    <div className="layout">
      <div className="layout_1">
        <div className="layout_1_1">
          <Pic/>
        </div>
        <div className="layout_1_2">
          <div className="layout_1_2_1">
            Linkedin
          </div>
          <div className="layout_1_2_1">
            Github
          </div>
          <div className="layout_1_2_1">
            Codepen
          </div>
        </div>
      </div>

      <div className="layout_2">
        <div className="layout_2_1">
          <MainContent>
            {children()}
          </MainContent>
        </div>
        <div className="layout_2_2">
          <div className="layout_2_2_1">
            <Button>
              About
            </Button>
          </div>
          <div className="layout_2_2_1">
            <Button>
              Works
            </Button>
          </div>
          <div className="layout_2_2_1">
            <Button>
              Contact
            </Button>
          </div>
        </div>
      </div>

    </div>
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
