import React from 'react'
import Link from 'next/link'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
// import oficina from 'public/imgs/oficina.jpg'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'
import Image from 'next/image'

type Props = {
  pageInfo: PageInfo;
}

export default function Hero ({ pageInfo }: Props) {
  const [text] = useTypewriter({
    words: [
      `Hi, The Name's ${pageInfo?.name}`,
      'Guy-who-loves-coffee.tsx',
      '<ButLovesToLearnMore />'
    ],
    loop: true,
    delaySpeed: 2000
  })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <Image
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src={urlFor(pageInfo?.heroImage).url()}
        alt='Developer and your dragon pet'
        title='Image created with IA'
        width={128}
        height={128}
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          {pageInfo?.role}
        </h2>
        <h1 className='text-3xl lg:text-6xl font-semibold px-10'>
          <span>{text}</span>
          {/* <Cursor cursorColor='#0af3ff' /> */}
          <Cursor cursorColor='#0af3ff' />
        </h1>

        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
