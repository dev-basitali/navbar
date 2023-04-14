import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <nav className="my-navbar navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img className='my-img' src="/images/icon-sm.png" alt="logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Hi,Basit Ali
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/profile">Action</Link></li>
                                    <li><Link className="dropdown-item" to="/profile">Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/profile">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Admin
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/admin">Admin</Link></li>
                                    <li><Link className="dropdown-item" to="/admin">Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/admin">Something else here</Link></li>
                                </ul>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="my-input border-0 p-2 " type="search" placeholder="What are you looking for?" aria-label="Search" />
                            <button className="my-btnn btn pe-2" type="submit"><i className="bi bi-search fw-bold"></i></button>
                            <i className="bi bi-cart4 ms-2 text-light fs-4" />

                            <span className="my-badge badge badge-light bg-warning mt-2 rounded-pill">66</span>
                        </form>

                    </div>
                </div>
            </nav>


        </>
    )
}
