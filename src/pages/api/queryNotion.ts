import { notion } from '../../utils/notion'
import { NextApiRequest, NextApiResponse } from 'next'
import ApiResponseHandler from '../../utils/ApiResponseHandler'

export const queryNotion = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const result = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID ?? '',
    })
    await ApiResponseHandler.success(req, res, result)
  } catch (error) {
    await ApiResponseHandler.error(req, res, error)
  }
}
