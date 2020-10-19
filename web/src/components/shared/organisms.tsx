import * as React from 'react';

interface CarouselProps {
    className?: string,
    children: React.ReactNode
}
export function Carousel({className = "", children}: CarouselProps) {
    return (
        <div className="w-screen-100 h-auto overflow-x-scroll">
            <div className={`w-auto flex flex-no-wrap ${className}`}>
                {children}
            </div>
        </div>
    )
}