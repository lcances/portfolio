import { useEffect, useState, Dispatch, SetStateAction } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Stack, Flex, Box, Heading, Spacer, IconButton, Text, Wrap, WrapItem } from '@chakra-ui/react'
import { AiFillGithub, AiFillMail } from 'react-icons/ai'
import { IoIosApps } from 'react-icons/io'
import { BsDatabaseFillGear } from 'react-icons/bs'
import { BiCodeAlt } from 'react-icons/bi'
import { IconContext } from 'react-icons'
import Header from '@/components/header'
import Section from '@/components/section'
import HeadSection from '@/components/section/head'
import AboutSection from '@/components/section/about'


interface FeatureCardProps {
  MyIcon: React.ReactNode
  title: string
  description: string
  color: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ MyIcon, title, description, color }) => {
  return (
    <Box maxW={'300px'} m={6}>
      <Stack
        direction={'column'}
        spacing={4}
        justifyContent={'center'}
        alignItems={'center'}
        textAlign={'center'}
      >
        <IconContext.Provider value={{ color }}>
          {MyIcon}
        </IconContext.Provider>
        <Heading fontSize={'2xl'}>{title}</Heading>
        <Text
          fontWeight={500}
          fontSize={'lg'}
        >
          {description}
        </Text>
      </Stack>
    </Box>
  )
}


const FeatureSection: React.FC = () => {
  const IconSize = 32
  return (
    <Section bg={true} fixedHeight={true}>
      <Flex direction={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        textAlign={'center'}
        my={32}
      >
        <Stack direction={'column'} spacing={4} mb={16}>
          <Heading letterSpacing={'.2rem'} size={'md'}>WHAT I OFFER</Heading>
          <Heading size={'sm'} letterSpacing={'.15rem'}>Why you might want to work with me</Heading>
        </Stack>

        <Wrap>
          <WrapItem>
            <FeatureCard
              MyIcon={<IoIosApps size={64} />}
              title={'MVP'}
              description={'Bringing your idea to code from zero to one as a minimal viable product (MVP) and beyond within a well-architected application.'}
              color={'#E84855'}
            />
          </WrapItem>

          <WrapItem>
            <FeatureCard
              MyIcon={<BiCodeAlt size={64} />}
              title={'Writing Code'}
              description={'Coding along with your team on a large scale application to make your customers happy with new features and performance improvements.'}
              color={'#7FC29B'}
            />
          </WrapItem>

          <WrapItem>
            <FeatureCard
              MyIcon={<BsDatabaseFillGear size={64} />}
              title={'Scrapping'}
              description={'Being in Javascript or Python, I can help you to extract data from the web and make it available in a structured way.'}
              color={'#FF9B71'}
            />
          </WrapItem>
        </Wrap>
      </Flex>
    </Section>
  )
}


export default FeatureSection;