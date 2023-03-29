import { useEffect } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Flex } from '@chakra-ui/react'
import { Inter } from 'next/font/google'

const Header = dynamic(() => import('@/components/header'));
const HeadSection = dynamic(() => import('@/components/section/head'));
const AboutSection = dynamic(() => import('@/components/section/about'));
const FeatureSection = dynamic(() => import('@/components/section/features'));
const PortfolioSection = dynamic(() => import('@/components/section/portfolio'));


export default function Home() {

  useEffect(() => {
    function reveal() {
      var reveals = document.querySelectorAll(".reveal");
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }

    window.addEventListener("scroll", reveal);
    reveal();

    return () => {
      window.removeEventListener("scroll", reveal);
    }
  }, [])

  return (
    <>
      <Head>
        <title>Leo Cances</title>
        <meta name="description" content="Leo Cances Freelancing portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex direction={'column'} overflow="hidden">
        <div
          className='background'
        ></div>
        {/* <Header /> */}

        <HeadSection />
        <AboutSection />
        <FeatureSection />
        <PortfolioSection />
      </Flex>
    </>
  )
}
