import { FirstServicePattern } from '../../pattern/landingPage/serviceOne';
import './index.scss';

export default function CategoryProduct() {
  return (
    <div className="category-product-container">
      <FirstServicePattern />
      <div className="top-title-wrapper">
        <p className="first-title">
          Shop
        </p>
        <p className="two-title title-filter">
          Filter
        </p>
        <p className="three-title title-filter">
          Short By Lates
        </p>
      </div>
      <div className="content-cate-product">
        <p className="title">
          Cannabis
        </p>
        <div className="description">
          Here at
          WestCoastSupply’s “
          cannabis section, we
          showcase the best
          Indica, Hybrid, and
          Sativa medical
          cannabis strain
          selections at the
          best prices online.
          You can be assured
          that all our strains
          go through a strict
          screening process to
          ensure that all your
          cannabis needs are
          top-quality. All of
          our flowers are
          sourced from
          reputable growers,
          based in British
          Columbia, Canada. We
          have hige grade
          selection comes from
          growers that produce
          AAAA+ quality
          cannabis flowers and
          have many years of
          experience in the
          cannabis industry.
          You are guaranteed
          to be receiving
          high-quality flowers
          at the best prices
          online with our
          unbeatable sales!
        </div>
        <div className="main-content">
            <p className="title-top-selling">
            Top Selling
            </p>
            <div className="list-item-selling list-data">
                {/* {f} */}
            </div>
            <div className="list-item-data">

            </div>
        </div>
      </div>
    </div>
  );
}
