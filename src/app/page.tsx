import { Footer } from './components/Footer';
import { AboutUs } from './sections/AboutUs';
import { Donations } from './sections/Donations';
import { Help } from './sections/Help';
import { HowToAdopt } from './sections/HowToAdopt';
import { Team } from './sections/Team';
import { Volunteer } from './sections/Volunteer';

export default function Home() {
  return (
    <>
      <AboutUs />
      <HowToAdopt />
      <Volunteer />
      <Donations />
      <Team />
      <Help />
      <Footer />
    </>
  );
}
