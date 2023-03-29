import React from 'react'
import Image from 'next/image'
import { Stack, Flex, Box, Heading, Spacer, IconButton, Text, Wrap, WrapItem } from '@chakra-ui/react'
import { AiFillGithub, AiFillMail } from 'react-icons/ai'
import Section from '@/components/section'


const AboutSection: React.FC = () => {
  const IconSize = 32
  return (
    <Section fixedHeight={true}>
      <Flex direction={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        textAlign={'center'}
        mt={32}
      >
        <Stack direction={'column'} spacing={4} mb={16}>
          <Heading letterSpacing={'.2rem'} size={'md'}>ABOUT ME</Heading>
          <Heading size={'sm'} letterSpacing={'.15rem'}>Get to know me before you dive into my content</Heading>
        </Stack>

        <Box borderRadius={'full'} overflow={'hidden'} >
          <Image alt={'head'} src={'/head.jpg'} width={178} height={178} />
        </Box>

        <Stack spacing={4} mt={16} direction='row'>
          <IconButton aria-label='github' size={'lg'} variant='ghost' icon={<AiFillGithub size={IconSize} />} />
          <IconButton aria-label='github' size={'lg'} variant='ghost' icon={<AiFillMail size={IconSize} />} />
        </Stack>

        <Box
          px={8}
          mt={12}
        >
          <p>
            With over five years of experience in the IT industry, I have developed a strong set of skills and expertise that I use to help clients solve complex problems and achieve their goals. Whether you need help with data analysis, machine learning, web development, or any other aspect of IT, I am confident that I can provide high-quality, personalized services that deliver results.
            <br /><br />
            Let's work together to take your business to the next level.
          </p>
        </Box>
      </Flex>
    </Section>
  )
}

export default AboutSection