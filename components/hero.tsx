import { Heading, HeaderType } from './Heading'
import Icon, { IconName, IconSize } from './icon'
import { Paragraph } from './Paragraph'
import ColoredBackground, { ThemeColors } from './coloredBackground'

type HeroProps = {
    title: string
    icon: IconName
    color: ThemeColors
    children?: React.ReactNode
}

const Hero = ({ children, title, icon, color }: HeroProps) => {
    return (
        <ColoredBackground color={color}>
            <Heading type={HeaderType.h1} style={HeaderType.h1}>
                {title}
            </Heading>
            <Paragraph>{children}</Paragraph>
        </ColoredBackground>
    )
}

export default Hero
