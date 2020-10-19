import * as React from 'react';
// data
import {coverPackages} from '../../../data';
// components
import {CoverOptionCard} from "../../shared/molecules";
import {Carousel} from "../../shared/organisms";
import {ContactForm} from "./organisms";



export function HomePage({}) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const toggleIsOpen = () => setIsMenuOpen(prevState => (!prevState))
    const closeMenu = () => setIsMenuOpen(false)
    return (
        <>
            <header className="fixed z-30 w-full bg-white">
                <div className="bg-white flex justify-start items-center px-4 py-1">
                    <svg onClick={() => toggleIsOpen()} className="fill-brand-primary-blue w-4 h-4"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        {isMenuOpen ?
                            <path fillRule="evenodd"
                                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                            :
                            <path fillRule="evenodd"
                                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                        }
                    </svg>
                    <a className="w-16 flex items-center font-bold text-2xl text-brand-primary-blue uppercase"
                       href="#top">
                        <img className="w-full h-auto" src='/static/images/icon_transparent.png' alt="MYKN Logo"/>
                        <span className="flex items-start">MYKN <span
                            className="inline-block ml-1 font-semibold text-sm text-brand-secondary-blue">Life</span></span>
                    </a>
                </div>
                <div className={`px-4 pb-4 shadow-md ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <a className="px-2 py-1 block text-brand-primary-blue font-semibold rounded hover:bg-brand-secondary-blue hover:text-white"
                       href="#about-us">About us</a>
                    <a className="mt-1 px-2 py-1 block text-brand-primary-blue font-semibold rounded hover:bg-brand-secondary-blue hover:text-white"
                       href="#contact-us">Get in Touch</a>
                    <a className="mt-1 px-2 py-1 block text-brand-primary-blue font-semibold rounded hover:bg-brand-secondary-blue hover:text-white" href="/apply">Apply</a>
                </div>
            </header>
            <main className="relative top-16" onClick={() => closeMenu()}>
                <section className="relative h-128 w-full bg-black">
                    <img className="h-full object-cover bg-gray-900 bg-opacity-75" src="/static/images/bg-banner.jpg"
                         style={{filter: "opacity(35%)"}} alt=""/>
                    <div className="absolute top-16 z-20 px-4 text-white">
                        <h2 className="font-bold text-4xl text-white uppercase mb-4">Your future, <br/> today</h2>
                        <p className="font-medium tracking-wide leading-2 mb-6">Cover yourself and up to 12 family
                            members. Our
                            policies pay out your valid claims within 48 hours.</p>
                        <div className="flex items-center">
                            <a
                                className="px-3 py-2 tracking-wide bg-brand-primary-blue mr-4 uppercase text-sm font-medium rounded"
                                href="#contact-us">Get
                                in Touch
                            </a>
                            <a
                                className="px-3 py-2 tracking-wide bg-brand-secondary-blue uppercase text-sm font-medium rounded"
                                href="/apply">Apply
                                for Cover
                            </a>
                        </div>
                    </div>
                </section>
                <section id="about-us" className="py-4 w-full bg-white">
                    <h2 className="px-4 font-bold text-2xl text-brand-primary-blue tracking-wide mb-4">About Us</h2>
                    <h4 className="px-4 font-semibold text-brand-secondary-blue tracking-wide uppercase">Vision</h4>
                    <p className="px-4 mb-6 text-gray-800 tracking-wide leading-2">
                        Our vision is to be the most preferred funeral insurer offering our clients, comprehensive cover that brings peace of mind.
                    </p>
                    <h4 className="px-4 font-semibold text-brand-secondary-blue tracking-wide uppercase">Mission</h4>
                    <p className="px-4 mb-6 text-gray-800 tracking-wide leading-2">
                        Our mission is to provide a personal, cherished and exclusive funeral experience with the most efficient means possible. Our aim is to give our clients a time to celebrate a life that has been well lived, knowing that all has been taken care of.
                    </p>

                    <h4 className="px-4 font-semibold text-brand-secondary-blue tracking-wide uppercase">Our Values</h4>
                    <ul>
                        <li>Transparency</li>
                    </ul>
                    <p className="px-4 mb-6 text-gray-800 tracking-wide leading-2">
                        Our mission is to provide a personal, cherished and exclusive funeral experience with the most efficient means possible. Our aim is to give our clients a time to celebrate a life that has been well lived, knowing that all has been taken care of.
                    </p>

                    <div>
                        <h1 className="px-4 font-semibold text-brand-secondary-blue tracking-wide">Our
                            Policies</h1>
                        <Carousel className="mx-4">
                            {coverPackages.map((coverPackage, key) =>
                                <CoverOptionCard
                                    key={key}
                                    className="mr-4 my-4 w-screen-75"
                                    onClick={() => {}}
                                    coverPackage={coverPackage}/>)
                            }
                        </Carousel>
                    </div>
                </section>
                <section id="contact-us" className="py-4 w-full bg-brand-primary-blue">
                    <h2 className="px-4 font-bold text-2xl text-white tracking-wide uppercase">Get In Touch</h2>
                    <p className="px-4 text-white text-sm tracking-wide mb-4">Have a query? Enter your details below and
                        we'll have a representative attend to you.</p>
                    <ContactForm/>
                </section>
            </main>
            <footer className="relative top-16 py-4 w-full bg-black text-white">
                <div className="w-16 flex items-center font-bold text-2xl text-white uppercase">
                    <img className="w-full h-auto" src="/static/images/icon_transparent.png" alt="MYKN Logo"/>
                    <span className="flex items-start">MYKN <span
                        className="inline-block ml-1 font-semibold text-sm text-brand-secondary-blue">Life</span></span>
                </div>
                <h3 className="px-4 text-lg font-semibold mb-2">Find us:</h3>
                <ul className="px-4 mb-4">
                    <li className="mb-2 leading-6 tracking-wide"><i className=""/>
                        12 Meander Avenue, <br/>
                        Boardwalk Meander,<br/>
                        Faerie Glen, <br/>
                    </li>
                    <li className="mb-2 tracking-wide"><i className=""/>+27 76 5624150 / +27 83 251 7183</li>
                    <li className="mb-2 tracking-wide"><i className=""/>info@mykn.co.za</li>
                </ul>
                <h3 className="px-4 text-lg font-semibold mb-2">Social Media:</h3>
                <ul className="px-4 mb-4">
                    <li><a href="https://facebook.com/myknlife"><i className="fa fa-facebook text-white"/> facebook</a>
                    </li>
                    <li><a href="https://instagram.com/myknlife"><i
                        className="fa fa-instagram text-white"/> instagram</a></li>
                    <li><a href="https://twitter.com/myknlife"><i className="fa fa-twitter text-white"/> twitter</a>
                    </li>
                </ul>
                <hr className="mb-2"/>
                <span className="block tracking-wide text-xs text-center leading-2">© {new Date().getFullYear()} MYKN Life (PTY) Ltd Juristic Representative. 2019/329894/07</span>
            </footer>
        </>
    )
}