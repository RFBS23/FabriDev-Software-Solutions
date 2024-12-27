import Image from "next/image";
import Link from "next/link";
// MIDDLE LINKS DATA
interface ProductType {
    id: number;
    section: string;
    link: string[];
}

const products: ProductType[] = [
    {
        id: 1,
        section: "",
        link: ['', '', '', ''],
    },
    {
        id: 2,
        section: "Menu",
        link: ['Home', 'Popular', 'About', 'Contact'],
    },
    {
        id: 3,
        section: "Category",
        link: ['Design', 'Mockup', 'View all', 'Log In']
    },
    {
        id: 4,
        section: "Pages",
        link: ['404', 'Instructions', 'License']
    }
]

const footer = () => {

    return (
        <div className="bg-black -mt-40" id="first-section">
            <div className="mx-auto max-w-2xl pt-48 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

                    {/* COLUMN-1 */}

                    <div className='col-span-4'>
                        <h3 className='text-white text-4xl font-semibold leading-9 mb-4 lg:mb-20'> FabriDev Software Solutions</h3>
                        <div className='flex gap-4'>
                            <div className='footer-icons' style={{background: 'white'}}>
                                <Link href="https://www.facebook.com/share/18H3BUvgA2/?mibextid=qi2Omg"
                                      target={'_blank'}><Image src={'/images/footer/facebook-color.svg'} alt="facebook" width={20} height={20}/></Link>
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
                            <h3 className='text-center md:text-start text-offwhite text-lg'>&copy;{new Date().getFullYear()} - Todos los derechos reservados por <Link href="https://portafolio-fabridev.vercel.app/" target="_blank"> FabriDev.com</Link></h3>
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <Link href="/">
                                <h3 className="text-offwhite pr-6">politicas</h3>
                            </Link>
                            <Link href="/">
                                <h3 className="text-offwhite pl-6 border-solid border-l border-footer">termins</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default footer;
