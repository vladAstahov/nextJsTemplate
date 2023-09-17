import { Button } from "@/shared/ui/Button"
import { mainModel } from "@/entities/main/model"
import styles from './UpdateMainButton.module.scss'

export const UpdateMainButton = () => {
    const { update, isLoading } = mainModel.useUpdateMain()

    return (
        <Button
            className={styles.root}
            ariaLabel="Сохранить"
            isDisabled={isLoading}
            onPress={update}>
            Сохранить
        </Button>
    )
}