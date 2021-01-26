import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  /* New styles */
  display: flex;
  flex-direction: column;
  font-family: 'Lato', sans-serif;
  // Deixa branco no começo
  color: ${({ theme }) => theme.colors.contrastText};
}
html, body {
  min-height: 100vh;
}
#__next {
  flex: 1;
  display: flex;
  flex-direction: column;
}
`;

const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
        <title>Insecta Quiz</title>
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content="https://insecta-quiz.abexander159.vercel.app/" />
        <meta property="og:title" content="Insecta Quiz" />
        <meta property="og:site_name" content="Insecta Quiz" />
        <meta property="og:description" content="Teste os seus conhecimentos sobre os insetos e descubra um mundo novo ao seu redor" />
        <meta property="og:image" content="https://cbs4indy.com/wp-content/uploads/sites/22/2020/02/hypatia-h_35d038572f7bab582141373f1d44441e-h_109f8b34d6e43ae3642ad787d049f702.jpg.jpg?w=2560&h=1440&crop=1" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:type" content="website" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
