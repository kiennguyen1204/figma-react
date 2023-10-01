import { Heading1, Heading2, NormalText } from "components/typography";
import { WrapperCard, CustomContainer, SpacingInner, CardItem } from "components/layout";
import { CardList, Divided, Rate, Item, Avatar } from "components/common"

import '@splidejs/react-splide/css';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';


import UserAvatar1 from 'assets/images/customerTestimonials/avatar.webp';
import Google from 'assets/images/customerTestimonials/Google.svg?react';

import "./index.scss";

export const CustomerTestimonialsPattern = () => {
    const reviewList = [{
        avatar: UserAvatar1,
        name: "Vikki Starr",
        rate: 4,
        comment: 'Absolutely love TopShelfBC; affordable on any budget and such fast delivery, straight to my door! I recommend them to all my friends and family for their 420 needs.',
        date: 'January 15, 2023'
    }, {
        avatar: UserAvatar1,
        name: "Terry Baskey",
        rate: 5,
        comment: 'Best damn place to buy your canabis at great prices',
        date: 'January 15, 2023'
    }, {
        avatar: UserAvatar1,
        name: "Terry Baskey",
        rate: 5,
        comment: 'Best damn place to buy your canabis at great prices',
        date: 'January 15, 2023'
    }];

    const splideOpts = {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        gap: '32px',
        pagination: false,
        breakpoints: {
            576: { perPage: 1, },
            690: { perPage: 2, },
            768: { perPage: 3, },
            992: { perPage: 3, },
            1100: { perPage: 1.5, },
            1200: { perPage: 2.5, },
        }
    }

    return (
        <CustomContainer classes="customer-testimonials-container">
            <SpacingInner position="bottom">
                <Heading1 slot="start">Customer Testimonials</Heading1>
            </SpacingInner>

            <WrapperCard>
                <CardItem>
                    <CardList classes="customer-testimonial customer-testimonial-card-start" color="sacramento" colorLevel="dark">
                        <Heading2 slot="start" color="white">VOTED BEST ONLINE DISPENSARY IN CANADA</Heading2>

                        <Divided color="sacramento" colorLevel="base" />

                        <div className="customer-testimonial-text">
                            <div className="google-box my-32">
                                <Google />
                            </div>

                            <div className="customer-testimonial-text-review">
                                <NormalText color="white" classes="my-3">EXCELLENCE</NormalText>

                                <div className="customer-testimonial-review-list">
                                    <div className="customer-testimonial-rate-box">
                                        <Rate value={5} />
                                    </div>
                                    <div className="customer-testimonial-review">
                                        <NormalText color="white">on 135 <span className="heading-color-light">Reviews</span></NormalText>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardList>
                </CardItem>

                <CardItem>
                    <Splide hasTrack={ false } options={ splideOpts } aria-label="My Favorite Images">
                        <SplideTrack>
                            {reviewList.map((item, index) => (
                                <SplideSlide key={index}>
                                    <CardList color="white" key={index} classes="customer-testimonial customer-testimonial-card-end">
                                        <div className="customer-testimonial-information-list">
                                            <Item align="center" classes="customer-testimonial-avatar" gap="16">
                                                <Avatar width={32} height={34} src={item.avatar} />
                                                <NormalText color="base">{item.name}</NormalText>
                                            </Item>

                                            <Divided color="#c8c9cb" />

                                            <div className="customer-testimonial-text">
                                                <Rate classes="mb-3" value={item.rate} />
                                                <NormalText color="#1A1E26" classes="customer-testimonial-comment">{item.comment}</NormalText>
                                            </div>
                                        </div>

                                        <NormalText color="#9D9EA2" classes="customer-testimonial-date">{item.date}</NormalText>
                                    </CardList> 
                                </SplideSlide>
                            ))}
                        </SplideTrack>

                        <div className="splide__arrows">
                            <button className="splide__arrow splide__arrow--prev">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 6l-6 6l6 6"/></svg>
                            </button>
                            <button className="splide__arrow splide__arrow--next">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 6l6 6l-6 6"/></svg>
                            </button>
                        </div>
                    </Splide>
                </CardItem>
            </WrapperCard>
        </CustomContainer>
    )
}