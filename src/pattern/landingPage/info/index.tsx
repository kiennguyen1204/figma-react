import {  NavLink } from "react-router-dom";
import './index.scss'


export default function InfoBottom() {
  const data = [
    {
      title: 'Indica',
      image:
        '/src/assets/images/indica.png',
      description: `This type of cannabis is commonly taken by those who want to sink into a state of total relaxation in every limb. This reduces stress overall and can take your worries and fatigue away. Because of its relaxing effects, it is suggested to use this type of cannabis at night. It is particularly recommended for people who have trouble sleeping, be it due to insomnia, pain or other associated sleep issues.`,
      to: '/indica',
      shop: 'Shop Indica'
    },
    {
      title: 'Sativa',
      image:
        '/src/assets/images/sativa.png',
      description:
        'Contrary to the deep all-body relaxation that comes with the use of indica strains, sativas are known for increasing the feeling of creativity, enhancing focus and lessening anxiety. This is more of a mind-centered high in terms of how and where you will feel the effects. Given its stimulating nature, it is recommended to use this during the day.',
      to: '/sativa',
      shop: 'Shop Sativa'
    },
    {
      title: 'Hybrids',
      image:
        '/src/assets/images/hybrids.png',
      description: `Hybrid strains are just that – they combine the head-focused high effects of sativas with the bodily relaxation of indicas. This is ideal for people who really want to sooth any fatigue and worries while also clearing the mind ready to focus fresh on something new. Hybrids are expertly tailored to result in strains with specific effects. Useful strain vocabulary to familiarize yourself with when it comes to hybrids includes sativa-dominant (full, bodily relaxation), indica-dominant (boosting creativity, increasing mood and lessening anxiety) and balanced (the best of both worlds).`,
      top: '/hybrids',
      shop: 'Shop Hybrids'
    }
  ];

  return (
    <div className="box-info-bottom-container">
      <div className="box-container">
        {data.map((e, i) => (
            <div className="item-box" key={i}>
                <div className="card-image">
                    <img src={e.image} alt={e.title}/>
                </div>
                <p className="title">{e.title}</p>
                <p className="description">{e.description}</p>
                <NavLink to={e.to as string} className="shop">{e.shop}</NavLink>
            </div>
        ))}
      </div>
    </div>
  );
}
