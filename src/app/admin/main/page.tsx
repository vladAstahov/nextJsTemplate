"use client";

import { isAuthAdminModel } from "@/entities/admin/model";
import { adminStorage } from "@/shared/storage/admin";
import { Header } from "@/widgets/header";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminMain() {
    const { replace } = useRouter()

    useEffect(() => {
        const isAuth = adminStorage.getIsAuth()
        console.log(isAuth)
        if (!Boolean(isAuth)) {
            replace('/admin/login')
        }
    })

    return <>
        <Header />
    </>
}