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
        <div className='dropdown-box-container'>
            <div className="dropdown-box">
                <div className="dropdown-box-content">
                    {children?.length > 0 && children.map((el: any, index: number) => (
                        <div className="dropdown-box-content-item" key={index}>
                            <Link to={el.to} className="dropdown-box-content-item-link">{el.name}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
