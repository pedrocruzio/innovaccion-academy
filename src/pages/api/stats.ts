/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'

import { db, TABLES } from 'utils/db'
import { POAP_EVENT_IDS } from 'constants/index'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const stats: any = {}
  try {
    const [uniqueAddresses] = await db(TABLES.users).count('id')
    stats.uniqueAddresses = uniqueAddresses.count
    const remainingPoaps = await db(TABLES.poaps)
      .count('id', { as: 'remainingPoaps' })
      .distinct('event_id')
      .where('is_claimed', false)
      .whereIn('event_id', POAP_EVENT_IDS)
      .groupBy('event_id')
    stats.remainingPoaps = remainingPoaps
    const poapDistributed = await db(TABLES.poaps)
      .count('id', { as: 'poapDistributed' })
      .distinct('event_id')
      .where('is_claimed', true)
      .whereIn('event_id', POAP_EVENT_IDS)
      .groupBy('event_id')
    stats.poapDistributed = poapDistributed
    return res.json(stats)
  } catch (error) {
    console.error(error)
    res.json({
      error: `error ${error?.code}: ${error}`,
    })
  }
}
