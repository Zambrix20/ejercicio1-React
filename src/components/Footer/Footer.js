import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-column">
                        <h2>Contacto</h2>
                        <p>Dirección: 123 Calle Principal</p>
                        <p>Teléfono: (123) 456-7890</p>
                        <p>Email: info@example.com</p>
                    </div>
                    <div className="footer-column">
                        <h2>Enlaces</h2>
                        <div className='links'>
                            <Link href="#">Inicio</Link>
                            <Link href="#">Acerca de</Link>
                            <Link href="#">Servicios</Link>
                            <Link href="#">Contacto</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
