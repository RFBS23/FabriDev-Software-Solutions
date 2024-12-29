import React, {Fragment, useState} from "react";
import Link from "next/link";
import Contactusform from "./Contactus";
import {Dialog, Transition} from "@headlessui/react";
import {useTranslations} from "next-intl";
import LocalSwitcher from "@/app/components/Navbar/Localswitcher";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
    target?: string;
}


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Data = () => {
    let [isOpen, setIsOpen] = useState(false)

    const t = useTranslations('Navigation');
    const c = useTranslations('contacto');

    const navigation: NavigationItem[] = [
        { name: t('aboutus'), href: '#aboutus-section', current: false },
        { name: t('services'), href: '#services-section', current: false },
        { name: t('faq'), href: '#faq-section', current: false },
        { name: t('blog'), href: '#blog-section', current: false },
        { name: t('testimonials'), href: '#testimonial-section', current: false },
        { name: t('store'), href: 'https://portafolio-fabridev.vercel.app/', current: false, target: '_blank' },
    ]


    const [inputValues, setInputValues] = useState({
        input1: '',
        input2: '',
        input3: ''
    });

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setInputValues(prevState => ({ ...prevState, [name]: value }));
    }

    const handleClick = () => {
        alert(`Name: ${inputValues.input1}, Email-address: ${inputValues.input2}, Message: ${inputValues.input3}`);
        setIsOpen(false)
    }

    // FORM SUBMIT
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // handle form submission
    };

    const isDisabled = Object.values(inputValues).some((value) => value === '');


    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    return (

        <div className="rounded-md max-w-sm w-full mx-auto">
            <div className="flex-1 space-y-4 py-1">
                <div className="sm:block">
                    <div className="space-y-1 px-5 pt-2 pb-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-purple' : 'text-black hover:bg-gray-700 hover:text-purple',
                                    'block py-2 rounded-md text-base font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                                target={item.target} // Usa target de NavigationItem
                                rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}>
                                {item.name}
                            </Link>
                        ))}
                        {/**/}
                        <div className="mt-4"></div>
                        <button
                            className="bg-navyblue w-full hover:text-white text-white border border-purple font-medium py-2 px-4 rounded"
                            onClick={openModal}>
                            {c('btncontact')}
                        </button>
                        {/*<Contactusform/>*/}
                        <h5>{t('switch')} &#x1F310;</h5>
                        <LocalSwitcher/>
                    </div>
                </div>
            </div>

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
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                                    <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md">
                                        <div className="flex flex-shrink-0 items-center justify-center">
                                            <Link href="/" className='text-2xl sm:text-4xl font-semibold text-black'>
                                                FabriDev Software Solutions
                                            </Link>
                                            <div className='flex justify-end'>
                                                <button type="button"
                                                        onClick={closeModal}
                                                        className="py-3 px-5 mt-2 text-sm font-medium w-50 text-center text-black rounded-lg bg-red hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">X
                                                </button>
                                            </div>
                                        </div>
                                        <p className="mb-8 lg:mb-16 mt-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">{c('modaltxt')}</p>

                                        <form action="https://formsubmit.co/fabridevsoftwaresolutions@gmail.com" method="POST" className="space-y-8">
                                            <div>
                                                <label htmlFor="text"
                                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{c('nombre')}</label>
                                                <input
                                                    id="text"
                                                    name={c('nombre')}
                                                    type="text"
                                                    autoComplete="current-password"
                                                    required
                                                    className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    placeholder={c('placeholderNombre')}
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email"
                                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{c('email')}</label>
                                                <input
                                                    id="email"
                                                    name={c('email')}
                                                    type="email"
                                                    autoComplete="current-password"
                                                    required
                                                    className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    placeholder={c('placeholderCorreo')}
                                                />
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label htmlFor="message"
                                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{c('mensaje')}</label>
                                                <textarea
                                                    id="message"
                                                    name={c('mensaje')}
                                                    className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    placeholder={c('placeholderMensaje')}></textarea>
                                            </div>
                                            <button type="submit"
                                                    className="py-3 px-5 text-sm disabled:opacity-50 font-medium w-full text-center text-white rounded-lg bg-blue focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">{c('btnEnviar')}
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
    );
}

export default Data;
