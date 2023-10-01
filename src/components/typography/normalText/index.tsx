import { PropsType } from "interfaces/typography";
import "./index.css"

export const NormalText = (props: PropsType) => {
    const { children, classes, slot, color } = props;
    const slotCall = slot === 'center' ? 'text-center' : slot === 'end' ? 'text-end' : 'text-start';

    const isHexColor = (color: string) => {
        const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        return hexRegex.test(color);
    }

    return (
        <div className={`normal-text ${slotCall} ${classes ? classes : 'normal-text-class'} text-color-${color ? !isHexColor(color) ? color : 'default' : 'dark'}`}
        style={{ color: `${isHexColor(color ?? '') ? `${color}` : ''}` }}>
            {children}
        </div>
    )
}