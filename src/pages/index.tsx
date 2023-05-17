import {
  Box,
  Text,
  Stack,
  Heading,
  Button,
  Container,
  SimpleGrid,
  Image,
  Center,
  useDisclosure,
} from '@chakra-ui/react'
import styled from '@emotion/styled'

import Footer from 'layout/Footer'
import FeaturedLessons from 'components/FeaturedLessons'
import ExternalLink from 'components/ExternalLink'
import InternalLink from 'components/InternalLink'
import WhitelabelHomepage from 'pages/whitelabel_homepage'
import {
  LearnIcon,
  QuizIcon,
  QuestIcon,
  KudosIcon,
  PencilIcon,
  GraduationCapIcon,
  HandshakeIcon,
  EyeIcon,
  UsersThreeIcon,
} from 'components/Icons'
import { HOMEPAGE_BACKGROUND, IS_WHITELABEL } from 'constants/index'
import { Mixpanel } from 'utils/index'
import SubscriptionModal from 'components/SubscriptionModal'
import { useSmallScreen } from 'hooks/index'
// import {queryDatabase} from "@notionhq/client/build/src/api-endpoints";
// import { parseProperties } from "../utils/notion";
// import { queryDatabase } from "./api/queryNotion";
// import { PageObjectResponse, PartialPageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const Card = styled(Box)`
  border: 1px solid #72757b;
  padding: var(--chakra-space-8);
  border-radius: var(--chakra-radii-lg);
  background: linear-gradient(
    107.1deg,
    rgba(46, 33, 33, 0.3) -3.13%,
    rgba(80, 73, 84, 0.3) 16.16%,
    rgba(94, 89, 104, 0.3) 29.38%,
    rgba(86, 81, 94, 0.3) 41.5%,
    rgba(23, 21, 21, 0.3) 102.65%
  );
  display: flex;
  flex-direction: column;
`
const NewsletterButton = styled(Button)`
  :hover {
    padding: 0 23px;
  }
