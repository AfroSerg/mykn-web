import * as React from 'react';
import {CoverPackage} from "../../data";

interface CoverOptionCardProps{
    className?: string,
    coverPackage: any,
    onClick(): void
}

export function CoverOptionCard({onClick, coverPackage, className = ""}: CoverOptionCardProps) {
    const {id, name, premium, benefits} : CoverPackage = coverPackage;
    return (
        <div className={`p-4 bg-white rounded-md shadow-md ${className}`} onClick={onClick}>
            <img className="w-full h-24 object-center object-cover mb-2" src={`/static/images/covers/${id}.jpg`} alt=""/>
            <h4 className="font-semibold text-brand-primary-blue tracking-wide mb-2">{name}</h4>
            <span className="block uppercase text-sm font-semibold text-brand-secondary-blue mb-2">{premium}</span>
            <ul>
                {benefits.map((benefit, key) => <li className="text-xs tracking-wide leading-5" key={key}>{benefit}</li>)}
            </ul>
        </div>
    )
}

interface InputGroupProps {
    className?: string,
    placeholder: string,
    name: string,
    value: string,
    onChange(e: React.ChangeEvent<HTMLInputElement>): void,
    error: boolean,
    errMsg: string
}

export function InputGroup({className = "", placeholder, name, value, onChange, error, errMsg}: InputGroupProps){
    return(
        <div className={` ${className}`}>
            <input
                className="w-full border border-gray-300 bg-white px-4 py-3 placeholder-gray-500 rounded"
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
            {error && <div className="">{errMsg}</div>}
        </div>
    )
}


interface PageButtonProps{
    className?: string,
    onClick(): void
    children: React.ReactNode,
    type?: 'submit' | 'reset' | 'button'
}

export function PageButton({children, className = "", onClick, type = 'button'}: PageButtonProps) {
    return <div className="w-full px-4">
        <button
            type={type}
            className={`text-center text-white text-lg uppercase tracking-wider bg-brand-secondary-blue w-full rounded-md py-3 ${className}`}
            onClick={onClick}>{children}</button>
    </div>

}