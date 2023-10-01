import { PropsType } from "interfaces/layout";
import "./index.scss"

export const WrapperCard = (props: PropsType) => {
    const { children, classes } = props;

    return (
        <div className={`wrapper-card-container ${classes ? classes : ''}`}>
            <div className="wrapper-card-box">
                {children}
            </div>
        </div>
    )
}

export const CardItem = (props: PropsType) => {
    const { children, classes } = props;

    return (
        <div className={`card-item ${classes ? classes : ''}`}>
            {children}
        </div>
    )
}