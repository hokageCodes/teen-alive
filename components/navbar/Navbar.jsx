"use client";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./navbar.css";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { asPath } = useRouter(); // To get the current path

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="header bg-purple">
            <nav className="navbar">
                <Link href="/" className="nav-logo" onClick={closeMenu}>
                    Teen<i> Alive</i> {/* Custom Logo Text */}
                </Link>
                <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
                    <li className="nav-item">
                        <Link href="/" className={`nav-link ${asPath === "/" ? "active" : ""}`} onClick={closeMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about" className={`nav-link ${asPath === "/about" ? "active" : ""}`} onClick={closeMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/what-we-do" className={`nav-link ${asPath === "/what-we-do" ? "active" : ""}`} onClick={closeMenu}>
                            What We Do
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/media" className={`nav-link ${asPath === "/media" ? "active" : ""}`} onClick={closeMenu}>
                            Media
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/contact" className={`nav-link ${asPath === "/contact" ? "active" : ""}`} onClick={closeMenu}>
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item donate-item">
                        <Link href="/donate" className="donate-button" onClick={closeMenu}>
                            Donate
                        </Link>
                    </li>
                </ul>
                <div className="hamburger" onClick={toggleMenu}>
                    {isOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
