import { redirect } from "next/navigation";
import SignOut from "../component/sign-out";
import { auth } from "../lib/auth";

export default async function Page() {

    const session = await auth();
    if(!session) redirect("/")

    return (
        <>
            <div
                className="bg-gray-100 rounded-lg p-4 text-center mb-6"
            >
                <p className=" text-gray-600" >
                    Signned in as :
                </p>
                <p className=" font-medium">
                    {session.user?.email}
                </p>
            </div>

            <SignOut/>
        </>
    )
}