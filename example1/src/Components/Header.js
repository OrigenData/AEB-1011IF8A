import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../logo.96aff77c.jpg'

class Header extends Component {

    fechaActual() {
        var today = new Date();
        console.log(today)
        return today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear();
    }

    render() {
        return (
            <div className="bootstrap">
                <div class="p-3 mb-2 bg-success text-white text-center">Desarrollo de Aplicaciones para Dispositivos Móviles</div>
                <img src={logo} alt="logo" class="rounded mx-auto d-block" width="500" style={{ margin: "30px" }} />
                <div class="p-3 mb-2 bg-success text-white text-center">{this.fechaActual()}</div>
            </div>
        );
    }
}

export default Header;