require('dotenv').config()
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'
import { Client } from '@notionhq/client'
// import {db, TABLES} from "./src/utils/db";
import { LessonType } from './src/entities/lesson'

const fs = require('fs')
const axios = require('axios')
const crc32 = require('js-crc').crc32
const stringifyObject = require('stringify-object')

export const notion = new Client({
  auth: 'secret_eYwoWTMxQ6K266tcm79cA4hlx6jCz6jS23vDId7lMrj',
})

const queryDatabase = async (): Promise<QueryDatabaseResponse> => {
  // TODO: Not reading from the .env WTF
  return await notion.databases.query({
    database_id: '114126fcfe3b464da891e8216f4d737b',
  })
}

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/<[^>]*>?/gm, '') // remove tags
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-') // collapse dashes

const KEY_MATCHING = {
  'Kudos image': 'kudosImageLink',
  'Lesson image': 'lessonImageLink',
  'Social image': 'socialImageLink',
  'What will you be able to do after this lesson?': 'learningActions',
  'Landing page copy': 'marketingDescription',
  'Kudos ID': 'kudosId',
  'Duration in minutes': 'duration',
  'What will you learn from this?': 'learnings',
  Difficulty: 'difficulty',
  Description: 'description',
  Name: 'name',
  Module: 'moduleId',
  Quest: 'quest',
  'Publication status': 'publicationStatus',
  'Featured order on homepage': 'featuredOrderOnHomepage',
  'Enable Comments': 'isCommentsEnabled',
  'End of Lesson redirect': 'endOfLessonRedirect',
  'End of Lesson text': 'endOfLessonText',
  // 'Community discussion link': 'communityDiscussionLink',
  'Mirror link': 'mirrorLink',
  'Mirror NFT address': 'mirrorNFTAddress',
}

const PROJECT_DIR = process.env.PROJECT_DIR || ''
const IS_WHITELABEL = PROJECT_DIR !== ''
const LESSON_FILENAME = IS_WHITELABEL ? 'whitelabel_lessons' : 'lessons'

const download_image = (url, image_path) =>
  axios({
    url,
    responseType: 'stream',
  }).then(function (response) {
    response.data.pipe(fs.createWriteStream(image_path))
  })

const get_img = (imageLink, slug, image_name) => {
  // const [file_name] = imageLink[0].name.split('?')
  const [file_name] = imageLink.split('?')
  const file_extension = file_name
    .match(/\.(png|svg|jpg|jpeg|webp|mp4|gif)/)[1]
    .replace('jpeg', 'jpg')
  // create "unique" hash based on Notion imageLink (different when re-uploaded)
  const hash = crc32(file_name)
  const image_dir = `/${PROJECT_DIR}lesson/${slug}`
  const local_image_dir = `public${image_dir}`
  // create image directory dynamically in case it doesn't exist yet
  if (!fs.existsSync(local_image_dir)) {
    fs.mkdirSync(local_image_dir)
  }
  const image_path = `${image_dir}/${slugify(
    image_name
  )}-${hash}.${file_extension}`
  const local_image_path = `public${image_path}`
  if (!fs.existsSync(local_image_path)) {
    download_image(imageLink, local_image_path)
    console.log('downloading image: ', local_image_path)
  }
  return image_path
}

