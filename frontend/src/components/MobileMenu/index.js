import React, { Component } from 'react'
import { Collapse, CardBody, Card } from 'reactstrap';
import { Link } from 'react-router-dom'
import './style.css';

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
        // submenu: [
        //     {
        //         id: 11,
        //         title: 'Home style 1',
        //         link: '/home'
        //     },
        //     {
        //         id: 12,
        //         title: 'Home style 2',
        //         link: '/home2'
        //     },
        // ]
    },

    {
        id: 2,
        title: 'About',
        link: '/about',
    },
    {
        id: 3,
        title: 'Shop',
        link: '/shop',
    },

    // {
    //     id: 4,
    //     title: 'Pages',
    //     link: '/',
    //     submenu: [
    //         {
    //             id: 41,
    //             title: 'Cart',
    //             link: '/cart'
    //         },
    //         {
    //             id: 45,
    //             title: 'Wishlist',
    //             link: '/wishlist'
    //         },
    //         {
    //             id: 46,
    //             title: 'Checkout',
    //             link: '/checkout'
    //         },
    
    //         {
    //             id: 49,
    //             title: 'Error 404',
    //             link: '/404'
    //         },
    //         {
    //             id: 491,
    //             title: 'Login',
    //             link: '/login'
    //         },
    //         {
    //             id: 492,
    //             title: 'Register',
    //             link: '/register'
    //         },
            
    //     ]
    // },
    // {
    //     id: 6,
    //     title: 'Product',
    //     link: '/',
    //     submenu: [
    //         {
    //             id: 41,
    //             title: 'Product',
    //             link: '/shop'
    //         },
    //         {
    //             id: 45,
    //             title: 'Product Single',
    //             link: '/product-single/1'
    //         },
            
    //     ]
    // },
    // {
    //     id: 7,
    //     title: 'Project',
    //     link: '/',
    //     submenu: [
    //         {
    //             id: 71,
    //             title: 'Project',
    //             link: '/project'
    //         },
    //         {
    //             id: 75,
    //             title: 'Project Single',
    //             link: '/project-single'
    //         },
            
    //     ]
    // },

    // {
    //     id: 5,
    //     title: 'Blog',
    //     link: '/blog',
    //     submenu: [
    //         {
    //             id: 51,
    //             title: 'Blog',
    //             link: '/blog'
    //         },
    //         {
    //             id: 52,
    //             title: 'Blog Left sidebar',
    //             link: '/blog-left-sidebar'
    //         },
    //         {
    //             id: 53,
    //             title: 'Blog full width',
    //             link: '/blog-fullwidth'
    //         },
    //         {
    //             id: 54,
    //             title: 'Blog single',
    //             link: '/blog-single/1'
    //         },
    //         {
    //             id: 55,
    //             title: 'Blog single Left sidebar',
    //             link: '/blog-single-left-sidebar/1'
    //         },
    //         {
    //             id: 56,
    //             title: 'Blog single Left sidebar',
    //             link: '/blog-single-fullwidth/1'
    //         },
    //     ]
    // },
    {
        id: 88,
        title: 'Contact',
        link: '/contact',
    }
    
    
]


export default class MobileMenu extends Component {

    state = {
        isMenuShow: false,
        isOpen: 0,
    }

    menuHandler = () => {
        this.setState({
            isMenuShow: !this.state.isMenuShow
        })
    }

    setIsOpen = id => () => {
        this.setState({
            isOpen: id === this.state.isOpen ? 0 : id
        })
    }

    render() {

        const { isMenuShow, isOpen } = this.state;

        return (
            <div>
                <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                    <div className="menu-close">
                         <div className="clox" onClick={this.menuHandler}><i className="ti-close"></i></div>
                    </div>
                    <ul className="responsivemenu">
                        {menus.map(item => {
                            return (
                                <li key={item.id}>
                                    {item.submenu ? <p onClick={this.setIsOpen(item.id)}>
                                        {item.title}
                                        {item.submenu ? <i className="fa fa-angle-right" aria-hidden="true"></i> : ''}
                                    </p> : <Link to={item.link}>{item.title}</Link>}
                                    {item.submenu ?
                                    <Collapse isOpen={item.id === isOpen}>
                                        <Card>
                                            <CardBody>
                                                <ul>
                                                    {item.submenu.map(submenu => (
                                                        <li key={submenu.id}><Link className="active" to={submenu.link}>{submenu.title}</Link></li>
                                                    ))}
                                                </ul>
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                    : ''}
                                </li>
                            )
                        })}
                    </ul>

                </div>

                <div className="showmenu" onClick={this.menuHandler}>
                    <button type="button" className="navbar-toggler open-btn">
                            <span className="icon-bar first-angle"></span>
                            <span className="icon-bar middle-angle"></span>
                            <span className="icon-bar last-angle"></span>
                    </button>
                </div>
            </div>
        )
    }
}
