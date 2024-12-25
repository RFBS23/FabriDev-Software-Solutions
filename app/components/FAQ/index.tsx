"use client"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const FAQ = () => {
    return (
        <div id="faq-section" className='mx-auto max-w-7xl py-24 lg:px-8 bg-faqblue rounded-2xl my-16 faq-bg'>
            <h3 className='text-xl font-normal text-white text-center mb-6'>Preguntas Frecuentes</h3>
            <h2 className='text-4xl lg:text-6xl font-semibold text-center text-white'>Preguntas mas <br /> Frecuentes.</h2>
            <div className="w-full px-4 pt-16">
                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure>
                        {({open}) => (
                            <>
                                <Disclosure.Button
                                    className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>¿Qué servicios ofrece FabriDev?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel
                                    className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    Ofrecemos desarrollo de software personalizado, creación de aplicaciones web y
                                    móviles, diseño de prototipos UX y soluciones tecnológicas adaptadas a tus
                                    necesidades.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({open}) => (
                            <>
                                <Disclosure.Button
                                    className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>¿Cómo puedo contratar sus servicios?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel
                                    className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    Puedes contactarnos a través de nuestro formulario en la sección "Contáctanos" o
                                    enviarnos un correo directamente a "fabridevsoftwaresolutions@gmail.com". Estaremos
                                    encantados de discutir tus ideas.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({open}) => (
                            <>
                                <Disclosure.Button
                                    className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>¿Cuánto tiempo toma desarrollar un proyecto?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel
                                    className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    El tiempo depende de la complejidad y los requisitos del proyecto. Podemos darte una
                                    estimación una vez analicemos tus necesidades.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({open}) => (
                            <>
                                <Disclosure.Button
                                    className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>¿Qué tecnologías utilizan en sus desarrollos?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel
                                    className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    Trabajamos con las tecnologías más modernas, como C-sharp, React, Asp.net, Android entre otros y bases de datos como MySQL o SQL Server. Siempre elegimos las herramientas más adecuadas para cada proyecto.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({open}) => (
                            <>
                                <Disclosure.Button
                                    className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>¿Proporcionan mantenimiento después del desarrollo?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel
                                    className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    Sí, ofrecemos planes de mantenimiento para asegurarnos de que tu software funcione perfectamente y se mantenga actualizado.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({open}) => (
                            <>
                                <Disclosure.Button
                                    className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>¿Puedo realizar cambios en el diseño durante el desarrollo?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel
                                    className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    Claro, ofrecemos revisiones en puntos clave del proyecto. Trabajamos contigo para asegurarnos de que el resultado final cumpla con tus expectativas.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({open}) => (
                            <>
                                <Disclosure.Button
                                    className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>¿Qué diferencia a FabriDev de otras empresas de desarrollo?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel
                                    className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    Nuestra creatividad, enfoque en la experiencia del usuario, y soluciones personalizadas nos destacan. Nos dedicamos a convertir tus ideas en productos innovadores.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6">
                    <Disclosure as="div" className="mt-2">
                        {({open}) => (
                            <>
                                <Disclosure.Button
                                    className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>¿Tienen garantías de satisfacción?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel
                                    className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    Sí, nos aseguramos de que el producto final cumpla con tus expectativas. Ofrecemos revisiones y ajustes según sea necesario.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

            </div>
        </div>
    )
}

export default FAQ;