const parseProperties = (database: QueryDatabaseResponse) => {
  const lessons: LessonType[] = []
  if (IS_WHITELABEL && !fs.existsSync(`public/${PROJECT_DIR}lesson`)) {
    fs.mkdirSync(`public/${PROJECT_DIR}lesson`)
  }
  const promiseArray = database.results.map(async (row) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore With description
    const lesson: LessonType = Object.keys(KEY_MATCHING).reduce((obj, k) =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore With description
      Object.assign(
        obj,
        {
          // transform to number if the string contains a number
          [KEY_MATCHING[k]]: (() => {
            switch (k) {
              case 'Landing page copy':
              case 'What will you be able to do after this lesson?':
              case 'Description':
              case 'End of Lesson text':
              case 'Mirror NFT address':
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore With description
                return row.properties[k]?.rich_text[0]?.text?.content || ''
              case 'Featured order on homepage':
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore With description
                return row.properties[k].number
              case 'Difficulty':
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore With description
                return row.properties[k]?.select?.name || 'Easy'
              case 'Publication status':
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore With description
                return row.properties[k]?.select?.name || 'hidden'
              case 'Enable Comments':
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore With description
                return row.properties[k]?.checkbox || false
              case 'Quest':
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore With description
                return row.properties[k]?.id || ''
              case 'Mirror link':
              case 'End of Lesson redirect':
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore With description
                return row.properties[k].url
              case 'Name':
                return (
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore With description
                  row.properties[k]?.title[0]?.plain_text || 'No Name'
                )
              case 'Kudos ID':
              case 'Duration in minutes':
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore With description
                return row.properties[k].number
              // case 'Social image':
              // case 'Kudos image':
              case 'Lesson image':
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore With description
                return row.properties[k]?.files[0] || ''
              // case 'Module':
              // case 'Mirror NFT address':
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore With description
              //     return row.properties[k];
            }
          })(),
        },
        {}
      )
    )

    // const mirrorId = lesson.mirrorLink?.includes('/') && lesson.mirrorLink?.split('/')?.pop()
    // console.log('Going Into: InsideMirrorLink', lesson.mirrorLink)
    // if (lesson.mirrorLink?.includes('/') && mirrorId) {
    //     lesson.isArticle = true
    //     lesson.notionId = row.id
    //     lesson.slug = slugify(lesson.name)
    // }

    // console.log('Going Into: kudosImageLink', lesson.kudosImageLink)
    // if (lesson.kudosImageLink) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore With description
    //     lesson.kudosImageLink = get_img(lesson.kudosImageLink.files, lesson.slug, 'kudos')
    // }
    // console.log('Going Into: lessonImageLink', lesson.lessonImageLink)
    if ((lesson.lessonImageLink?.file?.url && lesson.lessonImageLink?.file?.url.length > 0)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore With description
      || (lesson.lessonImageLink?.name && lesson.lessonImageLink?.name)
    ) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore With description
      console.log("More than one??",lesson.lessonImageLink?.file?.url || lesson.lessonImageLink.name)
      lesson.lessonImageLink = get_img(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore With description
        lesson.lessonImageLink?.file?.url || lesson.lessonImageLink.name,
        lesson.slug,
        'lesson'
      )
    }
    // console.log('Going Into: socialImageLink', lesson.socialImageLink)
    // if (lesson.socialImageLink) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore With description
    //     lesson.socialImageLink = get_img(lesson.socialImageLink.files, lesson.slug, 'social')
    // }

    lesson.notionId = row.id
    lesson.slug = slugify(lesson.name)
    //    add notionId to DB
    // await db(TABLES.credentials).insert([{notion_id: lesson.notionId}]).onConflict('notion_id')
    lessons.push(lesson)
  })

  axios
    .all(promiseArray)
    .then(() => {
      const FILE_CONTENT = `/* eslint-disable no-useless-escape */
import { LessonType } from 'entities/lesson'

const LESSONS: LessonType[] = ${stringifyObject(lessons, {
        indent: '  ',
        singleQuotes: true,
      })}

export default LESSONS
`

      fs.writeFile(
        `src/constants/${LESSON_FILENAME}.ts`,
        FILE_CONTENT,
        (error) => {
          if (error) throw error()
        }
      )
      console.log(
        `export done -> check syntax & typing errors in src/constants/${LESSON_FILENAME}.ts`
      )
    })
    .catch((error) => console.error(error))
}

const importNotion = async () => {
  const database = await queryDatabase()
  return parseProperties(database)
}

importNotion()
