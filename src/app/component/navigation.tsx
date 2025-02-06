"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
    const pathName = usePathname();
    
    if(pathName === "/sign-up" || pathName === "/login") {
        return null
    }

    return (
        <nav className=" sticky top-0 shadow-md z-10 p-4 rounded-full ">
            <Link 
                href={"/"} 
                className={pathName === "/" ? "font-bold mr-4" : "text-blue-500 mr-4"}
            >
                Home
            </Link>
            <Link 
                href={"/aboutUs"} 
                className={pathName === "/aboutUs" ? "font-bold mr-4" : "text-blue-500 mr-4"}
            >
                About Us
            </Link>
            <Link 
                href={"/products/1"}  
                className={pathName.startsWith("/products/1") ? "font-bold mr-4" : "text-blue-500 mr-4"}
            >
                Product 1
            </Link>
            <Link 
                href={"/sign-up"}
                className={pathName.startsWith("/products/1") ? "font-bold mr-4" : "text-blue-500 mr-4"}
            >
                Sign Up
            </Link>
        </nav>
    )
}