import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Head from 'next/head';
import { Fragment } from 'react';


const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <Fragment>
    <Head>
      <title>Insecta Quiz</title>
      <meta property="og:locale" content="pt_BR"/>
      <meta property="og:url" content="https://insecta-quiz.abexander159.vercel.app/"/>
      <meta property="og:title" content="Insecta Quiz"/>
      <meta property="og:site_name" content="Insecta Quiz"/>
      <meta property="og:description" content="Teste os seus conhecimentos sobre os insetos e descubra um mundo novo ao seu redor"/>
      <meta property="og:image" content="https://cbs4indy.com/wp-content/uploads/sites/22/2020/02/hypatia-h_35d038572f7bab582141373f1d44441e-h_109f8b34d6e43ae3642ad787d049f702.jpg.jpg?w=2560&h=1440&crop=1"/>
      <meta property="og:image:type" content="image/jpeg"/>
      <meta property="og:image:width" content="800"/> 
      <meta property="og:image:height" content="600"/> 
      <meta property="og:type" content="website"/>
    </Head>
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>exemplo/exemplo</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/abexander159" />
    </QuizBackground>
    </Fragment>
    
    );
}
