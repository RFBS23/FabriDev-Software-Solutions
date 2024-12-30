"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

// CAROUSEL DATA

interface DataType {
    heading: string;
    imgSrc: string;
}


// Wrapper para pasar `t` como prop
export default function MultipleItemsWrapper() {
    const t = useTranslations('Featured'); // Obtén la función de traducción

    return <MultipleItems t={t} />;
}

// Clase principal
class MultipleItems extends Component<{ t: (key: string) => string }> {
    render() {

        const { t } = this.props; // Usa la función `t` desde las props

        const postData: DataType[] = [
            {
                heading: 'txtslider1',
                imgSrc: '/images/featured/feat1.jpg',
            },
            {
                heading: 'txtslider2',
                imgSrc: '/images/featured/feat2.jpg',
            },
            {
                heading: 'txtslider3',
                imgSrc: '/images/featured/feat3.jpg',
            },
            {
                heading: 'txtslider4',
                imgSrc: '/images/featured/feat3-1.jpg',
            },
        ];

        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,
            speed: 500,
            nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
            prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 800,
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
            <div className="bg-bgblue py-20 marginFeature bg-featured">
                <div className="mx-auto max-w-7xl sm:py-4 lg:px-8">
                    <div className="text-center pt-48 pb-10 md:pt-96">
                        <h3 className="text-4xl sm:text-6xl font-bold text-white my-2">{t('txt1')}</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-white text-opacity-50 lg:mr-48 my-2">{t('txt2')}</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-white text-opacity-25 lg:-mr-32 my-2">{t('txt3')}</h3>
                    </div>

                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className="bg-transparent m-3 pb-12 my-10 rounded-3xl">
                                    <Image src={items.imgSrc} alt="featured" width={636} height={620} className="rounded-2xl"/>
                                    <div className="w-full flex justify-center items-center">
                                        <h4 className="sm:text-5xl font-bold sm:pt-6 text-center mt-10 text-white">
                                            {t(items.heading)}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}

// Arrows (sin modificaciones)
function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "rgba(255, 255, 255, 0.3)",
                padding: "28px",
                borderRadius: "20px",
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "rgba(255, 255, 255, 0.3)",
                padding: "28px",
                borderRadius: "20px",
            }}
            onClick={onClick}
        />
    );
}
