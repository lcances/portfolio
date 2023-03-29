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


interface HeaderLinkProps {
  href: string
  label: string
  selected: string
  setSelected: Dispatch<SetStateAction<string>>
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ href, label, selected, setSelected }) => {
  let extraProps = {}
  if (selected === label) {
    extraProps = {
      borderBottom: '4px',
      borderColor: 'blue.600',
    }
  }

  return (
    <Box
      fontWeight={'bold'}
      fontSize={'lg'}
      py={2}
      px={6}
      bg={'#00000055'}
      borderRadius={'md'}
      color={'white'}
      {...extraProps}
      onClick={() => setSelected(label)}
      textShadow={'2px 2px 2px #000000'}
    >
      <Link href={href}>{label}</Link>
    </Box>
  )
}

const Header: React.FC = () => {
  const [selected, setSelected] = useState('About')

  const commonProps = {
    selected,
    setSelected,
  }

  return (
    <Flex
      w={'100%'}
      h={16}
      px={8}
    >
      <Spacer />
      <Flex>
        <HeaderLink href={'#'} label={'About'} {...commonProps} />
        <HeaderLink href={'#'} label={'Work with me'} {...commonProps} />
        <HeaderLink href={'#'} label={'My Realisation'} {...commonProps} />
      </Flex>
    </Flex>
  )
}

export default Header