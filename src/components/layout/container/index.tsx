import { PropsType } from "interfaces/typography"
import "./index.scss";

export const CustomContainer = (props: PropsType) => {
    const { children, classes } = props;

    return (
        <div className={`custom-container ${classes && classes}`}>
            {children}
        </div>
    )
}