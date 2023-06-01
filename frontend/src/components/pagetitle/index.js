import React from 'react'
import { Link } from 'react-router-dom'

const PageTitle = (props) => {
    return(
        <div className="tp-breadcumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-breadcumb-wrap">
                            <h2>{props.pageTitle}</h2>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><span>{props.pagesub}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageTitle;