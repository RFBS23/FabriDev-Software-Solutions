'use client';
import './not-found.css';
import './bootstrap/bootstrap.css';
import './bootstrap/bootstrap.bundle.min.js';


export default function NotFound() {
    return (
        <html>
        <head>
            <link href="https://fonts.gstatic.com" rel="preconnect"/>
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
                rel="stylesheet"/>
        </head>


        <body style={{userSelect: "none", background: "#f6f9ff"}}>
        <main>
            <div className="container">

                <section
                    className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
                    <h1>404</h1>
                    <h2 className="text-center">The page you are looking for doesn t exist.</h2>
                    <h2 className="text-center">La página que estás buscando no existe.</h2>
                    <a className="btn btn-outline-danger" onClick={() => window.history.back()}>Back to previous page
                        <hr/>
                        Volver a la página anterior
                    </a>
                    <img src="/images/logo/not-found.svg" className="img-fluid py-5" alt="Page Not Found"/>
                    <div className="credits">
                        Designed by <a className="text-decoration-none" href="https://portafolio-fabridev.vercel.app/"
                                       target="_blank">FabriDev</a>
                    </div>
                </section>

            </div>
        </main>
        {/*
        <h1 className="hero-title" id="backfont">404</h1>
        <a type="button" className="btn btn-success" onClick={() => window.history.back()}
           style={{position: 'absolute', top: '25px', left: '50%', transform: 'translateX(-50%)',}}>
            Back to previous page
            <hr/>
            Volver a la página anterior
        </a>*/}
        </body>
        </html>
    );
}
