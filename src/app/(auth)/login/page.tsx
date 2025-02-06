import { auth, signIn } from "@/app/lib/auth";
import { executeAction } from "@/app/lib/executeAction";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page() {

    const session = await auth();
    if(session) redirect("/dashboard");

    return(
        <div className="flex justify-center items-center h-screen bg-sky-50">
            <form
                className="w-96 p-8 bg-white rounded-lg shadow-lg"
                action={async (formData: FormData) => {
                    "use server";
                    await executeAction({
                        actionFn: async () => {
                            await signIn("credentials", formData)
                        }
                    })
                }}
            >
                <p className="text-[25px] font-semibold text-center my-8">
                    Login
                </p>
                <input
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                />
                <input
                    name="password"
                    placeholder="Password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                />
                <button
                    className=" bg-black text-white text-center w-full rounded-lg mb-4 mt-4 pb-2 pt-2"
                    type="submit"
                > Login
                </button>
                <div className="flex flex-row justify-center mb-8">
                    <p>Doesn't have an account?</p>
                    <Link 
                        href={"/sign-up"}
                        className="text-black pl-2">Sign Up</Link>
                </div>
            </form>
        </div>
    )
}