import React from 'react'
import './style.css'

const CounterSection = (props) => {
    return(
        <div className={`tp-counter-area ${props.countclass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-counter-grids">
                            <div className="grid">
                                <div>
                                    <h2><span className="odometer" data-count="6200">6200</span>+</h2>
                                </div>
                                <p>Donation</p>
                            </div>
                            <div className="grid">
                                <div>
                                    <h2><span className="odometer" data-count="80">80</span>+</h2>
                                </div>
                                <p>Fund Raised</p>
                            </div>
                            <div className="grid">
                                <div>
                                    <h2><span className="odometer" data-count="245">245</span>+</h2>
                                </div>
                                <p>Volunteers</p>
                            </div>
                            <div className="grid">
                                <div>
                                    <h2><span className="odometer" data-count="605">605</span>+</h2>
                                </div>
                                <p>Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CounterSection;