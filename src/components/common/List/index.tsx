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
        <div className={`list-container ${classes}`}>
            <div className={`list-container-box ${ 
                direction === 'row' ? 'list-container-box-row' : 'list-container-box-column' 
            }`}>
                {header && <div className="list-container-box-header">{header}</div>}
                {children}

                {footer && <div className="list-container-box-footer">{footer}</div>}
            </div>
        </div>
    );
}

export default List;