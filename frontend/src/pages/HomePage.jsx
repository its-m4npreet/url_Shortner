import { MainCompo } from '../components/mainCompo';
import { Features } from '../components/features';
import { Footer } from '../components/Footer';

export const HomePage = ({ onUrlShortened }) => {
  return (
    <>
      <MainCompo onUrlShortened={onUrlShortened} />
      <Features />
      <Footer />
    </>
  );
};
