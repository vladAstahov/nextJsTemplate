"use client";

import { promoModel } from "@/entities/promo/model"
import { QuizSelect } from "@/entities/quiz"
import { Input } from "@/shared/ui/Input"
import styles from './PromoForm.module.scss'

export const PromoForm = () => {
    const { promo, fillPromo } = promoModel.activeModel.usePromo()

    return <div>
        <Input
            className={styles.field}
            placeholder="Промокод"
            label="Промокод"
            value={promo.name}
            setValue={newValue => fillPromo({
                name: newValue
            })} />
        <Input
            className={styles.field}
            placeholder="Лимит использований"
            label="Лимит использований"
            value={String(promo.limit)}
            type="number"
            setValue={newValue => fillPromo({
                limit: Number(newValue)
            })} />
        <QuizSelect
            className={styles.field} value={promo.quizId} onChange={newValue => fillPromo({
                quizId: newValue
            })} />
    </div>
}