"use client";
import Slider from "react-slick";
import React from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";
import { useTranslations } from "next-intl";

interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
}



const MultipleItems: React.FC = () => {
    const t = useTranslations('testimonios');

    const postData: DataType[] = [
        {
            name: t('nombre1'),
            profession: '',
            comment: 'comentario1',
            imgSrc: '/images/testimonial/user1.svg',
        },
        {
            name: t('nombre2'),
            profession: '',
            comment: 'comentario2',
            imgSrc: '/images/testimonial/user2.svg',
        },
        {
            name: t('nombre3'),
            profession: '',
            comment: 'comentario3',
            imgSrc: '/images/testimonial/user3.svg',
        },
        {
            name: t('nombre4'),
            profession: '',
            comment: 'comentario4',
            imgSrc: '/images/testimonial/user4.svg',
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        autoplay: false,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
        ],
    };

    return (
        <div className="bg-testimonial pt-40 pb-32 lg:py-32" id="testimonial-section">
            <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>
                <div className="text-center">
                    <h3 className="text-4xl sm:text-6xl font-bold text-black my-3">{t('titulo')}</h3>
                    <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-50 lg:mr-48 my-4">{t('subtitulo1')}</h3>
                    <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 lg:-mr-32 my-4">{t('subtitulo2')}</h3>
                </div>

                <Slider {...settings}>
                    {postData.map((items, i) => (
                        <div key={i} className="relative">
                            <div className='bg-white test-sha m-3 p-10 my-20 rounded-3xl'>
                                <Image src={items.imgSrc} alt={items.imgSrc} width={71} height={71} className="inline-block m-auto absolute test-pos" />
                                <h4 className='text-base font-medium text-testColor my-4'>{t(items.comment)}</h4>
                                <hr style={{ color: "lightgrey" }} />
                                <div className="flex justify-between">
                                    <div>
                                        <h3 className='text-base font-medium pt-4 pb-2'>{items.name}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default MultipleItems;
