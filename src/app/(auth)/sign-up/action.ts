import db from "@/app/lib/database/db";
import { executeAction } from "@/app/lib/executeAction";
import { schema } from "@/app/lib/userSchema";
import bcrypt from "bcrypt";

export default async function signUp(formData:FormData) {
    return executeAction({
        actionFn: async () => {
            //Extract email and password
            const email = formData.get("email")
            const password = formData.get("password")

            //Validated input
            const validatedData = schema.parse({email, password})

            if(!validatedData.password) {
                throw new Error("Password is required")
            }
            const hashedPass = await bcrypt.hash(validatedData.password, 10)

            await db.user.create({
                data: {
                    email: validatedData.email,
                    password: hashedPass
                }
            })
        }
    })
    
}