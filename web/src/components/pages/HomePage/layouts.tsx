import * as React from 'react';
import {Header, Footer} from "./organisms";

export function HomePageLayout({children}){
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const toggleIsOpen = () => setIsMenuOpen(prevState => (!prevState))
    const closeMenu = () => setIsMenuOpen(false)

    return (
        <>
            <Header/>
            <main className="relative top-16" onClick={() => closeMenu()}>
                {children}
            </main>
            <Footer/>
        </>
    )
}