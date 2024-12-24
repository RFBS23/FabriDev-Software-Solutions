import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: 'FabriDev Software Solutions',
  description: 'Landing page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
