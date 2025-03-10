import React from 'react'

const Work = () => {

    const WorkCardData = [
        {
            title: 'Pick Meals',
            imgUrl: 'src/assets/Pick_Meals.svg',
            imgAlt: 'Card1',
            desc: 'Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.'
        },
        {
            title: 'Choose How Often',
            imgUrl: 'src/assets/Choose_How_Often.svg',
            imgAlt: 'Card2',
            desc: 'Lorem ipsum dolor sit amet consectetur. Maecenas orci et',
        },
        {
            title: 'Fast Deliveries',
            imgUrl: 'src/assets/Fast_Deliveries.svg',
            imgAlt: 'Card3',
            desc: 'Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum',
        },
    ]

    return (
        <div className='work-sec py-[100px]'>
            <div className='container'>
                <div className='max-w-[720px] mx-auto text-center'>
                    <span className='title-label mb-8'>Work</span>
                    <h2 className='h2 mb-8'>How It Works</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie dui magnis facilisis at fringilla quam.</p>
                </div>
                <div className='cards-wrapper flex gap-[50px] mt-20'>
                    {WorkCardData.map((item) => (
                        <div key={item.title} className='card w-[calc(100%/3)] bg-[#fff] py-10 px-6 text-center rounded-[20px]'>
                            <div className='img-wrapper h-[140px] mb-[50px] flex justify-center items-center'>
                                <img src={item.imgUrl} className='max-h-full' alt={item.imgAlt} />
                            </div>
                            <h4 className='h4 mb-[30px]'>{item.title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Work