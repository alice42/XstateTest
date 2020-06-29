import * as React from 'react'
import styled from '@emotion/styled'
import { timeStamp } from 'console'

const StyledHeader = styled.div`
  background-color: #fcfcfc;
  flex-basis: 100%;
  height: 70px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 70px;
  padding-right: 70px;
  color: #836fe8;
  font-size: 2.25rem;
  font-weight: 600;
  justify-content: space-between;
`

const Header = () => (
  <StyledHeader>
    <div>Mansa.</div>
  </StyledHeader>
)

export default Header
