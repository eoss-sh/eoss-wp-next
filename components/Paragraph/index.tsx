import React from 'react'

type ParagraphProps = {
    children: React.ReactNode
}

export const Paragraph = ({ children }) => {
    return <p className="text-sm mb-4 max-w-prose">{children}</p>
}
