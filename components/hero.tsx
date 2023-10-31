import { Heading, HeaderType } from './heading'
import Icon, { IconName, IconSize } from './icon'
import ColoredBackground, { ThemeColors } from './coloredBackground'

type HeroProps = {
    title: string
    icon: IconName
    color: ThemeColors
}

const Hero = ({ title, icon, color }: HeroProps) => {
    return (
        <ColoredBackground color={color}>
            <Icon name={icon} size={IconSize.large} />
            <Heading type={HeaderType.h1} style={HeaderType.h1}>
                {title}
            </Heading>
        </ColoredBackground>
    )
}

export default Hero
