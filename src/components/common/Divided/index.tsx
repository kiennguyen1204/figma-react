import { PropsType } from "interfaces/components"

export const Divided = (props: PropsType) => {
    const { classes, color, colorLevel } = props;

    const isHexColor = (color: string) => {
        const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        return hexRegex.test(color);
    }

    return (
        <hr className={`divided ${classes ? classes : ''} ${color 
            ? !isHexColor(color) 
            ? `border-top-${color}${colorLevel ? `-${colorLevel}` : ''}` 
            : 'border-top-default'
            : 'border-sacramento-base'}`}
            style={{ borderTop: `${color ? isHexColor(color) ? `1px solid ${color}` : '' : ''}` }}
        />
    )
}