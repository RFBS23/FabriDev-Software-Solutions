'use client';
import './not-found.css';
import './bootstrap/bootstrap.min.css';
export default function NotFound() {
    return (
        <html>
        <body>
        <h1 className="hero-title" id="backfont">404</h1>
        <a type="button" className="btn btn-success" onClick={() => window.history.back()} style={{ position: 'absolute', top: '25px', left: '50%', transform: 'translateX(-50%)', }} >
            Back to previous page
            <hr/>
            Volver a la página anterior
        </a>
        </body>
        </html>
    );
}
