"use client";
import { useRouter } from "next/navigation"

export default function aboutUs () {
    const router = useRouter();
    return (
        <div>
            <h1>About Us</h1>;
            <p>This is an About Us Page</p>;
            <button 
                onClick={() => router.push("/")}
                className="bg-blue-500 text-white p-2 rounded-md">
                Go Home
            </button>
            

            {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <Link href={"/"}>Back to Homepage</Link>
            </footer> */}

        </div>
    )
}