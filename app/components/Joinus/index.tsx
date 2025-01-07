import {useTranslations} from "next-intl";

const Join = () => {
    const t = useTranslations('Joinus');
    return (
        <div className="bg-joinus my-32">
            <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8'>

                <div className="text-center">
                    <h3 className="text-blue text-lg font-normal tracking-widest">{t('titulo')}</h3>
                    <h2 className="text-4xl sm:text-6xl font-bold my-6 leading-10"> {t('subtitulo')}<br/>{t('subtitulo2')}</h2>
                    <p className="text-lightblack text-base font-normal"></p>
                </div>

                <div className="mx-auto max-w-4xl pt-5">
                    <div className="sm:flex items-center mx-5 p-5 sm:p-0 rounded-xl justify-between bg-lightgrey sm:rounded-full">
                        <div>
                            <h3 className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:rounded-full bg-lightgrey pl-1 focus:outline-none bg-emailbg focus:text-black text-center">www.youtube.com/@FabriDev</h3>
                        </div>
                        <div className="sm:mr-3">
                            <button className="joinButton w-full sm:w-0 text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-blue hover:bg-btnblue">
                                <a href="https://youtube.com/@fabridev?si=8P9kIJy4rDxrFReO" target="_blank">{t('boton')}</a>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Join;
