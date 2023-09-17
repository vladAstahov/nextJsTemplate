"use client"

import { promoModel } from "@/entities/promo/model"
import { Card } from "@/shared/ui/Card"
import { ListLayout } from "@/shared/ui/ListLayout"
import { useRouter } from "next/navigation";

export const PromoList = () => {
    const { push } = useRouter()
    const { list, isLoading } = promoModel.useGetPromoList()

    return <ListLayout title="Промо-коды" onPress={() => push('/admin/promo/add')}>
        {!isLoading && (
            <>
                {list.map(({ id, passed, limit, name }) => (
                    <Card key={id} href={`/admin/promo/${id}`}>
                        <p>{name}</p>
                        <p>{passed}/{limit}</p>
                    </Card>
                ))}
            </>
        )}
    </ListLayout>
}