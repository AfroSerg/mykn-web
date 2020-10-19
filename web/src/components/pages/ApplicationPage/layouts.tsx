import * as React from 'react';


interface ApplicationPageLayoutProps {
    children: React.ReactNode,
    step: number,
    totalSteps: string[],
    onBackButtonClick(): void,
}

export function ApplicationPageLayout({children, step, totalSteps, onBackButtonClick}: ApplicationPageLayoutProps){
    return (
        <>
            <header className="pt-4 flex px-4 items-center mb-6 text-lg">
                {step > 0 ?
                    <span onClick={onBackButtonClick} className="text-brand-primary-blue"><i className="fa fa-arrow-left px-3"/></span>
                    :
                    <a href="/" className="text-brand-primary-blue"><i className="fa fa-times mr-2"/></a>
                }
                { totalSteps.map(stepToRender => <span key={stepToRender} className={`mx-2 rounded-full flex justify-center items-center font-semibold ${step === parseInt(stepToRender) ? "text-white w-12 h-12 bg-brand-primary-blue" : "w-8 h-8 border border-brand-primary-blue text-brand-primary-blue"}`}>{parseInt(stepToRender) + 1}</span>)}
            </header>
            <form method="post" action="/apply" className="mb-6">
                {children}
            </form>
        </>
    )
}