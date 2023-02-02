import React, { useState } from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Image,
  ModalBody,
  Button,
  Box,
  Text,
} from '@chakra-ui/react'
import { Global, css } from '@emotion/react'
import { isAndroid, isIOS } from 'react-device-detect'
import { useLocalStorage } from 'usehooks-ts'

const InstallAppModal = ({
  isOpen,
  onClose,
  yes,
}: {
  isOpen: boolean
  onClose: () => void
  yes?: boolean
}): React.ReactElement => {
  const [showInstall, setShowInstall]: any = useState(yes)
  const [kudosMintedLS] = useLocalStorage('kudosMinted', [])
  const isDesktop = !(isAndroid || isIOS)

  return (
    <Modal onClose={onClose} size="xs" isOpen={isOpen}>
      <Global
        styles={css`
          .chakra-modal__content-container {
            flex-flow: wrap-reverse;
            .chakra-modal__content {
              flex-flow: column;
            }
          }
        `}
      />
      <ModalContent
        bg="linear-gradient(180deg, #a379bdcc 0%, #5a5198cc 100%)"
        border="2px solid #B68BCC"
        borderRadius="3xl"
        backdropFilter="blur(10px)"
        flexFlow="wrap-reverse"
        my="5vw"
        w="92vw"
        maxW="600px"
      >
        {showInstall === true ? (
          <>
            <ModalHeader px="3">
              <Box display="flex">
                <Image
                  width="50px"
                  height="50px"
                  borderRadius="8px"
                  mr="4"
                  src="/app-icon.png"
                />
                <Text fontSize="lg" alignSelf="center">
                  How to install the Bankless Academy mobile app
                </Text>
              </Box>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody px="6" pb="4">
              {isDesktop ? (
                <>
                  <Image
                    borderRadius="10px"
                    maxH="60vh"
                    m="auto"
                    src="/images/install-app-desktop.gif"
                    alt="Open website on mobile"
                  />
                  <Text fontSize="md" mt="4" alignSelf="center">
                    {`Open the website `}
                    <b>on mobile</b>
                    {` and follow the instructions`}
                  </Text>
                </>
              ) : isIOS ? (
                <>
                  <Image
                    borderRadius="10px"
                    maxH="60vh"
                    m="auto"
                    src="/images/install-app-iOS.gif"
                    alt="Install mobile app on iOS"
                  />
                  <Text fontSize="md" mt="4">
                    {`Open the website in Safari, click "Share" icon, "Add to Home Screen". This won't work with other browsers on iOS.`}
                  </Text>
                </>
              ) : (
                <>
                  <Image
                    borderRadius="10px"
                    maxH="60vh"
                    m="auto"
                    src="/images/install-app-Android.gif"
                    alt="Install mobile app on Android"
                  />
                  <Text fontSize="md" mt="4">
                    {`In your mobile browser, click on "︙" icon for menu options, then click "Install app".`}
                  </Text>
                </>
              )}
            </ModalBody>
          </>
        ) : (
          <>
            <ModalHeader px="3">
              <Box display="flex">
                <Image
                  width="50px"
                  height="50px"
                  borderRadius="8px"
                  mr="4"
                  src="/app-icon.png"
                />
                <Text fontSize="lg" alignSelf="center">
                  Do you want to install the Bankless Academy mobile app?
                </Text>
              </Box>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody px="3">
              <Box mb="0" textAlign="right">
                <Box display="inline-flex" mb="2" ml="2">
                  <Button
                    variant="secondaryWhite"
                    onClick={() => {
                      localStorage.setItem(
                        'mobile-preferences',
                        kudosMintedLS?.length.toString() || '0'
                      )
                      onClose()
                    }}
                  >
                    Remind me later
                  </Button>
                </Box>
                <Box display="inline-flex" mb="2" ml="2">
                  <Button
                    variant="secondaryWhite"
                    onClick={() => {
                      localStorage.setItem('mobile-preferences', 'no')
                      onClose()
                    }}
                  >
                    No
                  </Button>
                  <Button
                    ml="2"
                    variant="primaryWhite"
                    onClick={() => setShowInstall(true)}
                  >
                    Yes
                  </Button>
                </Box>
              </Box>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default InstallAppModal