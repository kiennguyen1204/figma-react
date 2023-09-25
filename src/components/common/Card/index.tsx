import './index.css';

const Card = (element: {
  children: any;
  classes: string;
  title?: any;
  isShowAll?: boolean;
}) => {
  return (
    <div
      className={`cardBoxContainer ${element.classes}`}>
      {element.title &&
        element.title.length >
          0 && (
          <div className="flex headerTitle">
            <div className="title">
              {element.title}
            </div>
            {element.isShowAll && (
              <div className="showAll">
                Show All
              </div>
            )}
          </div>
        )}
      <div className="cardBox">
        <div className="cardBoxElement">
          {element.children}
        </div>
      </div>
    </div>
  );
};

export default Card;
