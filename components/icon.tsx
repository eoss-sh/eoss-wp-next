export enum IconName {
    wow = '😮',
    smile = '🙂',
    ko = '😵',
    think = '🤔',
}

export enum IconSize {
    small = 'text-xl',
    medium = 'text-4xl',
    large = 'text-8xl',
}

export type IconProps = {
    name: IconName
    size: IconSize
}

const Icon = ({ name, size, ...props }: IconProps) => {
    return (
        <span className={size} {...props}>
            {name}
        </span>
    )
}

export default Icon
