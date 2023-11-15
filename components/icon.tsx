export enum IconName {
    wow = '😮',
    smile = '🙂',
    ko = '😵',
    think = '🤔',
}

export enum IconSize {
    small = 'text-s',
    medium = 'text-m',
    large = 'text-xxl',
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
