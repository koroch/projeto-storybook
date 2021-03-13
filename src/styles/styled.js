import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';
import Home from './templates/App';

import styled, { css } from 'styled-components';

const changeBackground = (theme, bg) => css`
  background: ${bg};
  color: #000;
`;

const Heading = styled.h1`
  color: purple;
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primaryColor};
  ${({ theme, bg }) => css`
    color: ${theme.colors.white};
    ${changeBackground(theme, bg)}
  `}
`;

export const Container2 = styled(Container).attrs({ as: 'article' })`
  background: blue;
  /* article > h1 */
  > ${Heading} {
    color: yellow;
  }
  /* article.h1 */
  ${Heading}:hover {
    color: brown;
  }
  /* article:hover */
  &:hover {
    background: pink;
  }
  /* article:hover */
  &::after {
    content: '----';
  }
`;

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Container bg="red">
                <Heading>OI</Heading>
            </Container>
            <Container2 bg="red">
                <Heading>OI</Heading>
            </Container2>
            <Heading>OI</Heading>
            <GlobalStyles />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
