import { PropsType } from "interfaces/layout";
import "./index.scss"

export const SpacingInner = (props: PropsType) => {
    const { children, classes, position } = props;
    const pos = !position ? '' : `spacing-inner-${position}`;

    return (
        <div className={`spacing-inner ${pos} ${classes ? classes : ''}`}>
            {children}
        </div>
    )
}