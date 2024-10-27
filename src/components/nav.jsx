// nav.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart } from 'react-icons/fa';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">H&H Accessories</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Acceuil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Articles</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">A propos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contactez nous</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-secondary me-2"><FaShoppingCart /></button>
                        <button className="btn btn-dark" type="submit">0</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
