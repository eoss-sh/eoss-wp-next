import Container from './container'

export enum ThemeColors {
    primary = 'primary',
    secondary = 'secondary',
    tertiary = 'tertiary',
}

export type ColoredBackgroundProps = {
    children: React.ReactNode
    color: ThemeColors
}

const ColorBackground = ({
    children,
    color,
    ...props
}: ColoredBackgroundProps) => {
    return (
        <div className={`bg-${color} text-white min-h-screen py-9`} {...props}>
            <Container>{children}</Container>
        </div>
    )
}

export default ColorBackground
