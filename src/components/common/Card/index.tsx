import "./index.css";

const Card = (element: { children: any; classes: string }) => {
    return (
        <div className={`cardBoxContainer ${element.classes}`}>
            <div className="cardBox">
                <div className="cardBoxElement">
                    {element.children}
                </div>
            </div>
        </div>
    );
}

export default Card  
