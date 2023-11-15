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
            [HeaderType.h1]:
                'text-xl md:text-xxl text-current font-krona md:max-w-3/4 mb-5',
            [HeaderType.h2]: 'text-xl font-bold text-current font-krona mb-4',
            [HeaderType.h3]:
                'text-l font-semibold text-current font-krona mb-2',
            [HeaderType.h4]:
                'text-m font-semibold text-current font-krona mb-2',
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
