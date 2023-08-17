"use client";

import { useCallback, useEffect, useState } from "react"
import { IconBase } from "@/shared/ui/IconBase"
import { Radio } from "@/shared/ui/Radio"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { useDevice } from "@/shared/lib/utils/useDevice"
import { Button } from "@/shared/ui/Button"
import styles from './Questions.module.scss'
import { ProgressBar } from "@/shared/ui/ProgressBar";
import { useRouter } from "next/navigation";

const mockAll = 10
const mockCurrent: number = 1

export const Questions = () => {
    const { replace } = useRouter()

    const { device } = useDevice()
    const [active, setActive] = useState<number | null>(null)
    const [validated, setValidated] = useState(false)
    const [number, setNumber] = useState(1)

    const onPress = useCallback(() => {
        if (!validated) {
            setValidated(true)
        } else {
            setActive(null)
            setValidated(false)
            setNumber(prevState => prevState + 1)
        }
    }, [validated])

    useEffect(() => {
        if (number > mockAll) {
            replace('1/result')
        }
    }, [active])

    return <div className={styles.root}>
        <div className={styles.main}>
            <div className={styles.header}>
                <IconBase className={styles.icon} name="placeholder" />
                <span className={styles.time}>6:47</span>
                <p className={styles.rate}>
                    <span>+ 10</span> баллов
                </p>
            </div>
            <div className={styles.question}>
                <p>№{number}</p>
                <p>Текст вопроса, пример длинного текста  ? если будет вопрос на 3 строчки например , то форма будет просто  большего размера</p>
            </div>
            {device.mobile && (
                <LazyLoadImage src="images/question.svg" className={styles.image} />
            )}
            <div className={styles.answer}>
                <p>Выберите один из вариантов ответа</p>
                <Radio
                    className={styles.radio}
                    isActive={1 === active}
                    isSuccess={(1 === active || 1 === mockCurrent) && active === mockCurrent && validated}
                    isError={1 === active && active !== mockCurrent && validated}
                    isDisabled={validated}
                    onPress={() => setActive(1)}>
                    Верный
                </Radio>
                <Radio
                    className={styles.radio}
                    isActive={2 === active}
                    isSuccess={(2 === active || 2 === mockCurrent) && active === mockCurrent && validated}
                    isError={2 === active && active !== mockCurrent && validated}
                    isDisabled={validated}
                    onPress={() => setActive(2)}>
                    Неверный
                </Radio>
            </div>
            <Button
                className={styles.button}
                ariaLabel="Ответить"
                isBold
                isDisabled={active === null}
                onPress={onPress}>
                Ответить
            </Button>
        </div>
        {device.desktop && (
            <LazyLoadImage src="images/question.svg" className={styles.image} />
        )}
        <ProgressBar className={styles.bar} filled={number} all={mockAll} />
    </div>
}