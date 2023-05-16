import { MetaData } from 'components/Head'
import { WHITELABEL } from 'constants/whitelabel'
import DEFAULT_LESSONS from 'constants/lessons'
import WHITELABEL_LESSONS from 'constants/whitelabel_lessons'
import DEFAULT_KEYWORDS from '../../keywords.json'
import WHITELABEL_KEYWORDS from '../../whitelabel-keywords.json'

export const IS_WHITELABEL = !!WHITELABEL?.project_name

export const LESSONS = IS_WHITELABEL ? WHITELABEL_LESSONS : DEFAULT_LESSONS

export const PROJECT_NAME = WHITELABEL?.project_name || 'InovvAccion Academy'

export const DOMAIN_PROD =
  WHITELABEL?.domain_prod || 'https://innovaccionpr.org/'

export const DOMAIN_URL =
  process.env.VERCEL_URL && process.env.VERCEL_ENV !== 'production'
    ? `https://${process.env.VERCEL_URL}`
    : `https://${DOMAIN_PROD}`

export const DEFAULT_METADATA: MetaData = {
  title: PROJECT_NAME,
  description:
    WHITELABEL?.default_metadata_description ||
    'Level up your knowledge of Web3 and DeFi',
  image: `${DOMAIN_URL}${
    WHITELABEL?.default_metadata_image || '/images/logo-horz-blue.png'
  }`,
}

export const FAVICON = WHITELABEL?.favicon || '/logo-icon.png'

export const APPLE_TOUCH_ICON =
  WHITELABEL?.apple_touch_icon || WHITELABEL?.favicon || '/app-icon.png'
export const APPLE_TOUCH_STARTUP_IMAGE =
  WHITELABEL?.homepage_background || '/apple-touch-startup-image.jpg'

export const LOGO = WHITELABEL?.logo || '/images/logo-horz-blue.png'
export const LOGO_SMALL = WHITELABEL?.logo_small || '/images/logo-horz-blue.png'

export const HOMEPAGE_BACKGROUND =
  WHITELABEL?.homepage_background || '/images/hero-img.png'

export const UMAMI_PROD =
  WHITELABEL?.umami_prod || '62d1cf48-425d-4658-9b86-3eea78ac9714'

export const TOKEN_ADDRESS = {
  1: '0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198',
  5: '0xab8b6fFA66E1f2CD8938f1df14104600367de257',
}

export const MERKLE_DISTRIBUTOR_ADDRESS = {
  1: [
    '0x9D1f1847582261bE41F5a54e8b60CAD21400C74f',
    '0xb9fce340e39e6fdfc641564922c1ef2716f70f04',
  ],
  5: [
    '0x2abF2d32aCF29551eCa2097BE2E49e3249c6E08e',
    '0xEaf539042bcFF43d8340eb5673A9ce726fFb498A',
  ],
}

export const DefaultProviderName = 'DEFAULT'

export const INFURA_KEY =
  process.env.INFURA_KEY || 'cb578d660f614bbcb41b3c03553ff6f2'

export const ALCHEMY_KEY = process.env.NEXT_PUBLIC_ALCHEMY_KEY

export const QUESTS: string[] = LESSONS.filter((lesson) => lesson.quest).map(
  (lesson) => lesson.quest
)

export const NOTION_IDS: string[] = LESSONS.filter(
  (lesson) => !lesson.isArticle
).map((lesson) => lesson.notionId)

export const EMAIL_CONTACT = 'support@banklessacademy.com'

export const GENERIC_ERROR_MESSAGE = `Something went wrong ... please contact ${EMAIL_CONTACT}`

export const TWITTER_ACCOUNT = WHITELABEL?.twitter_account || `BanklessAcademy`

export const NOTION_PAGES = WHITELABEL?.notion_pages || {
  faq: '97b88d72335a41a1911c12d4e2f99db6',
  disclaimer: '04cb595cad3f43608a6c410b9672e32b',
}

export const MIRROR_WHITELISTED_ACCOUNTS = [
  'banklessacademy.eth',
  'didierkrux.eth',
  'tetranome.eth',
  'ispeaknerd.eth',
  'ornellaweb3.eth',
  'hirokennelly.eth',
]

export const MIRROR_ARTICLE_ADDRESSES = LESSONS.filter(
  (lesson) => lesson.mirrorNFTAddress
).map((lesson) => lesson.mirrorNFTAddress)

export const ACTIVATE_MIXPANEL = !!process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_ID

export const KEYWORDS =
  IS_WHITELABEL && Object.keys(WHITELABEL_KEYWORDS).length
    ? WHITELABEL_KEYWORDS
    : DEFAULT_KEYWORDS

export const SIWE_ENABLED = process.env.NEXT_PUBLIC_SIWE_ENABLED || false