`

// export async function getStaticProps(): Promise<{ props: { posts: (PageObjectResponse | PartialPageObjectResponse)[] } }> {
//   const database = await queryDatabase();
//   const posts = parseProperties(database);
//
//   return {
//     props: {
//       posts
//     }
//   };
// }

const HomePage = (): JSX.Element => {
  // console.log("DidIGetAny", props.posts);
  const [isSmallScreen] = useSmallScreen()
  const { isOpen, onOpen, onClose } = useDisclosure()

  if (IS_WHITELABEL) return <WhitelabelHomepage />
  else
    return (
      <>
        <Center
          height="80vh"
          bgImage={HOMEPAGE_BACKGROUND}
          bgSize="cover"
          bgPosition="center"
        >
          <Stack
            width="100%"
            maxW="800px"
            spacing={6}
            textAlign="center"
            alignItems="center"
            pt="20vh"
          >
            <Box mt={'20%'}>
              <InternalLink href={`/lessons`}>
                <Button
                  variant="primary"
                  size="lg"
                  style={{ padding: '0 23px', marginTop: '20px' }}
                >
                  Ver Cursos
                </Button>
              </InternalLink>
            </Box>
          </Stack>
        </Center>
        <Box bgColor="#5e62ff" p="4" overflow="hidden">
          <Container maxW="container.lg">
            <Box mt="6">
              <Heading as="h2" size="xl" m="auto">
              Comienza tu carrera con tecnologías emergentes
              </Heading>
              <Box fontSize="lg" mt="6">
                <Box mt={2}>
                  La academia de InnovAcción tene como misión asegurarse de que cada persona en Puerto Rico 
                  esté preparado el futuro. Usando la plataforma de la Academia, darás el primer paso con confianza 
                  hacia la nueva frontera, antes de sumergirte en tu propio camino de aprendizaje único y 
                  prepararte para abrir nuevos caminos en el espacio de web3, inteligencia artificial y el metaverso. ¡Comencemos!
                </Box>
                <InternalLink href={`/lessons`}>
                <Button
                  variant="primary"
                  size="lg"
                  style={{ padding: '0 23px', marginTop: '20px' }}
                >
                  Ver Cursos
                </Button>
              </InternalLink>
              </Box>
              <SimpleGrid
            columns={{ sm: 1, md: 3, lg: 3 }}
            gap={6}
            my="10"
            mx={isSmallScreen ? '0' : '12'}
          >
            <Card>
              <LearnIcon />
              <Heading size="lg" mt="2">
                Avanza en tu conocimiento
              </Heading>
              <Text fontSize="lg" mt="2">
                Desde lo básico hasta profundizar, descubre el mundo de web3 con contenido construido junto a expertos líderes.
              </Text>
            </Card>
            <Card>
              <QuizIcon />
              <Heading size="lg" mt="2">
                Prueba tus habilidades
              </Heading>
              <Text fontSize="lg" mt="2">
                Completa actividades que ponen a prueba tu dominio de los conceptos de criptografía.
              </Text>
            </Card>
            <Card>
              <KudosIcon />
              <Heading size="lg" mt="2">
                Certificados NFT
              </Heading>
              <Text fontSize="lg" mt="2">
                Colecciona NFTs al completar lecciones con éxito.
              </Text>
            </Card>
          </SimpleGrid>
            </Box>
            {/* <Box
              border="1px solid #989898"
              py="8"
              px="6"
              mb="8"
              borderRadius="lg"
            >
              <Box fontSize="2xl">
                {`Sign up for our `}
                <NewsletterButton
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    onOpen()
                    Mixpanel.track('click_internal_link', {
                      link: 'modal',
                      name: 'Newsletter signup',
                    })
                  }}
                >
                  Newsletter
                </NewsletterButton>
                {` to be notified of new lessons and platform
              updates!`}
              </Box>
            </Box>
            <SubscriptionModal isOpen={isOpen} onClose={onClose} />
            <FeaturedLessons />
            <>
              <Box mt="16">
                <Heading as="h2" size="xl" my="16" mb="12">
                  More Lessons On the Way
                </Heading>
                <Box maxW="800px" display="flex" margin="auto">
                  <Box width="100%">
                    <Box
                      display="flex"
                      borderBottom="1px solid #72757B"
                      pb="6"
                      width="100%"
                      mb="6"
                    >
                      <Box minW="64px" alignSelf="center">
                        <Image width="64px" src="/images/money.png" />
                      </Box>
                      <Box ml="4">
                        <Heading size="lg" mb="2">
                          Dive into DeFi
                        </Heading>
                        Learn how crypto protocols and tools are helping
                        Explorers go Bankless.
                      </Box>
                    </Box>
                    <Box
                      display="flex"
                      borderBottom="1px solid #72757B"
                      pb="6"
                      width="100%"
                      mb="6"
                    >
                      <Box minW="64px" alignSelf="center">
                        <Image width="64px" src="/images/parrot.png" />
                      </Box>
                      <Box ml="4">
                        <Heading size="lg" mb="2">
                          Explore NFTs
                        </Heading>
                        Explore the on-chain property rights movement, and the
                        emerging use-cases for this technology.
                      </Box>
                    </Box>
                    <Box
                      display="flex"
                      borderBottom="1px solid #72757B"
                      pb="6"
                      width="100%"
                      mb="6"
                    >
                      <Box minW="64px" alignSelf="center">
                        <Image width="64px" src="/images/hammer-and-pick.png" />
                      </Box>
                      <Box ml="4">
                        <Heading size="lg" mb="2">
                          Join a DAO
                        </Heading>
                        The future of work is upon us. Learn how you can work in
                        crypto, and how to get started.
                      </Box>
                    </Box>
                    <Box display="flex" pb="6" width="100%">
                      <Box minW="64px" alignSelf="center">
                        <Image width="64px" src="/images/books.png" />
                      </Box>
                      <Box ml="4">
                        <Heading size="lg" mb="2">
                          Study Blockchain Architecture & More
                        </Heading>
                        Let’s explore how blockchain technology makes crypto
                        currencies and tools possible.
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box my="16">
                <Heading as="h2" size="xl" mt="16" mb="8">
                  Work With Us!
                </Heading>
                <Text fontSize="2xl" mb="8">
                  From reviewing lessons to partnering with our platform, there
                  are plenty of options for collaborating with the Academy
                  Squad.
                </Text>
              </Box>
            </> */}
          </Container>
          {/* <Footer /> */}
        </Box>
      </>
    )
}

export default HomePage
