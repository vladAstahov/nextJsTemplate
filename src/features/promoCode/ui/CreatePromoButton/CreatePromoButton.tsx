"use client";

import { promoModel } from "@/entities/promo/model"
import { Button } from "@/shared/ui/Button"
import { useRouter } from "next/navigation"
import { useCallback } from "react"
import styles from './CreatePromoButton.module.scss'

export const CreatePromoButton = () => {
    const { push } = useRouter()
    const { onCreate, isLoading } = promoModel.activeModel.useCreatePromo()

    const onPress = useCallback(async () => {
        await onCreate()
        push('/admin/promo')
    }, [onCreate, push])

    return <Button className={styles.root} ariaLabel="Создать" isBold isDisabled={isLoading} onPress={onPress}>Создать</Button>
}