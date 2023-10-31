import { FC, ReactNode, createElement } from 'react'

export enum HeaderType {
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    h4 = 'h4',
}

export type HeaderProps = {
    type: HeaderType
    style: HeaderType
    children: ReactNode
}

const classes = {
    header: (style: HeaderType) => {
        const classesMap = {
            [HeaderType.h1]: 'text-7xl text-current font-sans',
            [HeaderType.h2]: 'text-5xl font-bold text-current font-sans',
            [HeaderType.h3]: 'text-4xl font-semibold text-current font-sans',
            [HeaderType.h4]: 'text-xl font-semibold text-current font-mono',
        }
        return classesMap[style]
    },
}

export const Heading: FC<HeaderProps> = ({ type, style = type, children }) => {
    const tag = createElement(
        type,
        { className: classes.header(style) },
        children
    )
    return tag
}
