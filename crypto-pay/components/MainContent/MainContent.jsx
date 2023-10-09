import { Intro } from '../Intro/Intro';
import { Cases } from '../Cases/Cases';
import { Features } from '../Features/Features';
import { Instructions } from '../Instructions/Instructions';
import { Api } from '../Api/Api';
import { Community } from '../Community/Community';
import { Footer } from '../Footer/Footer';

export const MainContent = () => {
  return (
    <>
      <Intro />
      <Cases />
      <Features />
      <Instructions />
      <Api />
      <Community />
      <Footer />
    </>
  );
};
