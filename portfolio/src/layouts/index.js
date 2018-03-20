import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import MainContent from '../components/MainContent'
import MainContainer from '../components/MainContainer'
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
      <MainContent>
        {children()}
      </MainContent>
    </MainContainer>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
