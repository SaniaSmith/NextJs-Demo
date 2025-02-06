"use client";

import { signOut } from "next-auth/react";

export default async function SignOut() {
    const handleSignOut = async () => {
        await signOut();
    }

    return (
        <div className="flex justify-center">
            <button
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                onClick={handleSignOut}
            >
                Sign Out
            </button>
        </div>
    )
}