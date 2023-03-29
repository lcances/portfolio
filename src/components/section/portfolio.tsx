import React from 'react'
import Image from 'next/image'
import { Stack, Flex, Box, Heading, Tag, IconButton, Text, Wrap, WrapItem } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import { AiOutlineLink } from 'react-icons/ai'
import Section from '@/components/section'



interface ProjectCardProps {
  title: string
  position: string
  description: string
  link: string
  logo: string
  features: string[]
  tags: string[]
}


interface FeatureModalProps extends ProjectCardProps {
  isOpen: boolean
  onClose: () => void
}


const contents: ProjectCardProps[] = [
  {
    title: 'Aircell.io',
    position: 'Fullstack developer',
    description: "Aircell.io is a micro SaaS that allow its user to transform any data file into an full featured API. The user can then use this API to build any kind of application.",
    link: 'https://aircell.io/',
    logo: '/aircell.png',
    features: [
      "I have (or participated in) designing, developing and deploying:",
      "The figma design of the website",
      "The frontend of the website",
      "The backend of the website",
      "The dynamic API",
      "The integration with Firebase",
      "The integration with Stripe"
    ],
    tags: [
      "ReactJS", "NextJS", "React Suite", "Firebase authentification", "Firebase Firestore", "Firebase Storage", "Stripe",
      "Sendinblue",
    ],
  },
  {
    title: 'GreenAffair',
    position: 'Python API developer',
    description: "Greenaffair est une société de conseil et d'ingénierie en développement durable et RSE. Nous cherchons régulièrement à créer de nouveaux produits numériques pour nos clients. La mission :Dans le cadre d'un projet, nous avons créé une méthodologie et un process (en python) pour calculer différents indicateurs relatifs à la performance énergétique des bâtiments. Nous souhaitons passer à l'étape suivante en transformant notre travail réalisé en un \"moteur de calcul\" autonome (API) que l'on pourrait proposer à des tiers (1er tiers déjà identifié) voire à créer un produit à part entière.",
    link: 'https://sievable.com/',
    logo: '/greenaffair.png',
    features: [
      "In order to transform an internal tool into a product, I have:",
      "I have migrated the code from a Jupyter notebook to a Python package",
      "Written a bot to automatically fetch and store weather data into a database",
      "Created a FastAPI server to expose the internal tool",
      "Create the docker-compose file to deploy the differences services",
      "Write the documentation for the API",
    ],
    tags: [
      "Python", "FastAPI", "Docker", "PostgreSQL", "Docker-compose"
    ],
  },
  {
    title: 'Vroomly',
    position: 'Internationalization i18n',
    description: 'Vroomly is a website that allows users to book appointments for car repair services. It offers a marketplace of local garages where users can find reliable and affordable options for their car maintenance and repair needs. As a freelancer, I was responsible for helping Vroomly expand to the international market. This involved preparing a large number of files for translation, including almost 1,000 Python files and 1,000 JavaScript files, as well as their email templates and SMS messages.',
    link: 'https://www.vroomly.com/',
    logo: '/vroomly.jpg',
    features: [],
    tags: [
      "Python", "Django", "Javascript", "Typescript", "i18n", "React"
    ],
  },
  {
    title: 'Sievable',
    position: 'CTO & DevOps engineer',
    description: 'Sievable is a search engine that uses Deep Neural Network to provide users with accurate and relevant search results. It has a user-friendly interface and allows users to filter their search results. Sievable also uses machine learning algorithms to constantly improve its search algorithms and provide even more relevant results in the future.',
    link: 'https://sievable.com/',
    logo: '/sievable.jpg',
    features: [
      "I have (or participated in) designing, developing and deploying:",
      "The neural network model for the search engine",
      "The search engine's backend",
      "ML pipeline to tran and deploy the model automatically",
      "The Data pipeline to collect and process the training data collected every day",
      "The Ci/CD pipeline to deploy the backend automatically in Kubernetes",
    ],
    tags: [
      "Python", "MySQL", "RabbitMQ", "Docker", "Terraform", "Kubernetes", "PyTorch",
      "Typescript", "React", "Next.js", "Chakra UI", "GraphQL", "Node.js",
    ],
  },
]


const FeatureModal: React.FC<FeatureModalProps> = (props) => {
  const { isOpen, onClose } = props
  const { title, position, description, link, logo, features, tags } = props

  // if (features.length === 0) return (<></>)
  const featureHeader = features[0]
  const featureList = features.slice(1)

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'2xl'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Flex>
          <a href={link} target='_blank' rel='noreferrer'>
            {title}
          </a>
          <AiOutlineLink />
          </Flex>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack direction={'column'} spacing={6}>
          <Stack direction='row' spacing={4}>
            <Image alt={'head'} src={logo} width={64} height={64} />
            <Heading size={'lg'} my='auto'>{title}</Heading>
          </Stack>
          <Heading size={'md'}>{position}</Heading>
          <Text
            fontWeight={500}
            fontSize={'lg'}
          >
            {description}
          </Text>

          <Stack direction={'column'} spacing={4}>
            <Text fontWeight={600} fontSize={'1.2em'}>{featureHeader}</Text>
            <Stack direction={'column'} spacing={2}>
              {featureList.map((feature, index) => (
                <Text key={index}>&nbsp;&nbsp;&nbsp;&nbsp; • {feature}</Text>
              ))}
            </Stack>

            <Text fontWeight={600} fontSize={'1.2em'}>Tags</Text>
            <Wrap spacing={2}>
              {tags.map((tag, index) => (
                <WrapItem key={index}>
                  <Tag
                    bg={'blue.300'}
                    color={'white'}
                    fontWeight={'bold'}
                    fontSize={'1.0em'}
                  >
                    {tag}
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>
          </Stack>
        </Stack>
        </ModalBody>

        {/* <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant='ghost'>Secondary Action</Button>
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  )
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { title, position, description, logo, link } = props

  return (
    <Box
      className='highlight-card'
      maxW={'440px'} m={6} p={6}
      borderRadius={'lg'}
      boxShadow={'lg'}
      justifyContent={'center'}
      alignItems={'center'}
      textAlign={'justify'}
      onClick={onOpen}
      _hover={{
        cursor: 'pointer',
      }}
    >
      <Stack direction={'column'} spacing={6}>
        <Stack direction='row' spacing={4}>
          <Image alt={'head'} src={logo} width={64} height={64} />
          <Heading size={'lg'} my='auto'>{title}</Heading>
        </Stack>
        <Heading size={'md'}>{position}</Heading>
        <Text
          fontWeight={500}
          fontSize={'lg'}
        >
          {description.slice(0, 125)}...
        </Text>
      </Stack>

      <FeatureModal
        isOpen={isOpen}
        onClose={onClose}
        {...props}
      />
    </Box>
  )
}

const PortfolioSection: React.FC = () => {
  const IconSize = 32

  return (
    <Section fixedHeight={true}>
      <Flex direction={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        textAlign={'center'}
      >
        <Stack direction={'column'} spacing={4} mb={16}>
          <Heading letterSpacing={'.2rem'} size={'md'}>PORTFOLIO</Heading>
          <Heading size={'sm'} letterSpacing={'.15rem'}>Some of my realisation</Heading>
        </Stack>

        <Wrap>
          {contents.map((content, index) =>
            <WrapItem>
              <ProjectCard
                key={index}
                title={content.title}
                position={content.position}
                description={content.description}
                link={content.link}
                logo={content.logo}
                features={content.features}
                tags={content.tags}
              />
            </WrapItem>
          )}
        </Wrap>

      </Flex>
    </Section>
  )
}


export default PortfolioSection;