import { strapi } from '@strapi/client';
import { Footer } from './components/Footer';
import { AboutUs } from './sections/AboutUs';
import { Donations } from './sections/Donations';
import { Help } from './sections/Help';
import { HowToAdopt } from './sections/HowToAdopt';
import { Team } from './sections/Team';
import { Volunteer } from './sections/Volunteer';

export default async function Home() {
  const client = strapi({
    baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337',
    auth: process.env.NEXT_PUBLIC_STRAPI_API_TOKEN || '',
  });

  const data = await client
    .fetch('pagina-principal?populate=*')
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => {
      console.error('Error fetching data:', error);
    });

  return (
    <>
      <AboutUs
        title={data.section1_title}
        description={data.section1_description}
        backgroundImage={data.section1_background_image.url}
      />
      <HowToAdopt />
      <Volunteer />
      <Donations />
      <Team />
      <Help />
      <Footer />
    </>
  );
}
