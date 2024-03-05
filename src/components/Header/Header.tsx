import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import classes from "./Header.module.css"
import Image from "next/image";
import {useEffect, useState} from "react";
import $ from "jquery";
import {useRouter} from "next/router";


export default function Header(){
    const router =  useRouter();

    const isActiveLink = (href:string) => {
        return router.pathname === href;
    }

    useEffect(()=>{

        const objSearch = $('.search-wrapper'),
            objMenu = $('.floating-menu'),
            objMenuLink = $('.floating-menu a'),
            $menu = $('.open-menu'),
            $close = $('.close-menu-wrapper')


            // Mobile menu open/close

            $menu.on('click', function () {
            objMenu.addClass('expanded');
        });

        // Floating menu hyperlink
        if ($('nav').hasClass('navbar-single-page')) {
            objMenuLink.on('click', function () {
                objMenu.removeClass('expanded');
            });
        }

        // Close menu (mobile)

        $close.on('click', function () {
            $('nav').find('.expanded').removeClass('expanded');
            $('nav').find('.navbar-dropdown').slideUp();
        });

    },[]);

    return (<div>
        <nav className="navbar-single-page">
            <div className="container-fluid">

                <div className="navigation navigation-main">
                    <Link href="#"  className={`open-menu ${classes.iconOpen}`}>
                        {/*<i className="icon icon-menu"></i>*/}
                        <FontAwesomeIcon className="icon " icon={faBars} />
                    </Link>

                    <div className="floating-menu flex align-items-center p-2">

                        <div className="close-menu-wrapper">
                            <span className={`close-menu ${classes.iconOpen}`}>
                                {/*<i className="icon icon-cross"></i>*/}
                                <FontAwesomeIcon className="icon " icon={faXmark} />
                            </span>
                        </div>
                        <Link href="/" className="logo-icon">
                            <Image src="/static/images/divano-logo.svg" alt="Alternate Text"
                                   width="150" height="34"/>
                        </Link>
                        <ul className="ml-3">
                            <li>
                                <Link href="/" className={isActiveLink('/') ? classes.active : ''}>Home</Link>
                            </li>
                            <li>
                                <Link href="/gallery" className={isActiveLink('/gallery') ? classes.active : ''}>Gallery</Link>
                            </li>
                            <li>
                                <Link href="/calculator" className={isActiveLink('/calculator') ? classes.active : ''}>Calculator</Link>
                            </li>
                            <li>
                                <Link href="/contacts" className={isActiveLink('/contacts') ? classes.active : ''}>Contacts</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    </div>);
}