import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';


function Footer() {
    return (
        <div className="bootstrap">
            <footer class="bg-success text-white text-center" style={{ position: "fixed", bottom: "0", width: "100%" }} >
                Copyright © Todos los derechos reservados.
            </footer>
        </div>

    );
}

export default Footer;