"use client";

import { CreatePromoButton } from "@/features/promoCode/ui";
import { ContainerLayout } from "@/shared/ui/ContainerLayout";
import { Header } from "@/widgets/header";
import { PromoForm } from "@/widgets/promo";

export default function AddPromoScreen() {
    return <>
        <Header />
        <ContainerLayout title="Добавить промо-код">
            <PromoForm />
            <CreatePromoButton />
        </ContainerLayout>
    </>
}