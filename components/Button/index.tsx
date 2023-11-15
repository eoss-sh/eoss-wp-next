import React from 'react'

export type ButtonLinkProps = {
    children: React.ReactNode
    variant?: 'primary' | 'secondary'
    url: string
}
export const ButtonLink = ({
    children,
    url,
    variant = 'primary',
}: ButtonLinkProps) => {
    const classes = {
        primary:
            'bg-primary text-white border-primary border-2 hover:bg-light hover:text-primary hover:border-primary hover:border-2',
        secondary:
            'bg-secondary text-white border-secondary border-2 hover:bg-light hover:text-secondary hover:border-secondary hover:border-2',
    }
    return (
        <a
            href={url}
            className={`${
                variant === 'primary' ? classes.primary : classes.secondary
            } py-3 px-6 mt-4 inline-block rounded-lg`}
        >
            {children}
        </a>
    )
}
