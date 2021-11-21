import React, {Component} from 'react';
import styled from 'styled-components';
import Wrapper from "./component/Wrapper";
import Header from "./component/header/Header";

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            value : ""
        }
    }


    render() {

        const Container = styled.div`
            background-color: ${(props) => props.theme.bgColor}
            color: ${props => props.theme.textColor}
         `;
        console.log('렌더 순서 2');
    return (
        <Container>
            <Wrapper>{this.children}</Wrapper>
        </Container>
    )
  }
}
export  default App;
