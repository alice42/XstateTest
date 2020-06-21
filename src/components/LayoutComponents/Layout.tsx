import * as React from 'react';
import styled from "@emotion/styled";
import Header from './Header';
import Sidebar from './SideBar';
import Footer from './Footer';

import { LayoutInterface } from '../../interfaces/LayoutInterfaces';

const StyledSection = styled.div`
  font-family: monospace;
  font-size: 20px;
  text-align: center;
  height: inherit;
  display: flex;
  flex-wrap: wrap;
`;

const StyledContent = styled.div`
  background-color: #575757;
  flex: 3;
  min-height: 90%;
`;

class Layout extends React.Component<LayoutInterface, {}> {
  render() {
    return (
      <StyledSection>
        <Header />
        <Sidebar />
        <StyledContent>{this.props.children}</StyledContent>
        {/* <Footer /> */}
      </StyledSection>
    );
  }
}

export default Layout;
