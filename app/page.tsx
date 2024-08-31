import React from 'react';
import { Background } from '@/app/__components/background';
import { Hero_Parallax } from '@/app/__components/hero-paralx';
import { Features_Section } from '@/app/__components/features-section';
import { Contact_Section } from '@/app/__components/contact-section';

export default function Home() {
  return (
    <>
      <Background />
      <Hero_Parallax />
      <Features_Section />
      <Contact_Section />
    </>
  )
}