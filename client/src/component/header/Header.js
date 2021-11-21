import React, {Component} from 'react';
import styled from 'styled-components';
import Nav from "./Nav";


class Header extends Component {
    render() {
        const Header = styled.header``;
        return (
            <Header as="header">
                <Nav/>
            </Header>
        );
    }
}

export default Header;