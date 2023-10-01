import { PropsType } from "interfaces/typography";
import "./index.scss"

export const Heading4 = (props: PropsType) => {
    const { children, classes, slot, color } = props;

    // ? default will be text-start
    const slotCall = slot === 'center' ? 'text-center' : slot === 'end' ? 'text-end' : 'text-start';

    return (
        <div className={`heading4 ${slotCall} ${classes && classes} heading-color-${color ? color : 'dark'}`}>
            {children}
        </div>
    )
}