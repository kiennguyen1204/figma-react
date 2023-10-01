import { PropsType } from "interfaces/typography";
import "./index.css"

export const NormalText = (props: PropsType) => {
    const { children, classes, slot, color } = props;
    const slotCall = slot === 'center' ? 'text-center' : slot === 'end' ? 'text-end' : 'text-start';

    return (
        <div className={`normal-text ${slotCall} ${classes ? classes : ''} text-color-${color ? color : 'dark'}`}>
            {children}
        </div>
    )
}