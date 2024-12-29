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
                        <Contactusform/>
                        <h5>{t('switch')} &#x1F310;</h5>
                        {/**/}<LocalSwitcher/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;
