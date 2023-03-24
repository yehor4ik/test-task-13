import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0 0 0;

  h2 {
    font-size: 21px;
  }

  & > div {
    display: flex;

    button:first-child {
      margin: 0 15px 0 0;
    }
  }
`;
