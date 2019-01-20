import styled from 'styled-components';

const CepBox = styled.section`
    width: 50%;
    height: 100px;
    background-color: #eee;
    padding: 0 0 10px 20px;

    > p  {
      font-weight: 900;
    }

    > aside {
        display: flex;
        flex-direction: row;
        align-items: center;
        color: #808080;
    }
`;

export {
    CepBox
}