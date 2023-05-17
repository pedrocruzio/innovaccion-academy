import React from 'react'
import { Button, Spinner, Box } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

import ExternalLink from 'components/ExternalLink'
import { theme } from 'theme/index'
import { useSmallScreen } from 'hooks/index'

const WalletBasics = (
  account: string
): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const [isSmallScreen] = useSmallScreen()

  return {
    isQuestCompleted: !!account,
    questComponent: (
      <>
        <Box display={isSmallScreen ? 'block' : 'flex'}>
          <div className="bloc1">
          <h2>Cómo configurar una billetera MetaMask</h2>
            <p>
              Para comodidad y facilidad de acceso durante esta lección,
              necesitarás una billetera MetaMask. A continuación, demostraremos cómo
              configurar una billetera MetaMask.
            </p>
            <p>
              Descarga la extensión del navegador desde el sitio web oficial:&nbsp;
              <ExternalLink href="https://metamask.io/download">
                https://metamask.io/download
              </ExternalLink>
            </p>
            <Button
              variant="outlined"
              leftIcon={account ? <CheckIcon /> : <Spinner speed="1s" />}
              color={account ? theme.colors.correct : 'orange'}
              cursor="default"
              boxShadow="none !important"
            >
              {account
                ? 'Felicidades por conectar tu wallet! 👏🙂'
                : 'Esperando la conexión de tu wallet ...'}
            </Button>
          </div>
          <div className="bloc2">
            <iframe
              src="https://www.youtube.com/embed/YVgfHZMFFFQ?rel=0"
              allowFullScreen
            ></iframe>
          </div>
        </Box>
      </>
    ),
  }
}

export default WalletBasics