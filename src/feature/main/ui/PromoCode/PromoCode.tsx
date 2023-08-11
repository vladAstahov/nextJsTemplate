import {Button} from "@/shared/ui/Button";
import React, {useState} from "react";
import {Modal} from "@/shared/ui/Modal";

export const PromoCode = () => {
    const [ isVisible, setIsVisible ] = useState(false)

    return <div>
        <Button
            view="secondary"
            ariaLabel="Ввести промокод"
            onPress={() => setIsVisible(true)}>
            Ввести промокод
        </Button>
        <Modal isVisible={isVisible} onClose={() => setIsVisible(false)}>
            <h1>Content</h1>
        </Modal>
    </div>
}