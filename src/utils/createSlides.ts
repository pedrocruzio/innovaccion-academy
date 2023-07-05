interface Slide {
    type: 'LEARN' | 'QUIZ'
    notionId: string
    title: string | 'Knowledge Check'
    quiz?: Quiz
    content?: string
}

interface Quiz {
    question: string;
    rightAnswerNumber: number,
    answers: string[]
    id: string
}

export function createQuizSlide(slides: any[], title: string): Slide {
    let rightAnswerNumber: number = 0;

    let answers = slides.map((item, index) => {
        //These are title and question.
        if (index !== 0 && index !== 1) {
            if (item.to_do.checked) rightAnswerNumber = (index + 1)
            return item.to_do.rich_text[0].plain_text
        }
    })
    return {
        type: "QUIZ",
        notionId: slides[0].id,
        title: slides[0]?.heading_1?.rich_text[0]?.plain_text || 'Knowledge Check',
        quiz: {
            question: slides[1].paragraph.rich_text[0].plain_text,
            answers: answers.filter((value) => !!value),
            rightAnswerNumber: rightAnswerNumber - 2,
            id: title
        }
    }
}

export function createLearnSlide(slides: any[]): Slide {
    const tagMapping = {
        'bold': '<strong>',
        'italic': '<em>',
        'strikethrough': '<s>',
        'underline': '<u>',
        'code': '<code>'
    }

    const closingTagMapping = {
        '<strong>': '</strong>',
        '<em>': '</em>',
        '<s>': '</s>',
        '<u>': '</u>',
        '<code>': '</code>',
    }
    const paragraphs = []
    let url = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c8c73987-3c95-40b6-93c8-a9f347b230c6/Instructor_-_Medium.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230703T180818Z&X-Amz-Expires=3600&X-Amz-Signature=073162f47a6e16f61f49654f61ad33a7afbff139b6398737a9d6737744a94fdd&X-Amz-SignedHeaders=host&x-id=GetObject"

    const hasAnnotations = (annotations): string[] => {
        const allTags: string[] = []
        for (const key in annotations) {
            if (annotations.hasOwnProperty(key) && annotations[key] === true) {
                allTags.push(tagMapping[key])
            }
        }

        return allTags
    }
    const findContinousBulletedList = (slides: any[]): { firstIndex: number, lastIndex: number } => {
        let next;
        let firstBulletedListItemIndex = slides.findIndex((val) => val.type === "bulleted_list_item")
        let lastContinousIndex = firstBulletedListItemIndex
        next = slides[firstBulletedListItemIndex]
        while (next.type === "bulleted_list_item") {
            if (slides[lastContinousIndex + 1]?.type === "bulleted_list_item") {
                next = slides[lastContinousIndex + 1]
                lastContinousIndex += 1
            } else {
                next = false
            }
        }

        return {
            firstIndex: firstBulletedListItemIndex,
            lastIndex: lastContinousIndex
        }
    }
    for (const slide of slides) {
        switch (slide.type) {
            case "heading_1":
                break;
            case "paragraph":
                let paragraph = '<p>'
                for (const {annotations, plain_text} of slide["paragraph"].rich_text) {
                    const openTag: string[] = hasAnnotations(annotations)
                    if (openTag.length > 0) {
                        const openingTags = openTag.join('');
                        const closingTags = openTag.map(tag => closingTagMapping[tag]).reverse().join('')
                        paragraph = paragraph.concat(`${openingTags}${plain_text}${closingTags}`)
                    } else {
                        paragraph = paragraph.concat(plain_text)
                    }
                }
                paragraph = paragraph.concat('</p>')
                paragraphs.push(paragraph)
                break;
            case "bulleted_list_item":
                const {firstIndex, lastIndex} = findContinousBulletedList(slides)
                const bulletedList = slides.slice(firstIndex, lastIndex + 1)
                slides.splice(firstIndex, lastIndex)
                let list = '<ul>'
                for (const bullet of bulletedList) {
                    for (const {annotations, plain_text} of bullet.bulleted_list_item.rich_text) {
                        const openTag: string[] = hasAnnotations(annotations)
                        if (openTag.length > 0) {
                            const openingTags = openTag.join('')
                            const closingTags = openTag.map(tag => closingTagMapping[tag]).reverse().join('')
                            list = list.concat(`<li>${openingTags}${plain_text}${closingTags}</li>`)
                        } else {
                            list = list.concat(`<li>${plain_text}</li>`)
                        }

                        list = list.concat('</ul>')
                        paragraphs.push(list)
                    }
                }
                break;
            case "image":
                url = slide.image.file.url
            default:
                break;
        }
    }

    return {
        type: 'LEARN',
        notionId: slides[0]?.id || 'undefinedID',
        title: slides[0]?.heading_1?.rich_text[0]?.plain_text || 'Slide',
        content: joinParagraphs(paragraphs, url)
    }

}

export async function extractSlides(blocks: any[]): Promise<any[]> {
    return new Promise((resolve, reject) => {
        let result = []
        let foundHeading = false

        async function recursiveExtract(array) {
            if (array.length === 0) {
                resolve(result)
                return
            }

            const currentObject = array[0]
            if (currentObject.type === "heading_1") {
                if (!foundHeading) {
                    foundHeading = true
                } else {
                    resolve(result)
                    return
                }
            }

            if (foundHeading) {
                result.push(currentObject)
            }

            array.splice(0, 1)

            await recursiveExtract(array)
        }

        recursiveExtract(blocks).catch(reject)
    })
}

export function joinParagraphs(paragraphs: any[], url: string): string {
    return `<div class="bloc1">${paragraphs.join("")}</div><div class="bloc2"><img src="${url}"></div>`
}