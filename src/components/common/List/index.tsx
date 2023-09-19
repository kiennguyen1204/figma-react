import React from "react";
import "./index.scss";

interface ListProps {
    header?: string;
    children: React.ReactNode;
    footer?: string;
    direction?: string;
    classes?: string;
}

const List = ({ header, children, footer, direction = 'row', classes }: ListProps) => {
    return (
        <div className={`listContainer ${classes}`}>
            <div className={`listContainerBox ${ 
                direction === 'row' ? 'listContainerBoxRow' : 'listContainerBoxColumn' 
            }`}>
                {header && <div className="listContainerBoxHeader">{header}</div>}
                {children}

                {footer && <div className="listContainerBoxFooter">{footer}</div>}
            </div>
        </div>
    );
}

export default List;