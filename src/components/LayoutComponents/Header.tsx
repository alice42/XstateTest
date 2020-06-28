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
    <div
      style={{
        height: '35px',
        width: '35px',
        borderRadius: '50px',
        border: '2px solid #836fe8',
        cursor: 'pointer'
      }}
      onClick={() => test()}
    />
  </StyledHeader>
)

export default Header
