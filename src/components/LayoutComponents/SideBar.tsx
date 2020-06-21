import * as React from 'react'
import styled from '@emotion/styled'

const StyledSidebar = styled.div`
  background-color: #a2a2a2;
  flex: 1;
  min-height: 90%;
`

const SideBar = () => (
  <StyledSidebar>
    <nav className="menu">
      <ul>
        <li>
          <a href="Account">Account</a>
        </li>
        <li>
          <a href="Foo">Foo</a>
        </li>
        <li>
          <a href="Bar">Bar</a>
        </li>
      </ul>
    </nav>
  </StyledSidebar>
)

export default SideBar
