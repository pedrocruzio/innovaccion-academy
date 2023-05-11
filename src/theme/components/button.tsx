import {
  SystemStyleObject,
  SystemStyleFunction,
} from '@chakra-ui/theme-tools/src/component'
import { isMobile } from 'react-device-detect'

const primaryStyle = {
  border: '1px solid #122b54',
  boxSizing: 'border-box',
  backdropFilter: 'blur(42px)',
  background: 'linear-gradient(84.62deg, #white 7.42%, #597AEE 218.41%)',
  bgClip: 'text',
  color: '#122b54',
  span: {
    path: {
      fill: '#5c79ed',
    },
  },
}

const secondaryStyle = {
  background: '#122b54',
  border: '1px solid #F2E5FF',
  boxSizing: 'border-box',
  backdropFilter: 'blur(42px)',
  color: '#F2E5FF',
  span: {
    path: {
      fill: '#F2E5FF',
    },
  },
}

const padding = { paddingLeft: '15px', paddingRight: '15px' }
const paddingBig = { paddingLeft: '23px', paddingRight: '23px' }

const primary = {
  background: 'linear-gradient(135.91deg, #FFA500 29.97%, #f87c1c 99.26%)',
  backdropFilter: 'blur(50px)',
  borderRadius: '8px',
  _hover: isMobile
    ? {}
    : {
        ...padding,
        ...primaryStyle,
      },
}

const primaryGold = {
  ...primary,
  background: 'linear-gradient(105.55deg, #fbba59 12.48%, #bf8260 95.84%)',
  _hover: {
    ...padding,
    background: 'transparent',
    border: '1px solid #f1b15a',
  },
}

const primaryBig = {
  background: 'linear-gradient(135.91deg, #B06FD8 29.97%, #597AEE 99.26%)',
  backdropFilter: 'blur(50px)',
  borderRadius: '60px',
  _hover: isMobile
    ? {}
    : {
        ...paddingBig,
        ...primaryStyle,
      },
}

const primaryWhite = {
  ...primaryBig,
  background: 'white',
  color: '#5D4E78',
  border: '2px solid transparent',
  _hover: {
    background: 'white',
    border: '2px solid #b357ec',
  },
}

const primaryBigLast = {
  background:
    'linear-gradient(270deg, #FFFCF9 -44.74%, #F77B54 -11.81%, #916AB8 94.44%)',
  backdropFilter: 'blur(50px)',
  borderRadius: '60px',
  _hover: isMobile
    ? {}
    : {
        ...paddingBig,
        ...primaryStyle,
      },
}

const secondary = {
  background: '#5e62ff',
  backdropFilter: 'blur(50px)',
  borderRadius: '8px',
  _hover: isMobile
    ? {}
    : {
        ...padding,
        ...secondaryStyle,
      },
}

const secondaryGold = {
  ...primary,
  background: 'transparent',
  color: '#f1b15a',
  border: '1px solid #f1b15a',
  _hover: {
    cursor: 'default',
  },
}

const secondaryBig = {
  background: '#3F3253',
  backdropFilter: 'blur(50px)',
  borderRadius: '60px',
  _hover: isMobile
    ? {}
    : {
        ...paddingBig,
        ...secondaryStyle,
      },
}

const secondaryWhite = {
  ...secondaryBig,
  background: 'transparent',
  color: 'white',
  border: '2px solid white',
  _hover: {
    border: '2px solid transparent',
  },
}

// TODO: https://chakra-ui.com/docs/styled-system/advanced-theming#theme-typings for auto-complete
type variantType = SystemStyleObject | SystemStyleFunction
type variantsTypes = {
  primary: variantType
  primaryGold: variantType
  primaryWhite: variantType
  primaryBig: variantType
  primaryBigLast: variantType
  secondary: variantType
  secondaryGold: variantType
  secondaryWhite: variantType
  secondaryBig: variantType
}

const variants: variantsTypes = {
  primary,
  primaryGold,
  primaryWhite,
  primaryBig,
  primaryBigLast,
  secondary,
  secondaryGold,
  secondaryWhite,
  secondaryBig,
}

export default {
  Button: {
    baseStyle: {
      color: 'white',
      _hover: {
        textDecoration: 'none !important',
      },
    },
    variants,
  },
}
