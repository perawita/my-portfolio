import RootLayout from '@/app/layout';
import { Navbars } from '@/app/__components/navbar';
import { Background_Globe } from '@/app/__components/background_globe';
import { Hero_Parallax } from '@/app/__components/hero_paralx';
import { Features_Section } from '@/app/__components/features_section';
import { Contact_Section } from './__components/contact_section';

interface HomeProps{
  params: {lang: string}
}

export default function Home() 
{

  return (
    <RootLayout>
      <Navbars />
      <Background_Globe />
      <Hero_Parallax />
      <Features_Section />
      <Contact_Section />
    </RootLayout>
  );
}
