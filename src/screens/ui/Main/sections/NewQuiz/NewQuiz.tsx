"use client";

import React from "react";
import styles from './NewQuiz.module.scss'
import { useDevice } from "@/shared/lib/utils/useDevice";
import { SectioLayout } from "@/shared/ui/SectionLayout";
import Image from "next/image";
import { NewQuizInfo } from "@/widgets/main";
import { PropsDefault } from "@/shared/types/helpers";

export const NewQuiz = React.memo<PropsDefault>(({ className }) => {
    const { device } = useDevice()

    return <SectioLayout className={`${styles.root} ${className}`} containerClassname={styles.container}>
        <NewQuizInfo>
            {!device.desktop && (
                <Image
                    className={styles.image}
                    style={{
                        animationName: styles.decorationAnimation
                    }}
                    src="/quizJS/images/decoration.png"
                    alt="Декорация"
                    width={464}
                    height={464}
                    loading="lazy"
                />
            )}
        </NewQuizInfo>
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