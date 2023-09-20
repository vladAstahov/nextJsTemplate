"use client";

import React, { useState } from "react";
import styles from './NewQuizInfo.module.scss'
import { InfoRow } from "@/shared/ui/InfoRow";
import { PropsDefault } from "@/shared/types/helpers";
import { Button } from "@/shared/ui/Button";
import { PromoModal } from "@/features/promoCode/ui";

export const NewQuizInfo = React.memo<PropsDefault & React.PropsWithChildren>(({ className, children }) => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Умничать выгодно</h1>
                <p className={styles.description}>Главный приз и текст , что за приз</p>
                {children}
                <div className={styles.row}>
                    <InfoRow className={styles.info} icon={'date'} text={'02.08.2023'} />
                    <InfoRow className={styles.info} icon={'currency'} text={'700'} />
                    <InfoRow className={styles.info} icon={'time'} text={'12:00'} />
                    <InfoRow className={styles.info} icon={'people'} text={`Участников: 12`} />
                </div>
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