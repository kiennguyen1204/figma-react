import { PropsType } from "interfaces/components";
import { BUTTON_VARIANT } from 'constants/enums';
import "./index.scss";

export const Card = (props: PropsType) => {
    const { children, classes, color, colorLevel } = props;
    const colorBg = color ? `bg-${color}` : `bg-${BUTTON_VARIANT.SACRAMENTO}`;
    const level = colorLevel ? `-${colorLevel}` : '';

    return (
        <div className={`card-box-container ${classes && classes}`}>
            <div className="card-box">
                <div className={`card-box-element ${colorBg}${level}`}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export const CardList = (props: PropsType) => {
    const { children, classes, color, colorLevel } = props;

    const level = colorLevel ? `-${colorLevel}` : '';

    const bgColor = color 
        ? `bg-${color}${level}` 
        : `bg-${BUTTON_VARIANT.SACRAMENTO}${level}`;

    return (
        <div className={`card-list-container ${classes ? classes : 'card-list-default'} ${bgColor}`}>
            <div className="card-list-box">
                { children }
            </div>
        </div>
    )
}