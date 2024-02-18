import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import classes from "./Header.module.css"
import Image from "next/image";
import {useEffect, useState} from "react";
import $ from "jquery";


export default function Header(){
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
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/gallery">Gallery</Link>
                            </li>
                            <li>
                                <Link href="/calculator">Calculator</Link>
                            </li>
                            <li>
                                <Link href="/contacts">Contacts</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    </div>);
}