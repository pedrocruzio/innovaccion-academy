import React from 'react'
import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

import Nav from 'layout/Nav'
import { useSmallScreen } from 'hooks/index'

const StyledBackground = styled(Box)<{
  issmallscreen?: string
  issmalllesson?: string
  islesson?: string
}>`
  ${(props) =>
    props.issmalllesson === 'true' &&
    props.islesson === 'true' &&
    `
  min-height: calc(100vh - ${props.issmallscreen === 'true' ? '146' : '154'}px);
  background: linear-gradient(
    107.1deg,
    rgba(46, 33, 33, 0.3) -3.13%,
    rgba(80, 73, 84, 0.3) 16.16%,
    rgba(94, 89, 104, 0.3) 29.38%,
    rgba(86, 81, 94, 0.3) 41.5%,
    rgba(23, 21, 21, 0.3) 102.65%
  );
  box-shadow: 0px 0px 80px rgba(0, 0, 0, 0.8);
    `};
`

const Layout = ({
  children,
  isLesson,
}: {
  children: JSX.Element
  isLesson: boolean
}): React.ReactElement => {
  const [isSmallScreen, isSmallLesson] = useSmallScreen()

  return (
    <Box
      minH="100vh"
      paddingBottom={isSmallLesson && isLesson ? '81px' : '0'}
      bgColor="white"
      overflowX="hidden"
    >
      <Nav />
      <StyledBackground
        issmallscreen={isSmallScreen?.toString()}
        issmalllesson={isSmallLesson?.toString()}
        islesson={isLesson?.toString()}
      >
        <main>{children}</main>
      </StyledBackground>
      {/* <Footer /> */}
    </Box>
  )
}

export default Layout
