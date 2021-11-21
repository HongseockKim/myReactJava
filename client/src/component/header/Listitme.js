import React, {Component} from 'react';
import styled from 'styled-components';

class Listitme extends Component {
    render() {
        const ListItme = styled.li`
          list-style: none;text-align: center;
        `;
        return (
            <ListItme>
                메뉴
            </ListItme>
        );
    }
}

export default Listitme;