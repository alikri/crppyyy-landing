import { Header } from '../Header/Header';
import { Intro } from '../Intro/Intro';
import { Cases } from '../Cases/Cases';
import { Features } from '../Features/Features';
import { Instructions } from '../Instructions/Instructions';
import { Api } from '../Api/Api';
import { Community } from '../Community/Community';
import { Footer } from '../Footer/Footer';

export const MainContent = ({ darkTheme }) => {
  return (
    <>
      <Header darkTheme={darkTheme} />
      <Intro darkTheme={darkTheme} />
      <Cases darkTheme={darkTheme} />
      <Features darkTheme={darkTheme} />
      <Instructions darkTheme={darkTheme} />
      <Api darkTheme={darkTheme} />
      <Community darkTheme={darkTheme} />
      <Footer darkTheme={darkTheme} />
    </>
  );
};
