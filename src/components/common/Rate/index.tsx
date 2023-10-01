import { PropsTypeRate } from "interfaces/components"
import Star from 'assets/icons/star.svg?react';
import "./index.css"

export const Rate = (props: PropsTypeRate) => {
    const { value, classes } = props;
    const starValue = value ? value : 5;

    return (
        <div className={`rate-container ${classes ? classes : ''}`}>
            <div className="rate-box">
                {[...Array(starValue)].map((_, i) => (
                    <Star key={i} />
                ))}
            </div>
        </div>
    )
}