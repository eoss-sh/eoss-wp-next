import { de } from 'date-fns/locale'

export const BlockRenderer = ({ blocks }) => {
    return blocks.map((block) => {
        switch (block.name) {
            case 'core/paragraph': {
                return (
                    <p key={block.attributes.id}>{block.attributes.content}</p>
                )
            }
            default: {
                return null
            }
        }
    })
}
