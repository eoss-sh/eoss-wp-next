import { Heading, HeaderType } from './Heading'
import Icon, { IconName, IconSize } from './icon'
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
            <p className="w-1/2 text-xl font-mono py-8">{children}</p>
        </ColoredBackground>
    )
}

export default Hero
