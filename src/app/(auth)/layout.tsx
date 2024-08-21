"use client";
import { getCurrentUser } from "@/appwrite/functions/users";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [user, setuser] = useState<any>(null)
    const router = useRouter()

    useEffect(() => {
        (async () => {
            const userData = await getCurrentUser()
            if (userData) {
                setuser(userData)
            }
        })();
    }, [])

    useEffect(() => {
        if (user) {
            router.push('/')
        }
    }, [user])

    return (
        <div>
            {children}
        </div>
    )
}