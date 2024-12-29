"use client";

import Slider from "react-slick";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

// CAROUSEL DATA
interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
}

const MultipleItems = () => {
    const t = useTranslations("wework");

    const postData: DataType[] = [
        {
            profession: t('fundador'),
            name: t('nombre'),
            imgSrc: "/images/wework/avatar.svg",
        },
        {
            profession: "Co-founder",
            name: "John Doe",
            imgSrc: "/images/wework/avatar3.svg",
        },
        {
            profession: "Co-founder",
            name: "John Doe",
            imgSrc: "/images/wework/avatar4.svg",
        },
        {
            profession: "Co-founder",
            name: "John Doe",
            imgSrc: "/images/wework/avatar.svg",
        },
        {
            profession: "Co-founder",
            name: "John Doe",
            imgSrc: "/images/wework/avatar3.svg",
        },
        {
            profession: "Co-founder",
            name: "John Doe",
            imgSrc: "/images/wework/avatar4.svg",
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 4000,
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
        <div className="bg-wework py-3">
            <div className="m-3 py-14 my-10 text-center">
                <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 ">
                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">
                            {t("titulo1")}
                        </h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-70 lg:mr-48 my-2">
                            {t("titulo2")}
                        </h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-65 lg:-mr-32 my-2">
                            {t("titulo3")}
                        </h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-50 my-2">
                            {t("titulo4")}
                        </h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-35 lg:mr-48 my-2">
                            {t("titulo5")}
                        </h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-25 lg:-mr-32 my-2">
                            {t("titulo6")}
                        </h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-15 lg:-mr-32 my-2">
                            {t("titulo7")}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MultipleItems;
