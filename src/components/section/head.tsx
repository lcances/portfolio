import React from 'react'
import { Stack, Heading } from '@chakra-ui/react'
import Section from '@/components/section'


const HeadSection: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: 'url(/background.jpg)',
        backgroundSize: 'cover'
      }}
    >
      <Section>
        <Stack direction={'column'} spacing={4}
          justifyContent={'center'}
          alignItems={'center'}
          textAlign={'center'}
          color={'white'}
        >
          {/* <Box borderRadius={'full'} overflow={'hidden'}>
            <Image alt={'head'} src={'/head.jpg'} width={200} height={200} />
          </Box> */}
          <Heading letterSpacing={'.2rem'} size={'2xl'}
            textShadow={'2px 2px 2px #000000'}
          >LEO CANCES</Heading>
          <Heading
            size={'md'}
            letterSpacing={'.15rem'}
            textShadow={'2px 2px 2px #000000'}
          >Data Engineer and FullStack Developper </Heading>
        </Stack>
      </Section>
    </div>
  )
}


export default HeadSection