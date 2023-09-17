import { promoModel } from "@/entities/promo/model"
import { Button } from "@/shared/ui/Button"
import { useRouter } from "next/navigation"
import { useCallback } from "react"
import styles from './UpdatePromoButton.module.scss'

export const UpdatePromoButton = () => {
    const { push } = useRouter()
    const { onUpdate, isLoading } = promoModel.activeModel.useUpdatePromo()

    const onPress = useCallback(async () => {
        await onUpdate()
        push('/admin/promo')
    }, [onUpdate])

    return <Button className={styles.root} onPress={onPress} isDisabled={isLoading} ariaLabel="Сохранить">
        Сохранить
    </Button>
}