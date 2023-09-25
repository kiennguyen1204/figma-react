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
        <div className='dropdownbox-container'>
            <div className="dropdownBox">
                <div className="dropdownBoxContent">
                    {children?.length > 0 && children.map((el: any, index: number) => (
                        <div className="dropdownBoxcontent-item" key={index}>
                            <Link to={el.to} className="dropdownBoxcontent-itemLink">{el.name}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
