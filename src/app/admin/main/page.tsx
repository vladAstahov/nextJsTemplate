"use client";

import { mainModel } from "@/entities/main/model";
import { quizesModel } from "@/entities/quiz/model";
import { UpdateMainButton, UpdateMainForm } from "@/features/main";
import { adminStorage } from "@/shared/storage/admin";
import { ContainerLayout } from "@/shared/ui/ContainerLayout";
import { Header } from "@/widgets/header";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminMain() {
    const { replace } = useRouter()
    const { isLoading } = mainModel.useGetMain()
    quizesModel.useQuizes()

    useEffect(() => {
        const isAuth = adminStorage.getIsAuth()
        console.log(isAuth)
        if (!Boolean(isAuth)) {
            replace('/admin/login')
        }
    })

    return <>
        <Header />
        {!isLoading && (
            <ContainerLayout title="Главная">
                <UpdateMainForm />
                <UpdateMainButton />
            </ContainerLayout>
        )}
    </>
}