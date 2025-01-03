"use client"
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {Fragment, useState} from 'react';
import {Dialog, Transition} from "@headlessui/react";

interface ProductType {
    id: number;
    section: string;
    link: string[];
}

const Footer = () => {

    let [isOpen, setIsOpen] = useState(false)
    let [isOpenTerminos, setIsOpenTerminos] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
    }

    const closeModalTerminos = () => {
        setIsOpenTerminos(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    const openModalTerminos = () => {
        setIsOpenTerminos(true)
    }

    const t = useTranslations('Footer');

    const products: ProductType[] = [
        {
            id: 1,
            section: t('op1'),
            link: [t('Home'), t('Popular'), t('About'), t('Contact')],
        },
        {
            id: 2,
            section: t('Menu'),
            link: [t('Home'), t('Popular'), t('About'), t('Contact')],
        },
        {
            id: 3,
            section: t('Category'),
            link: [t('Design'), t('Mockup'), t('ViewAll'), t('LogIn')],
        },
        {
            id: 4,
            section: t('Pages'),
            link: [t('404'), t('Instructions'), t('License')],
        },
    ];

    return (
        <div className="bg-black -mt-40" id="first-section">
            <div className="mx-auto max-w-2xl pt-48 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

                    {/* COLUMN-1 */}

                    <div className='col-span-4'>
                        <h3 className='text-white text-4xl font-semibold leading-9 mb-4 lg:mb-20'> FabriDev Software Solutions</h3>
                        <div className='flex gap-4'>
                            <div className='footer-icons' style={{background: 'white'}}>
                                <Link href="https://www.facebook.com/share/18H3BUvgA2/?mibextid=qi2Omg" target={'_blank'}><Image src={'/images/footer/facebook-color.svg'} alt="facebook" width={20} height={20}/></Link>
                            </div>
                            <div className='footer-icons' style={{background: 'white'}}>
                                <Link href="https://youtube.com/@fabridev" target={'_blank'}><Image src={'/images/footer/youtube-color.svg'} alt="youtube" width={20} height={20}/></Link>
                            </div>
                            <div className='footer-icons' style={{background: 'white'}}>
                                <Link href="https://www.instagram.com/fabridevperu?igsh=MXBtcDU2eDAwYW92Nw==" target={'_blank'}><Image src={'/images/footer/instagram-color.svg'} alt="instagram" width={20} height={20}/></Link>
                            </div>
                            <div className='footer-icons' style={{background: 'white'}}>
                                <Link href="https://www.tiktok.com/@fabriziobarrios_19?_t=8sRzzyWfXpl&_r=1" target={'_blank'}><Image src={'/images/footer/tiktok.svg'} alt="tik tok" width={30} height={30}/></Link>
                            </div>
                        </div>
                    </div>

                    {/* CLOUMN-2/3 */}

                    {products.map((product) => (
                        <div key={product.id} className="group relative col-span-2">
                            <p className="text-white text-xl font-extrabold mb-9">{product.section}</p>
                            <ul>
                                {product.link.map((link: string, index: number) => (
                                    <li key={index} className='mb-5'>
                                        <Link href="/" className="text-white text-lg font-normal mb-6 space-links">{link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
            </div>

            {/* All Rights Reserved */}

            <div className="mx-auto max-w-2xl lg:max-w-7xl">
                <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
                    <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
                        <div>
                            <h3 className='text-center md:text-start text-offwhite text-lg'>&copy;{new Date().getFullYear()} - {t('derechos')} <Link href="https://portafolio-fabridev.vercel.app/" target="_blank"> FabriDev.com</Link></h3>
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <span className="text-offwhite pr-6 cursor-pointer" onClick={(e) => {e.preventDefault();openModal();}}>{t('polipriv')}</span>
                            <Link href="/">
                                <h3 className="text-offwhite pl-6 border-solid border-l border-footer">{t('term')}</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/*terminos*/}
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95">
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md">
                                        <div className="flex items-center justify-between">
                                            <span className="text-2xl sm:text-4xl font-semibold text-black" onClick={(e) => {e.preventDefault();openModal();}}>
                                                {t('polipriv')}
                                            </span>
                                            <button type="button" onClick={closeModal} className="py-3 px-5 mt-2 text-sm font-medium text-center text-black rounded-lg bg-red hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border-danger fw-bold">
                                                X
                                            </button>
                                        </div>
                                        <p className="mb-8 lg:mb-16 mt-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">{t('modaltxt')}</p>
                                        <form className="space-y-8">
                                            <div>
                                                <label htmlFor="text"
                                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{t('nombre')}</label>
                                                <input
                                                    id="text"
                                                    name={t('nombre')}
                                                    type="text"
                                                    autoComplete="current-password"
                                                    required
                                                    className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    placeholder={t('placeholderNombre')}
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email"
                                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{t('email')}</label>
                                                <input
                                                    id="email"
                                                    name={t('email')}
                                                    type="email"
                                                    autoComplete="current-password"
                                                    required
                                                    className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    placeholder={t('placeholderCorreo')}
                                                />
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label htmlFor="message"
                                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{t('mensaje')}</label>
                                                <textarea
                                                    id="message"
                                                    name={t('mensaje')}
                                                    className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    placeholder={t('placeholderMensaje')}></textarea>
                                            </div>
                                            <button type="submit"
                                                    className="py-3 px-5 text-sm disabled:opacity-50 font-medium w-full text-center text-white rounded-lg bg-blue focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">{t('btnEnviar')}
                                            </button>
                                            <input name="_next" type="hidden" value="https://fabridev.vercel.app/"/>
                                            <input name="_captcha" type="hidden" value="false"/>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>

    )
}
export default Footer;

/*
*
* */