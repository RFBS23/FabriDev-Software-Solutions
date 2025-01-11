"use client"
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import Image from 'next/image';
import {useTranslations} from "next-intl";

const Manage = () => {
    const t = useTranslations('Manage');
    
    const [enabled, setEnabled] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('servtecnico');

    const toggleEnabled = () => {
        setEnabled(!enabled);
        setSelectedCategory(enabled ? 'servtecnico' : 'software');
    }

    const names = [
        {
            heading: t('planbastitulo'),
            price: t('planbassubtitulo'),
            user: "",
            button: t('contacto'),
            links: "https://wa.me/51922289013?text=Hola%20Fabridev,%20estoy%20interesado%20en%20contratar%20el%20plan%20basico%20",
            profiles: t('planbasico1'),
            posts: t('planbasico2'),
            templates: t("planbasico3"),
            view: t("planbasico4"),
            support: t('soporte'),
            category: 'servtecnico'
        },
        {
            heading: t('planbastitulo2'),
            price: t('planbassub2'),
            user: "",
            button: t('contacto'),
            links: "https://wa.me/51922289013?text=Hola%20Fabridev,%20estoy%20interesado%20en%20contratar%20el%20plan%20profesional%20",
            profiles: t('planbasico12'),
            posts: t('planbasico22'),
            templates: t('planbasico32'),
            view: t('planbasico42'),
            support: t('soporte2'),
            category: 'servtecnico'
        },
        {
            heading: t('planbastitulo3'),
            price: t('planbassubtitulo3'),
            user: "",
            button: t('contacto'),
            links: "https://wa.me/51922289013?text=Hola%20Fabridev,%20estoy%20interesado%20en%20contratar%20el%20plan%20empresarial%20",
            profiles: t('planbasico13'),
            posts: t('planbasico23'),
            templates: t('planbasico33'),
            view: t('planbasico43'),
            support: t('soporte2'),
            category: 'servtecnico'
        },
        {
            heading: t('webdesign'),
            price: t('preciowebdesign'),
            user: t('planbassubtitulo2'),
            button: t('contacto'),
            links: "https://wa.me/51922289013?text=Hola%20Fabridev,%20estoy%20interesado%20en%20contratar%20el%20plan%20mockup%20y%20Diseño%20web%20",
            profiles: t('webdes1'),
            posts: t('webdes2'),
            templates: t("webdes3"),
            view: '',
            support: '',
            category: 'software'
        },
        {
            heading: t('softmedida'),
            price: t('preciosoft'),
            user: t('planbassubtitulo2'),
            button: t('contacto'),
            links: "https://wa.me/51922289013?text=Hola%20Fabridev,%20estoy%20interesado%20en%20contratar%20el%20plan%20de%20software%20a%20medida%20",
            profiles: t('soft1'),
            posts: t('soft2'),
            templates: t('soft3'),
            view: '',
            support: '',
            category: 'software'
        },
        {
            heading: t('mobile'),
            price: t('preciomobile'),
            user: t('planbassubtitulo2'),
            button: t('contacto'),
            links: "https://wa.me/51922289013?text=Hola%20Fabridev,%20estoy%20interesado%20en%20contratar%20el%20plan%20de%20aplicaciones%20móviles%20",
            profiles: t('android1'),
            posts: t('android2'),
            templates: t('android3'),
            view: '',
            support: '',
            category: 'software'
        },
    ]

    const filteredData = names.filter(items => items.category === selectedCategory);

    return (
        <div id="services-section">
            <div className='mx-auto max-w-7xl sm:py-20 lg:px-8 my-16'>
                <h3 className='text-center text-4xl sm:text-65xl font-black'>{t('titulo')}</h3>

                <div className='md:flex md:justify-around mt-20'>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14}/>
                        <h4 className='text-lg font-semibold'>{t('soporte')}</h4>
                    </div>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14}/>
                        <h4 className='text-lg font-semibold'>{t('instalacion')}</h4>
                    </div>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14}/>
                        <h4 className='text-lg font-semibold'>{t('solempresa')}</h4>
                    </div>
                </div>

                <div className='mt-6 relative'>
                    <div className='dance-text mb-5'>{t('oferta')}</div>
                    <Image src="/images/manage/curvearrow.svg" alt="toggle-image" width={24} height={24} className="toggleImage"/>
                    <br/>
                    <div className='flex justify-center'>
                        <h3 className='text-sm font-medium mr-5'>{t('toggle1')}</h3>
                        <Switch checked={enabled} onChange={toggleEnabled} className={`${enabled ? 'bg-darkpurple' : 'bg-darkpurple'} relative inline-flex h-6 w-11 items-center rounded-full`}>
                            <span className="sr-only text-black">Enable notifications</span>
                            <span className={`${enabled ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`} />
                        </Switch>
                        <h3 className='text-sm font-medium ml-5'>{t('toggle2')}</h3>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-14 manage'>
                    {filteredData.map((items, i) => (
                        <div className='manageTabs text-center p-10' key={i}>
                            <h4 className='text-2xl font-bold mb-3'>{items.heading}</h4>
                            <h2>{t('desde')}</h2>
                            <h2 className='text-5xl sm:text-65xl font-extrabold mb-3'>{items.price}</h2>
                            <p className='text-sm font-medium text-darkgrey mb-6'>{items.user}</p>
                            <button className='text-sm font-bold text-blue bg-transparent hover:bg-blue hover:text-white border-2 border-blue rounded-full py-4 px-12 mb-6'>
                                <a href={items.links} target="_blank" rel="noopener noreferrer">
                                    {items.button}
                                </a>
                            </button>
                            <hr style={{color: "darkgrey", width: "50%", margin: "auto"}}/>
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
