import './index.css';

const Card = (element: {
  children: any;
  classes: string;
  title?: any;
  iShowAll?: boolean;
}) => {
  return (
    <div
      className={`card-box-container ${element.classes}`}>
      {element.title &&
        element.title.length >
          0 && (
          <div className="flex header-title">
            <div className="title">
              {element.title}
            </div>
            {element.iShowAll && (
              <div className="show-all">
                Show All
              </div>
            )}
          </div>
        )}
      <div className="card-box">
        <div className="card-box-element">
          {element.children}
        </div>
      </div>
    </div>
  );
};

export default Card;
