import RootLayout from '@/app/layout';
import { Navbars } from '@/app/__components/navbar';
import { Background } from '@/app/__components/background';
import { Hero_Parallax } from '@/app/__components/hero_paralx';
import { Features_Section } from '@/app/__components/features_section';
import { Contact_Section } from '@/app/__components/contact_section';
import Loading from '@/app/loading';
import { Suspense } from 'react';

export default function Home() {
  return (
    <RootLayout>
      <Navbars />
      <Suspense fallback={<Loading />}>
        <Background />
        <Hero_Parallax />
        <Features_Section />
        <Contact_Section />
      </Suspense>
    </RootLayout>
  );
}

// list yang bisa di buat menambahkan fortofolio
// web
// undangan pernikahan

// library
// payment bank
