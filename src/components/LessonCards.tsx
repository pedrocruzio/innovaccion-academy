import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Box, Text, Tag, Image, TagRightIcon } from '@chakra-ui/react'
import styled from '@emotion/styled'
import axios from 'axios'
import { CircleWavyCheck } from 'phosphor-react'
import ReactHtmlParser from 'react-html-parser'

import LESSONS from 'constants/lessons'
import Card from 'components/Card'

const LessonCard = styled(Box)`
  background: linear-gradient(
    152.97deg,
    rgba(0, 0, 0, 0.45) 0%,
    rgba(38, 38, 38, 0.25) 100%
  );
  backdrop-filter: blur(42px);
`

const LessonCards: React.FC = () => {
  const [numberOfPoapClaimed, setNumberOfPoapClaimed] = useState([])

  useEffect((): void => {
    // TODO: replace with tokensQuantityByEventId https://github.com/poap-xyz/poap-webapp/blob/2def482ffec93e6cbc4e3c5e5a18000805cc6c2b/src/api.ts#L1235
    const promiseArray = LESSONS.map((q) => {
      return axios.post(
        'https://api.thegraph.com/subgraphs/name/poap-xyz/poap-xdai',
        {
          query: `{event(id: ${q.poapEventId}){ tokenCount }}`,
        }
      )
    })
    axios
      .all(promiseArray)
      .then((results) => {
        setNumberOfPoapClaimed(
          results.map((r) => r.data.data.event?.tokenCount || 0)
        )
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [])

  return (
    <>
      {LESSONS.map((lesson, index) => {
        // lesson not started yet: -1
        // const currentSlide = parseInt(localStorage.getItem(lesson.slug) || '-1')
        // const numberOfSlides = lesson.slides.length
        const isPoapClaimed = localStorage.getItem(`poap-${lesson.slug}`)
        return (
          <LessonCard key={`lesson-${index}`} p={4}>
            <Text fontSize="xl">{lesson.name}</Text>
            <Text fontSize="lg">{lesson.description}</Text>
            <Box display="flex" justifyContent="space-between" my="4">
              <Tag size="sm" variant={isPoapClaimed ? 'solid' : 'outline'}>
                {isPoapClaimed ? 'Done' : `${lesson.duration} minutes`}
                {isPoapClaimed ? (
                  <TagRightIcon as={CircleWavyCheck} weight="bold" />
                ) : null}
              </Tag>
              <Text fontSize="sm">
                {numberOfPoapClaimed[index]} Completions
              </Text>
            </Box>
            <Link href={`/lessons/${lesson.slug}`}>
              <Card
                cursor="pointer"
                overflow="hidden"
                style={{
                  aspectRatio: '1.91/1',
                }}
              >
                <Image src={lesson.lessonImageLink} />
              </Card>
            </Link>
            <Text fontSize="md" mt="4">
              {ReactHtmlParser(lesson.learnings)}
            </Text>
          </LessonCard>
        )
      })}
    </>
  )
}

export default LessonCards