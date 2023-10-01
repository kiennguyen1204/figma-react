import { PropsType } from "interfaces/components"

export const Divided = (props: PropsType) => {
    const { classes, color, colorLevel } = props

    return (
        <hr className={`divided ${classes ? classes : ''} ${color 
            ? `border-top-${color}${colorLevel ? `-${colorLevel}` : ''}` 
            : 'border-sacramento-base'}`}
        />
    )
}