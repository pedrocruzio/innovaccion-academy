import {
  // PageObjectResponse,
  // PartialPageObjectResponse,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints'
import { Client } from '@notionhq/client'

const fs = require('fs')
// const axios = require("axios");
// const crc32 = require("js-crc").crc32;

export const notion = new Client({
  auth: 'secret_eYwoWTMxQ6K266tcm79cA4hlx6jCz6jS23vDId7lMrj',
})

const queryDatabase = async (): Promise<QueryDatabaseResponse> => {
  // TODO: Not reading from the .env WTF
  return await notion.databases.query({
    database_id: '114126fcfe3b464da891e8216f4d737b',
  })
}

// const slugify = (text) => text.toLowerCase()
//   .replace(/<[^>]*>?/gm, "") // remove tags
//   .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
//   .replace(/\s+/g, "-") // collapse whitespace and replace by -
//   .replace(/-+/g, "-"); // collapse dashes

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
// const LESSON_FILENAME = IS_WHITELABEL ? "whitelabel_lessons" : "lessons";

// const download_image = (url, image_path) =>
//   axios({
//     url,
//     responseType: "stream"
//   }).then(function(response) {
//     response.data.pipe(fs.createWriteStream(image_path));
//   });

// const get_img = (imageLink, slug, image_name) => {
//   const [file_name] = imageLink.split("?");
//   const file_extension = file_name.match(/\.(png|svg|jpg|jpeg|webp|mp4|gif)/)[1].replace("jpeg", "jpg");
//   // console.log(file_extension)
//   // create "unique" hash based on Notion imageLink (different when re-uploaded)
//   const hash = crc32(file_name);
//   const image_dir = `/${PROJECT_DIR}lesson/${slug}`;
//   const local_image_dir = `public${image_dir}`;
//   // create image directory dynamically in case it doesn't exist yet
//   if (!fs.existsSync(local_image_dir)) {
//     fs.mkdirSync(local_image_dir);
//   }
//   const image_path = `${image_dir}/${slugify(image_name)}-${hash}.${file_extension}`;
//   // console.log('image_path', image_path)
//   const local_image_path = `public${image_path}`;
//   if (!fs.existsSync(local_image_path)) {
//     download_image(imageLink, local_image_path);
//     console.log("downloading image: ", local_image_path);
//   }
//   return image_path;
// };

// const parseProperties = (database: QueryDatabaseResponse): (PageObjectResponse | PartialPageObjectResponse)[] => {
const parseProperties = (database: QueryDatabaseResponse) => {
  // const lessons = [];
  if (IS_WHITELABEL && !fs.existsSync(`public/${PROJECT_DIR}lesson`)) {
    fs.mkdirSync(`public/${PROJECT_DIR}lesson`)
  }
  const promiseArray = database.results.map(async (row, index) => {
    // TODO: Eliminate for Production
    if (index > 1) return
    const lesson = Object.keys(KEY_MATCHING).reduce((obj, k) => {
      console.log('ObjectToLesson', [obj, k, row[k]])
      Object.assign(obj, {
        // transform to number if the string contains a number
        [KEY_MATCHING[k]]:
          Number.isNaN(parseInt(row[k])) ||
          // ignore type transform for ModuleId & mirrorNFTAddress
          k === 'Module' ||
          k === 'Mirror NFT address'
            ? row[k]
            : parseInt(row[k]),
      }),
        {}
      return ''
    })
    promiseArray
    // TODO: Values coming out as undefined. But, the keys are good.
    console.log('Lesson Yeet', lesson)

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (lesson.archived === undefined || lesson.archived === false) return
    row.id = row.id.replace(/-/g, '')
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // console.log(
    //   'Notion Lesson Link: ',
    //   row.properties['Lesson link'].formula.string
    // )
  })
}

const importNotion = async () => {
  const database = await queryDatabase()
  const posts = parseProperties(database)
  return posts
}

importNotion()
