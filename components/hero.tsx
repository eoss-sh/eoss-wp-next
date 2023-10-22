import { Heading, HeaderType } from './heading'
import Icon, { IconName, IconSize } from './icon'
import ColoredBackground, { ThemeColors } from './coloredBackground'

const Hero = () => {
    return (
        <ColoredBackground color={ThemeColors.primary}>
            <Icon name={IconName.wow} size={IconSize.large} />
            <Heading type={HeaderType.h1} style={HeaderType.h1}>
                Hello World
            </Heading>
        </ColoredBackground>
    )
}

export default Hero
