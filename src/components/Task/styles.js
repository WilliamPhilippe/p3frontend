import styled from 'styled-components';

export const Container = styled.li`

    display: flex;
    flex-direction: row;
    align-items: center;

    input {
        margin-right: 10px;
    }
  
    svg {
        margin-left: 10px;

        :hover {
            cursor: pointer;
        }
    }
`;
