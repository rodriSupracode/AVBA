import { strapi } from '@strapi/client';
import { Footer } from './components/Footer';
import { AboutUs } from './sections/AboutUs';
import { Donations } from './sections/Donations';
import { Help } from './sections/Help';
import { HowToAdopt } from './sections/HowToAdopt';
import { Team } from './sections/Team';
import { Volunteer } from './sections/Volunteer';
import { Header } from './components/Header';

export default async function Home() {
  const client = strapi({
    baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337',
    auth: process.env.NEXT_PUBLIC_STRAPI_API_TOKEN || '',
  });

  const data = await client
    .fetch(
      '/pagina-principal?populate[0]=logo&populate[1]=section4_donations.image&populate[2]=section1_background_image&populate[3]=section2_background_image&populate[4]=section3_image_background&populate[5]=section5_image_background&populate[6]=section6_help&populate[7]=section7_social_networks',
    )
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => {
      console.error('Error fetching data:', error);
    });

  if (!data) {
    return <div>Error loading data</div>;
  }

  return (
    <>
      <Header
        logo={data?.logo.url}
        longTitle={data?.long_title}
        shortTitle={data?.short_title}
      />
      <div className="absolute top-0 left-0 w-screen h-screen bg-white z-0">
        <AboutUs
          title={data?.section1_title}
          description={data?.section1_description}
          backgroundImage={data?.section1_background_image?.url}
        />
        <HowToAdopt
          title={data?.section2_title}
          description={data?.section2_description}
          image={data?.section2_background_image?.url}
        />
        <Volunteer
          title={data?.section3_title}
          description={data?.section3_description}
          image={data?.section3_image_background?.url}
          list={data?.section3_list_volunteer}
        />
        <Donations
          title={data?.section4_title}
          description={data?.section4_description}
          descriptionExtra={data?.section4_footer_description}
          donations={data?.section4_donations}
        />
        <Team
          title={data?.section5_title}
          description={data?.section5_description}
          image={data?.section5_image_background?.url}
        />
        <Help
          title={data?.section6_title}
          description={data?.section6_description}
          socialNetworksTitle={data?.section7_title}
          socialNetworksDescription={data?.section7_desciption}
          helpList={data?.section6_help}
        />
        <Footer socialNetwork={data?.section7_social_networks} />
      </div>
    </>
  );
}
