import styled from 'styled-components';
import background from '../../assets/images/headerBg.jpg'

export const Container = styled.div`
    display: flex;
    background: #191920 url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    justify-content: center;
    align-itens: center;
    height: auto;
    align-items: center;
    padding: 35px
    box-shadow: 0px 1px 3px white;

    .logo {
      height: 80px;
    }
    .logoElement {
        text-shadow: -1px 0 black, 0 3px black, -4px 0 black, 0 -1px black;
        margin-left: -12px;
        color: yellow;
        font-family: 'Raleway', sans-serif;
        letter-spacing: -1px;
        font-size: 5.5em;
        font-weight: bold;
    }

    @media (max-width: 500px) {
        .logo {
            height: 54px;
          }
          .logoElement {
              text-shadow: -1px 0 black, 0 3px black, -4px 0 black, 0 -1px black;
              margin-left: -12px;
              color: yellow;
              font-family: 'Raleway', sans-serif;
              letter-spacing: -1px;
              font-size: 3.5em;
              font-weight: bold;
          }
    }
`;

