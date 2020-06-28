import * as React from 'react'
import styled from '@emotion/styled'
import Header from './Header'
import Sidebar from './SideBar'

import { LayoutInterface } from '../../interfaces/LayoutInterfaces'

const StyledSection = styled.div`
  font-family: monospace;
  font-size: 20px;
  text-align: center;
  height: inherit;
  display: flex;
  flex-wrap: wrap;
  font-family: PingFang SC;
`

const StyledContent = styled.div`
  background-color: #eaeaea;
  flex: 3;
  min-height: 90%;
`

class Layout extends React.Component<LayoutInterface, {}> {
  render() {
    return (
      <StyledSection>
        <Header />
        <Sidebar />
        <StyledContent>{this.props.children}</StyledContent>
      </StyledSection>
    )
  }
}

export default Layout
