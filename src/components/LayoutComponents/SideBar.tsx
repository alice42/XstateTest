import * as React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

const StyledSidebar = styled('div')`
  background-color: #fcfcfc;
  flex: 1;
  min-height: 90%;
  min-width: 230px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 3;
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: start;
  & > a {
    padding-left: 70px;
    width: 100%;
    text-decoration: none;
    color: #836fe8;
  }
`

const SideBar = () => {
  const navLinks = [
    {
      id: 0,
      name: 'Accounts',
      link: '/Accounts',
      isSelected: false
    },
    {
      id: 1,
      name: 'Foo',
      link: '/Foo',
      isSelected: false
    },
    {
      id: 2,
      name: 'Bar',
      link: '/Bar',
      isSelected: false
    }
  ]

  return (
    <StyledSidebar>
      {navLinks.map(navlink => (
        <NavLink
          key={`navlinkSidebar_${navlink.id}`}
          to={navlink.link}
          activeStyle={{
            color: '#fcfcfc',
            backgroundColor: '#836fe8'
          }}
        >
          {navlink.name}
        </NavLink>
      ))}
    </StyledSidebar>
  )
}

export default SideBar
