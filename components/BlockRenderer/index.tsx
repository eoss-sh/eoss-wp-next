import Image from 'next/image'
import { Heading, HeaderType } from '../Heading'
import { ButtonLink } from '../Button'

export const BlockRenderer = ({ blocks }) => {
    return blocks.map((block) => {
        switch (block.name) {
            case 'core/paragraph': {
                return (
                    <p className="text-s" key={block.id}>
                        {block.attributes.content}
                    </p>
                )
            }
            case 'core/heading': {
                const level = `h${block.attributes.level}`
                return (
                    <Heading
                        key={block.id}
                        type={level as HeaderType}
                        style={level as HeaderType}
                    >
                        {block.attributes.content}
                    </Heading>
                )
            }
            case 'core/image': {
                return (
                    <Image
                        key={block.id}
                        src={block.attributes.url}
                        alt={block.attributes.alt}
                        width={block.attributes.width}
                        height={block.attributes.height}
                    />
                )
            }
            case 'core/button': {
                return (
                    <ButtonLink
                        key={block.id}
                        url={block.attributes.url}
                        variant={
                            block.attributes.className === 'is-style-outline'
                                ? 'secondary'
                                : 'primary'
                        }
                    >
                        {block.attributes.text}
                    </ButtonLink>
                )
            }
            case 'core/column': {
                return <BlockRenderer blocks={block.innerBlocks} />
            }
            case 'core/columns': {
                return <BlockRenderer blocks={block.innerBlocks} />
            }
            case 'core/group': {
                return <BlockRenderer blocks={block.innerBlocks} />
            }
            case 'core/buttons': {
                return (
                    <div className="flex gap-2">
                        <BlockRenderer blocks={block.innerBlocks} />
                    </div>
                )
            }
            default: {
                return null
            }
        }
    })
}
