import React, {Component} from 'react';
import styled from 'styled-components';
import Listitme from "./Listitme";

class Nav extends Component {
    render() {
        const Nav = styled.nav`
          width:100%;
          & ul{
            width:100%;display:flex;justify-content:space-between;
          }
        `;
        return (
            <Nav>
                <ul>
                    <Listitme/>
                </ul>
            </Nav>
        );
    }
}

export default Nav;