import { Link } from "react-router-dom";

type DropdownBoxProps = {
    children: {
        to: string;
        name: string;
    }[];
};

export const DropdownBox = (props: DropdownBoxProps) => {
    const { children } = props;

    return (
        <div className='dropdownBoxContainer'>
            <div className="dropdownBox">
                <div className="dropdownBoxContent">
                    {children?.length > 0 && children.map((el: any, index: number) => (
                        <div className="dropdownBoxContentItem" key={index}>
                            <Link to={el.to} className="dropdownBoxContentItemLink">{el.name}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
