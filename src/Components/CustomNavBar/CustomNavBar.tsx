import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextForProduct } from '../../App'

export const CustomNavBar = () => {
   const { cards } =  useContext(ContextForProduct)
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a href="/" className="navbar-brand">DocDoc</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#custom_nav_bar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="custom_nav_bar" className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 p-2">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/product">Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/logout">Logout</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link position-relative" to="/card">
                                Card
                                <span className="position-absolute top-0 start-100 translate-middle badge round-pill bg-danger">
                                    { cards.length?cards.length:'' }
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
