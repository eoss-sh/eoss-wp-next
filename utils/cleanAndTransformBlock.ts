import { v4 as uuid } from 'uuid'

export const cleanAndTransformBlocks = (blocksInput) => {
    const blocks = blocksInput

    const assignId = (blocks) => {
        blocks.forEach((item) => {
            item.id = uuid()
            if (item.innerBlocks?.length) {
                assignId(item.innerBlocks)
            }
        })
    }
    assignId(blocks)

    return blocks
}
