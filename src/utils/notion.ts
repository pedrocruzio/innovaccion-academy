import {Client} from '@notionhq/client'
import {QueryDatabaseResponse} from '@notionhq/client/build/src/api-endpoints'

const NOTION_API_KEY = (process.env.NOTION_API_KEY as string) ?? ''

const globalNotion = global as unknown as { notion: Client }

export const notion =
    globalNotion.notion || new Client({auth: NOTION_API_KEY})

if (process.env.NODE_ENV !== 'production') globalNotion.notion = notion


// import { Client } from '@notionhq/client';

// const NOTION_API_KEY = process.env.NOTION_API_KEY ?? '';
//
// export const notion = new Client({ auth: NOTION_API_KEY });


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

export type Post = {
    title: string
    id: string
}

// export const parseProperties = (database: QueryDatabaseResponse): Post[] => {
//   return database.results.map((row) => {
//     const id = row.id
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// const titleCell = row?.properties.Title.title
// const title = titleCell?.[0].plain_text
// return { id, title, database }
// })
// }

// TODO: Utilizxe DidIGetAny console log to parse the properties like above.
export const parseProperties = (database: QueryDatabaseResponse) => {
    return database.results
}