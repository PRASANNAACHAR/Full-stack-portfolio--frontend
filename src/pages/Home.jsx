import React from 'react'
import Hero from './Sub-Components/Hero'
import TImeline from './Sub-Components/TImeline'
import Skills from './Sub-Components/Skills'
import Portfolio from './Sub-Components/Portfolio'
import Apps from './Sub-Components/Apps'
import Contact from './Sub-Components/Contact'
import About from './Sub-Components/About'

const Home = () => {
  return (
    <article className='px-5 mt-10 sm:mt-14 md:mt-16 lg:mt-24 xl:mt-32 sm:mx-auto w-full max-w-[1000px] flex flex-col gap-14'>
        <Hero/>
        <TImeline/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Apps/>
        <Contact/>
    </article>
  )
}

export default Home