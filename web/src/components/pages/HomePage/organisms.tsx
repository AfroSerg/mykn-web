import * as React from 'react';

import {InputGroup} from "../../shared/molecules";

const initialContactFormFieldsState = [
    {
        value: "",
        type: "text",
        placeholder: "Full Name",
        name: "name",
        error: false,
        errMsg: ""
    },
    {
        value: "",
        type: "text",
        placeholder: "Email",
        name: "email",
        error: false,
        errMsg: ""
    },
    {
        value: "",
        type: "text",
        placeholder: "Cell",
        name: "subject",
        error: false,
        errMsg: ""
    }
]

export function ContactForm({action = "contact.php", method = "post"}){
    const [formFields, updateFormFields] = React.useState(initialContactFormFieldsState)

    const onChange = (name, value) => updateFormFields(
        (prevState) => {
            return prevState.map(field => {
                if(field.name === name){
                    return {
                        ...field,
                        value
                    }
                }else {
                    return field
                }

            })
        }
    )

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    return <form onSubmit={handleFormSubmit} className="w-full px-4">
        {
            formFields.length > 0 && formFields.map(({value, placeholder, name, error, errMsg}, key) => (
                <InputGroup
                    key={key}
                    className="w-full my-4"
                    placeholder={placeholder}
                    value={value}
                    name={name}
                    onChange={(e) => onChange(name, e.target.value)}
                    error={error}
                    errMsg={errMsg}
                />))
        }
        <button className="w-full py-4 text-center bg-brand-secondary-blue rounded text-white uppercase my-2" type="submit">send</button>
    </form>
}

export function Header(){
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const toggleIsOpen = () => setIsMenuOpen(prevState => (!prevState))
    return (<header className="fixed z-30 w-full bg-white">
        <div className="bg-white flex justify-start items-center px-4 py-1">
            <i className="fa fa-bars"/>
            <svg onClick={() => toggleIsOpen()} className="fill-brand-primary-blue w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                {  isMenuOpen ?
                    <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                    :
                    <path  fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                }
            </svg>
            <a className="w-16 flex items-center font-bold text-2xl text-brand-primary-blue uppercase" href="#top">
                <img className="w-full h-auto" src="/static/images/icon_transparent.png" alt="MYKN Logo"/>
                <span className="flex items-start">MYKN <span className="inline-block ml-1 font-semibold text-sm text-brand-secondary-blue">Life</span></span>
            </a>
        </div>
        <div className={`px-4 pb-4 shadow-md ${isMenuOpen ? 'block' : 'hidden'}`}>
            <a className="px-2 py-1 block text-brand-primary-blue font-semibold rounded hover:bg-brand-secondary-blue hover:text-white" href="#policies">Policies</a>
            <a className="mt-1 px-2 py-1 block text-brand-primary-blue font-semibold rounded hover:bg-brand-secondary-blue hover:text-white" href="#contact-us">Get in Touch</a>
            <a className="mt-1 px-2 py-1 block text-brand-primary-blue font-semibold rounded hover:bg-brand-secondary-blue hover:text-white" href="/apply">Apply</a>
        </div>
    </header>)
}

export function Footer(){
    return (
        <footer className="relative top-16 py-4 w-full bg-black text-white">
            <div className="w-16 flex items-center font-bold text-2xl text-white uppercase">
                <img className="w-full h-auto" src="" alt="MYKN Logo"/>
                <span className="flex items-start">MYKN <span className="inline-block ml-1 font-semibold text-sm text-brand-secondary-blue">Life</span></span>
            </div>
            <h3 className="px-4 text-lg font-semibold mb-2">Find us:</h3>
            <ul className="px-4 mb-4">
                <li className="mb-2 leading-6 tracking-wide"><i className=""/>Suite 8, Q-Kon Building, 8 Pieter Str, <br/> Highveld Techno Park,<br/> Centurion</li>
                <li className="mb-2 tracking-wide"><i className=""/>012 665 1469</li>
                <li className="mb-2 tracking-wide"><i className=""/>info@gyknlife.co.za</li>
            </ul>
            <h3 className="px-4 text-lg font-semibold mb-2">Social Media:</h3>
            <ul className="px-4 mb-4">
                <li><a href="https://facebook.com/myknlife"><i className="fa fa-facebook text-white"/> facebook</a></li>
                <li><a href="https://instagram.com/myknlife"><i className="fa fa-instagram text-white"/> instagram</a></li>
                <li><a href="https://twitter.com/myknlife"><i className="fa fa-twitter text-white"/> twitter</a> </li>
            </ul>
            <hr className="mb-2"/>
            <span className="block tracking-wide text-xs text-center leading-2">© {new Date().getFullYear()} MYKN Life (PTY) Ltd Juristic Representative. 2019/329894/07</span>
        </footer>
    )
}