import { PropsType } from "interfaces/components";
import "./index.css"

export const Item = (props: PropsType) => {
    const { children, classes, slot, align, gap } = props;
    
    return (
        <div className={`item ${slot ? `item-${slot}` : 'item-start'} ${align ? `align-${align}` : 'align-baseline'} ${classes ? classes : ''}`}
        style={{ gap: gap + 'px' || '0' }}>
            {children}
        </div>
    )
}