"use client";

import React, { useEffect, useMemo, useState } from "react";
import styles from './NewQuizInfo.module.scss'
import { InfoRow } from "@/shared/ui/InfoRow";
import { PropsDefault } from "@/shared/types/helpers";
import { Button } from "@/shared/ui/Button";
import { PromoModal } from "@/features/promoCode/ui";
import { mainModel } from "@/widgets/main/model";

export const NewQuizInfo = React.memo<PropsDefault & React.PropsWithChildren>(({ className, children }) => {
    const [isVisible, setIsVisible] = useState(false)
    const { isLoading, activeQuiz } = mainModel.useMain()

    const isSkeleton = useMemo(() => isLoading || !activeQuiz, [isLoading, activeQuiz])

    return (
        <>
            <div className={styles.wrapper}>
                {!isSkeleton && (
                    <>
                        <h1 className={styles.title}>Умничать выгодно</h1>
                        <p className={styles.description}>Главный приз и текст , что за приз</p>
                    </>
                )}
                {children}
                {!isSkeleton && (
                    <div className={styles.row}>
                        <InfoRow className={styles.info} icon={'placeholder'} text={activeQuiz!.date} />
                        <InfoRow className={styles.info} icon={'placeholder'} text={activeQuiz!.price} />
                        <InfoRow className={styles.info} icon={'placeholder'} text={activeQuiz!.time} />
                        <InfoRow className={styles.info} icon={'placeholder'} text={`Участников: ${activeQuiz?.limit}`} />
                    </div>
                )}
                <div className={styles.buttons}>
                    <Button
                        view="secondary"
                        ariaLabel="Ввести промокод"
                        onPress={() => setIsVisible(true)}>
                        Ввести промокод
                    </Button>
                    <Button ariaLabel="Оплатить" onPress={() => { }}>Оплатить</Button>
                </div>
            </div>
            <PromoModal isVisible={isVisible} onClose={() => setIsVisible(false)} />
        </>
    )
})