"use client"
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Contactusform from './Contactus';
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

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const t = useTranslations('Navigation');

    const navigation: NavigationItem[] = [
        { name: t('aboutus'), href: '#aboutus-section', current: false },
        { name: t('services'), href: '#services-section', current: false },
        { name: t('faq'), href: '#faq-section', current: false },
        { name: t('blog'), href: '#blog-section', current: false },
        { name: t('testimonials'), href: '#testimonial-section', current: false },
        { name: t('store'), href: 'https://portafolio-fabridev.vercel.app/', current: false, target: '_blank' },
    ]

    return (
        <Disclosure as="nav" className="navbar">
            <>
                <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8">
                    <div className="relative flex h-12 sm:h-20 items-center">
                        <div className="flex flex-1 items-center sm:justify-between">

                            <div className="flex flex-shrink-0 items-center border-right">
                                <Link href="/" className='text-2xl sm:text-4xl font-semibold text-black'>
                                    Fabridev
                                </Link>
                            </div>

                            <div className="hidden lg:flex items-center border-right gap-4">
                                <div className="flex justify-end space-x-4">
                                    {navigation.map((item) => (
                                        <Link key={item.name} href={item.href} className={classNames(item.current ? 'bg-gray-900' : 'navlinks hover:text-black', 'px-3 py-4 rounded-md text-lg font-normal')} aria-current={item.href ? 'page' : undefined}>
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div>
                                    <h6>{t('switch')} &#x1F310;</h6>
                                    <LocalSwitcher/>
                                </div>
                            </div>
                            <Contactusform />
                        </div>

                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
