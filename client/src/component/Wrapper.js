import React, {Component} from 'react';
import styled from 'styled-components';
import Header from "./header/Header";


class Wrapper extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {position} = this.props;
        const Wrapper = styled.div`
          position:${position ?? 'relative'};
          & *{padding:0;margin:0;}
        `;

        return (
           <Wrapper positio={position}>
               <Header/>
           </Wrapper>
        );
    }
}

export default Wrapper;