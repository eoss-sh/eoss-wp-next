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
            [HeaderType.h1]: 'text-xxl text-current font-krona leading-tight',
            [HeaderType.h2]: 'text-xl font-bold text-current font-krona',
            [HeaderType.h3]: 'text-l font-semibold text-current font-krona',
            [HeaderType.h4]: 'text-m font-semibold text-current font-krona',
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
