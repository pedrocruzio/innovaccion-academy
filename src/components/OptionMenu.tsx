import React from 'react'
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Box,
} from '@chakra-ui/react'
import { Mixpanel } from 'utils'
import SubscriptionModal from 'components/SubscriptionModal'
import InstallAppModal from 'components/InstallAppModal'

import ExternalLink from 'components/ExternalLink'
import { IS_WHITELABEL, TWITTER_ACCOUNT } from 'constants/index'

const OptionMenu = ({
  isSmallScreen,
  isWebApp,
}: {
  isSmallScreen: boolean
  isWebApp: boolean
}): React.ReactElement => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    isOpen: isOpenAppModal,
    onOpen: onOpenAppModal,
    onClose: onCloseAppModal,
  } = useDisclosure()

  const twitterLink = `https://twitter.com/${TWITTER_ACCOUNT}`

  return (
    <Box zIndex="2">
      <Menu>
        <MenuButton
          variant="primary"
          as={Button}
          size={isSmallScreen ? 'sm' : 'md'}
        >
          ...
        </MenuButton>
        <MenuList css={{ background: '#6064fc' }}>
        <ExternalLink href="https://en.academy.innovaccionpr.org" color="white">
            <MenuItem>Español</MenuItem>
          </ExternalLink>
          <ExternalLink href="https://innovaccionpr.org" color="white">
            <MenuItem>Back to Home Page</MenuItem>
          </ExternalLink>
          <ExternalLink href="https://prblockchain.org" color="white">
            <MenuItem>PRBTA Website</MenuItem>
          </ExternalLink>
        </MenuList>
      </Menu>
      <SubscriptionModal isOpen={isOpen} onClose={onClose} />
      <InstallAppModal
        isOpen={isOpenAppModal}
        onClose={onCloseAppModal}
        yes={true}
      />
    </Box>
  )
}

export default OptionMenu
