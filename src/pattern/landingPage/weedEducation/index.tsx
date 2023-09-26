import { Link } from 'react-router-dom';
import Card from '../../../components/common/Card';

import './index.scss';

export const WeedEducationPattern =
  () => {
    const weedEducationList =
      [
        {
          image:
            '/src/assets/images/weedEducation/image_17.webp',
          title:
            '12 Mistakes To Avoid When Buying Cannabis Online',
          subtitle:
            'January 24, 2023',
          description:
            'Buying cannabis online can be a great way to get your hands on the products you need without leaving the comfort of your home. But …',
          to: '/home'
        },
        {
          image:
            '/src/assets/images/weedEducation/image_18.webp',
          title:
            'How To Store Cannabis and Keep it Fresh and Potent?',
          subtitle:
            'January 20, 2023',
          description:
            'Cannabis packaging has advanced dramatically in recent years, whether your state has a medicinal marijuana programme, legal adult-use weed, or both. Most ...',
          to: '/home'
        },
        {
          image:
            '/src/assets/images/weedEducation/image_19.webp',
          title:
            'The Ultimate Guide to Checking the Quality of Cannabis – 10 Industry Leading Tips',
          subtitle:
            'January 19, 2023',
          description:
            'Quality cannabis is a term used to describe cannabis products that meet specific standards of excellence. It is essential to understand what quality cannabis means, …',
          to: '/home'
        }
      ];

    return (
      <Card
        classes={
          'weed-education-container'
        }
        title="WEED EDUCATION"
        iShowAll={true}>
        <div className="weed-education-box">
          <div className="weed-education-group">
            {weedEducationList.map(
              (
                item,
                index
              ) => {
                return (
                  <div
                    className="weed-education-item"
                    key={
                      index
                    }>
                    <div className="weed-education-item-image">
                      <img
                        src={
                          item.image
                        }
                        alt=""
                      />
                    </div>
                    <div className="weed-education-item-content">
                      <div className="weed-education-item-info">
                        <div className="weed-education-item-subtitle">
                          {
                            item.subtitle
                          }
                        </div>

                        <div className="weed-education-item-title">
                          {
                            item.title
                          }
                        </div>
                        <div className="weed-education-item-description">
                          {
                            item.description
                          }
                        </div>
                      </div>

                      <div className="weed-education-item-readmore">
                        <Link
                          to={
                            item.to
                          }
                          className="base-link">
                          Read
                          More
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </Card>
    );
  };
