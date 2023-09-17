import { promoModel } from "@/entities/promo/model"
import { Button } from "@/shared/ui/Button"
import { useRouter } from "next/navigation"
import { useCallback } from "react"
import styles from './DeletePromoButton.module.scss'

export const DeletePromoButton = () => {
    const { push } = useRouter()
    const { isLoading, onDelete } = promoModel.activeModel.useDeletePromo()

    const onPress = useCallback(async () => {
        await onDelete()
        push('/admin/promo')
    }, [onDelete, push])

    return <Button className={styles.root} ariaLabel="Удалить" isDisabled={isLoading} onPress={onPress}>
        Удалить
    </Button>
}