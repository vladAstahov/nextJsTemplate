import { Button } from "@/shared/ui/Button"
import { mainModel } from "@/entities/main/model"

export const UpdateMainButton = () => {
    const { update, isLoading } = mainModel.useUpdateMain()

    return (
        <Button
            ariaLabel="Сохранить"
            isDisabled={isLoading}
            onPress={update}>
            Сохранить
        </Button>
    )
}