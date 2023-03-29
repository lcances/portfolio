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


interface SectionProps {
  children: React.ReactNode
  bg?: boolean
  fixedHeight?: boolean
}

const Section: React.FC<SectionProps> = ({ children, bg, fixedHeight }) => {
  return (
    <Flex
      // borderBottom={'1px'}
      // borderColor={'gray.200'}
      // boxShadow={'0px 2px 2px #00000044'}
      backgroundColor={bg ? '#00000011' : 'transparent'}
      clipPath={bg ? "polygon(0 8%, 100% 0, 100% 100%, 0 90%)" : 'none'}
    >
      <Flex
        className={'reveal'}
        justify={'center'}
        align={'center'}
        direction='column'
        overflow="hidden"
        h={fixedHeight ? 'auto' : '100vh'}
        maxW={'6xl'}
        mx={'auto'}
      >
        {children}
      </Flex>
    </Flex>
  )
}


export default Section;