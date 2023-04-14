import React from 'react'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row g-2">
                    <div className="col-12 col-sm-3">
                        <div className="p-3 h-100 border bg-warning">
                            <h2>
                                <i className="bi bi-box-fill"></i>
                                &nbsp; 31
                            </h2>
                            <h5>Total Products</h5>
                            <Link to='/about'>
                                <h6 className="text-dark">
                                    View All <i className="bi bi-arrow-right"></i>
                                </h6>
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 col-sm-3">
                        <div className="p-3 h-100 border bg-success text-white">
                            <h2>
                                <i className="bi bi-wallet-fill"></i>
                                &nbsp; 54300
                            </h2>
                            <h5>Total Sales (PKR)</h5>
                        </div>
                    </div>
                    <div className="col-12 col-sm-3">
                        <div className="p-3 h-100 border bg-info">
                            <h2>
                                <i className="bi bi-people-fill"></i>
                                &nbsp; 8
                            </h2>
                            <h5>Total Users</h5>
                            <Link to='/about'>
                                <h6 className="text-dark">
                                    View All <i className="bi bi-arrow-right"></i>
                                </h6>
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 col-sm-3">
                        <div className="p-3 h-100 border bg-danger text-white">
                            <h2>
                                <i class="bi bi-list-columns-reverse"></i>
                                &nbsp; 37
                            </h2>
                            <h5>No. of Orders</h5>
                            <Link to='/about'>
                                <h6 className="text-white">
                                    View All <i className="bi bi-arrow-right"></i>
                                </h6>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
