import { Client } from '@notionhq/client'
import {
  PageObjectResponse,
  PartialPageObjectResponse,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints'
// NOTE: For use within the pages and api directory of the project.

const NOTION_API_KEY = (process.env.NOTION_API_KEY as string) ?? ''

const globalNotion = global as unknown as { notion: Client }

export const notion =
  globalNotion.notion || new Client({ auth: NOTION_API_KEY })

if (process.env.NODE_ENV !== 'production') globalNotion.notion = notion

// TODO: Pedro. Asumo que esto sera basado en nuestro db que se tendra que cambiar.
// Pero por ahora sirve de buen ejemplo.
// export type FilesAndMedia = {
//   url: string;
//   expiry_time: string;
// }

// export type Post = {
//   order: number;
//   name: string;
//   description: string;
//   publicationStatus?: "publish" | "planned" | "hidden";
//   landingPageCopy: string;
//   durationInMinutes: number;
//   lessonLink: string;
//   livePreviewLink: string;
//   kudosId: number;
//   lessonImage?: FilesAndMedia;
//   lessonCollectedImage?: FilesAndMedia;
//   lessonCollectibleVideo?: FilesAndMedia;
//   lessonCollectibleMint: string;
//   lessonCollectibleTokenAddress: string;
//   socialImage?: FilesAndMedia;
//   mirrorLink: string
//   mirrorNFTAddress: string
//   quest: boolean
//   featuredOrderOnHomepage?: number
// }

// TODO: Utilizxe DidIGetAny console log to parse the properties like above.
export const parseProperties = (
  database: QueryDatabaseResponse
): (PageObjectResponse | PartialPageObjectResponse)[] => {
  return database.results
}
