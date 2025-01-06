"use client"
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import Image from 'next/image';
import {useTranslations} from "next-intl";


const Manage = () => {
    const t = useTranslations('Manage');
    
    const [enabled, setEnabled] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('monthly');

    const toggleEnabled = () => {
        setEnabled(!enabled);
        setSelectedCategory(enabled ? 'monthly' : 'yearly');
    }

    const names = [
        {
            heading: t('planbastitulo'),
            price: t('planbassubtitulo'),
            user: t('planbassubtitulo2'),
            profiles: t('planbasico1'),
            posts: t('planbasico2'),
            templates: t("planbasico3"),
            view: t("planbasico4"),
            support: t('soporte'),
            category: 'monthly'
        },
        {
            heading: t('planbastitulo2'),
            price: t('planbassub2'),
            user: t('planbassubtitulo2'),
            profiles: t('planbasico12'),
            posts: t('planbasico22'),
            templates: t('planbasico32'),
            view: t('planbasico42'),
            support: t('soporte2'),
            category: 'monthly'
        },
        {
            heading: t('planbastitulo3'),
            price: t('planbassubtitulo3'),
            user: t('planbassubtitulo2'),
            profiles: t('planbasico13'),
            posts: t('planbasico23'),
            templates: t('planbasico33'),
            view: t('planbasico43'),
            support: t('soporte2'),
            category: 'monthly'
        },
    ]

    const filteredData = names.filter(items => items.category === selectedCategory);

    return (
        <div id="services-section">
            <div className='mx-auto max-w-7xl sm:py-20 lg:px-8 my-16'>
                <h3 className='text-center text-4xl sm:text-65xl font-black'>{t('titulo')}</h3>

                <div className='md:flex md:justify-around mt-20'>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>{t('soporte')}</h4>
                    </div>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>{t('instalacion')}</h4>
                    </div>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>{t('solempresa')}</h4>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-14 manage'>
                    {filteredData.map((items, i) => (
                        <div className='manageTabs text-center p-10' key={i}>
                            <h4 className='text-2xl font-bold mb-3'>{items.heading}</h4>
                            <h2 className='text-5xl sm:text-65xl font-extrabold mb-3'>{items.price}</h2>
                            <p className='text-sm font-medium text-darkgrey mb-6'>{items.user}</p>
                            <hr style={{ color: "darkgrey", width: "50%", margin: "auto" }} />
                            <h3 className='text-sm font-medium text-darkgrey mb-3 mt-6'>{items.profiles}</h3>
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.posts}</h3>
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.templates}</h3>
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.view}</h3>
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.support}</h3>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Manage;
