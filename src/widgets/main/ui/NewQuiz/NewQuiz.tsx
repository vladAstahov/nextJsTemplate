"use client";

import React from "react";
import styles from './NewQuiz.module.scss'
import { InfoRow } from "@/shared/ui/InfoRow";
import { PropsDefault } from "@/shared/types/helpers";
import { SectioLayout } from "@/shared/ui/SectionLayout";
import { Button } from "@/shared/ui/Button";
import Image from "next/image";
import { useDevice } from "@/shared/lib/utils/useDevice";
import {PromoCode} from "@/feature/main";

export const NewQuiz = React.memo<PropsDefault>(({ className }) => {
    const { device } = useDevice()

    return <SectioLayout className={`${styles.root} ${className}`} containerClassname={styles.container}>
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Умничать выгодно</h1>
            <p className={styles.description}>Главный приз и текст , что за приз</p>
            {!device.desktop && (
                <Image
                    className={styles.image}
                    style={{
                        animationName: styles.decorationAnimation
                    }}
                    src="/images/decoration.png"
                    alt="Декорация"
                    width={464}
                    height={464}
                    loading="lazy"
                />
            )}
            <div className={styles.row}>
                <InfoRow className={styles.info} icon={'placeholder'} text={'02.08.2023'} />
                <InfoRow className={styles.info} icon={'placeholder'} text={'700'} />
                <InfoRow className={styles.info} icon={'placeholder'} text={'12:00'} />
                <InfoRow className={styles.info} icon={'placeholder'} text={'Участников: 12'} />
            </div>
            <div className={styles.buttons}>
                <PromoCode />
                <Button ariaLabel="Оплатить" onPress={() => { }}>Оплатить</Button>
            </div>
        </div>
        {device.desktop && (
            <Image
                className={styles.image}
                style={{
                    animationName: styles.decorationAnimation
                }}
                src="/images/decoration.png"
                alt="Декорация"
                width={464}
                height={464}
                loading="lazy"
            />
        )}
    </SectioLayout>
})