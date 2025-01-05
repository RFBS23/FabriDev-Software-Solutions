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
                                <Link href="https://www.tiktok.com/@fabriziobarrios_19?_t=8sRzzyWfXpl&_r=1" target={'_blank'}><Image src={'/images/footer/tiktok.svg'} alt="tiktok" width={20} height={20}/></Link>
                            </div>
                        </div>
                    </div>

                    {/* CLOUMN-2/3 */}

                    <div className="group relative col-span-2">
                        <p className="text-white text-xl font-extrabold mb-9">{t('op1')}</p>
                        <ul>
                            <li className='mb-5'>
                            <Link href="/" className="text-white text-lg font-normal mb-6 space-links">{t('Home')}</Link>
                            </li>
                        </ul>
                        <ul>
                            <li className='mb-5'>
                                <Link href="#aboutus-section" className="text-white text-lg font-normal mb-6 space-links">{t('About')}</Link>
                            </li>
                        </ul>
                        <ul>
                            <li className='mb-5'>
                                <Link href="#blog-section" className="text-white text-lg font-normal mb-6 space-links">{t('Blog')}</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="group relative col-span-2">
                        <p className="text-white text-xl font-extrabold mb-9">{t('op2')}</p>
                        <ul>
                            <li className='mb-5'>
                                <Link href="#services-section"
                                      className="text-white text-lg font-normal mb-6 space-links">{t('Services')}</Link>
                            </li>
                        </ul>
                        <ul>
                            <li className='mb-5'>
                                <Link href="#faq-section"
                                      className="text-white text-lg font-normal mb-6 space-links">{t('FAQ')}</Link>
                            </li>
                        </ul>
                        <ul>
                            <li className='mb-5'>
                                <Link href="#testimonial-section"
                                      className="text-white text-lg font-normal mb-6 space-links">{t('Testimonials')}</Link>
                            </li>
                        </ul>
                        <ul>
                            <li className='mb-5'>
                                <Link href="https://portafolio-fabridev.vercel.app/"
                                      className="text-white text-lg font-normal mb-6 space-links"
                                      target="_blank">{t('Tienda')}</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="group relative col-span-2">
                    <p className="text-white text-xl font-extrabold mb-9">{t('Contact')}</p>
                        <ul>
                            <li className="mb-5">
                                <p className="text-white text-lg font-normal mb-6 space-links">{t('Email')}: fabridevsoftwaresolutions@gmail.com</p>
                            </li>
                        </ul>
                        <ul>
                            <li className="mb-5">
                                <p className="text-white text-lg font-normal mb-6 space-links">{t('phone')}: <br/>
                                    <Link href="https://wa.me/51922289013?text=Hola%20Fabridev%20donde%20puedo%20ver%20tus%20productos??%20" className="text-white text-lg font-normal space-links" target="_blank">(+51) 922-289-013</Link>
                                </p>
                            </li>
                        </ul>
                    </div>

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
                            <span onClick={(e) => {e.preventDefault();openModal();}}>
                                <h3 className="text-offwhite pr-6 cursor-pointer">{t('polipriv')}</h3>
                            </span>
                            <span onClick={(e) => {e.preventDefault();openModalTerminos();}}>
                                <h3 className="text-offwhite pl-6 border-solid border-l border-footer cursor-pointer">
                                {t('term')}</h3>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/*politica*/}
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black bg-opacity-50" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                                <Dialog.Panel className="w-full max-w-6xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                                    {/* Header del Modal */}
                                    <div className="flex items-center justify-between p-3 border-b">
                                        <h1 className="text-2xl sm:text-4xl font-semibold text-black">
                                            {t('polipriv')}
                                        </h1>
                                        <button type="button" onClick={closeModal} className="text-lg font-semibold text-black bg-red-500 hover:bg-red-700 rounded-lg p-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="container mx-auto p-8 overflow-y-auto max-h-[80vh]">
                                        <p className="mb-4">
                                            {t('txtpriv')} <strong>FabriDev Software Solutions</strong>, {t('txtpriv2')}
                                        </p>
                                        <h2 className="text-2xl font-semibold mb-4">1. {t('infopriv')}</h2>
                                        <ul className="list-disc pl-6 mb-4">
                                            <li>
                                                {t('txtinfopriv1')}
                                            </li>
                                            <li>
                                                {t('txtinfopriv2')}
                                            </li>
                                            <li>
                                                {t('txtinfopriv3')}
                                            </li>
                                        </ul>
                                        <h2 className="text-2xl font-semibold mb-4">2. {t('usoinfo')}</h2>
                                        <p className="mb-4">
                                            {t('titleusoinfo')}
                                        </p>
                                        <ul className="list-disc pl-6 mb-4">
                                            <li>
                                                {t('txtusoinfo1')}
                                            </li>
                                            <li>
                                                {t('txtusoinfo2')}
                                            </li>
                                            <li>
                                                {t('txtusoinfo3')}
                                            </li>
                                            <li>{t('txtusoinfo4')}</li>
                                        </ul>
                                        <h2 className="text-2xl font-semibold mb-4">3. {t('proteccion')}</h2>
                                        <p className="mb-4">
                                            {t('txtprotec')}
                                        </p>
                                        <h2 className="text-2xl font-semibold mb-4">4. {t('cambpolitcas')}</h2>
                                        <p className="mb-4">
                                            {t('txtcambpoli')}
                                        </p>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            {/*terminos*/}
            <Transition appear show={isOpenTerminos} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModalTerminos}>
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black bg-opacity-50" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                                <Dialog.Panel className="w-full max-w-6xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                                    {/* Header del Modal */}
                                    <div className="flex items-center justify-between p-3 border-b">
                                        <h1 className="text-2xl sm:text-4xl font-semibold text-black">
                                            {t('term')}
                                        </h1>
                                        <button type="button" onClick={closeModalTerminos} className="text-lg font-semibold text-black bg-red-500 hover:bg-red-700 rounded-lg p-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="container mx-auto p-8 overflow-y-auto max-h-[80vh]">
                                        <p className="mb-4">
                                            {t('txtterm1')} <strong>FabriDev Software Solutions</strong>, {t('txtterm2')}
                                        </p>
                                        <h2 className="text-2xl font-semibold mb-4">1. {t('generalidad')}</h2>
                                        <p className="mb-4">
                                            {t('txtgeneralidad')}
                                        </p>
                                        <h2 className="text-2xl font-semibold mb-4">2. {t('garantias')}</h2>
                                        <ul className="list-disc pl-6 mb-4">
                                            <li>{t('txtgarantia1')}</li>
                                            <li>{t('txtgarantia2')}</li>
                                        </ul>
                                        <h2 className="text-2xl font-semibold mb-4">3. {t('precios')}</h2>
                                        <p className="mb-4">
                                            {t('txtprecios')}
                                        </p>
                                        <h2 className="text-2xl font-semibold mb-4">4. {t('Contact')}</h2>
                                        <p className="mb-4">
                                            {t('txtcontacto')}
                                        </p>
                                        <ul className="list-disc pl-6">
                                            <li><strong>{t('phone')}:</strong> (+51) 922-289-013</li>
                                            <li><strong>{t('Email')}:</strong> fabridevsoftwaresolutions@gmail.com</li>
                                        </ul>
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
