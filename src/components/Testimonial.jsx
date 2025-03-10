import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiNavigation } from 'react-icons/bi';

const Testimonialdata = [
    {
        UserName: 'User1',
        imgUrl: 'src/assets/profile.png',
        imgAlt: 'User1',
        Ratings: 'src/assets/Ratings.svg',
        desc: 'ex eius dicta autem cum quidem delectus! Non aperiam saepe earum quis velit molestias? Consequatur aspernatur, debitis deleniti quisquam nostrum eveniet quia quidem ipsum nulla ab vitae, omnis reiciendis temporibus est. Eligendi amet qui fuga tempore aliquid sint, culpa nulla, animi quae ea commodi, labore vel ullam repellendus repellat laudantium recusandae cumque itaque quas. Animi quasi quaerat tempora provident illo!',
    },
    {
        UserName: 'User2',
        imgUrl: 'src/assets/profile.png',
        imgAlt: 'User2',
        Ratings: 'src/assets/Ratings.svg',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto culpa consectetur nemo, numquam odit vero veniam tempora? Voluptatibus numquam, unde harum esse natus quae odio nesciunt nam impedit cumque quibusdam ex eius dicta autem cum quidem delectus!',
    },
    {
        UserName: 'User3',
        imgUrl: 'src/assets/profile.png',
        imgAlt: 'User3',
        Ratings: 'src/assets/Ratings.svg',
        desc: 'utem cum quidem delectus! Non aperiam saepe earum quis velit molestias? Consequatur aspernatur, debitis deleniti quisquam nostrum eveniet quia quidem ipsum nulla ab vitae, omnis reiciendis temporibus est. Eligendi amet qui fuga tempore',
    }
]

export default function Testimonial() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        // delay: 2000,
        autoplay: true,
        slidesToShow: 1,
        // adaptiveHeight: true,
        arrows: false,
        slidesToScroll: 1,
    };
    return (
        <div className='testimonial-sec py-[100px]'>
            <div className='container'>
                <div className='max-w-[720px] mx-auto text-center'>
                    <span className='title-label mb-8'>Testimonial</span>
                    <h2 className='h2 mb-8'>What They Are Saying</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie dui magnis facilisis at fringilla quam.</p>
                </div>
                <Slider className='mt-20 max-w-[1000px] mx-auto' {...settings}>
                    {Testimonialdata.map((data, index) =>
                        <article key={index} className='text-center bg-[#FFFFFF] p-10'>
                            <img src={data.imgUrl} className='mx-auto mb-8' alt={data.imgAlt} />
                            <p className='mb-8 text-[#515151] max-w-[800px] mx-auto'>{data.desc}</p>
                            <img src={data.Ratings} className='mx-auto mb-8' alt="Ratings" />
                            <h2 className='h4 font-semibold	text-[black]'>{data.UserName}</h2>
                        </article>
                    )}
                </Slider>
            </div>
        </div>
    )
}
