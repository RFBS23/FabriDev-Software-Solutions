// /pages/404.jsx

import { useRouter } from 'next/router';

const NotFound = () => {
    const { locale } = useRouter();

    const messages = {
        en: {
            title: '404',
            subtitle: 'The page you are looking for doesn\'t exist.',
            buttonText: 'Back to previous page',
        },
        es: {
            title: '404',
            subtitle: 'La página que buscas no existe.',
            buttonText: 'Volver a la página anterior',
        },
    };

    const currentMessages = messages[locale] || messages.en;

    return (
        <div className="container">
            <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
                <h1 className="display-1">{currentMessages.title}</h1>
                <h2 className="text-muted">{currentMessages.subtitle}</h2>
                <a type="button" className="btn btn-outline-secondary" onClick={() => window.history.back()}>
                    {currentMessages.buttonText}
                </a>
                <img src="/images/logo/not-found.svg" className="img-fluid py-5" alt="Page Not Found" />
                <div className="credits">
                    Designed by <a href="https://portafolio-fabridev.vercel.app/" target="_blank">Fabridev</a>
                </div>
            </section>
        </div>
    );
};

export default NotFound;
