"use client";

import { usePathname } from "next/navigation";

export const Footer = () => {
    const pathName = usePathname();
    
    if(pathName === "/sign-up" || pathName === "/login") {
        return null
    }

    return (
        <p>Codevolution</p>
    )
}