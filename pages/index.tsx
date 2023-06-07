import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0' >
      <Head>
        <title >{"Jeremy's Portfolio"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>

      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      <section id='projects' className='snap-start' >
        <Projects />
      </section>

      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;