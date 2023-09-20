"use client";

import { promoModel } from "@/entities/promo/model";
import { UpdatePromoButton, DeletePromoButton } from "@/features/promoCode/ui";
import { ContainerLayout } from "@/shared/ui/ContainerLayout";
import { Header } from "@/widgets/header";
import { PromoForm } from "@/widgets/promo";
import { useParams } from "next/navigation";

export default function PromoScreen() {
    const params = useParams()
    // @ts-ignore
    const { isLoading } = promoModel.activeModel.useGetPromo(params.id!)

    return <>
        <Header />
        {!isLoading && (
            <ContainerLayout title="Редактирование промокода">
                <PromoForm />
                <UpdatePromoButton />
                <DeletePromoButton />
            </ContainerLayout>
        )}
    </>
}