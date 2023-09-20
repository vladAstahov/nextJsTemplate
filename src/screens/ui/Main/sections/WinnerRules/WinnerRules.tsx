import { InfoSectionLayout, InfoSectionLayoutProps } from "@/entities/main"
import styles from './WinnerRules.module.scss'

const data: InfoSectionLayoutProps['data'] = [
    {
        title: "4 варианта ответа на вопрос 1 ответ верный",
        description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born."
    },
    {
        title: "За каждый правильный ответ плюс 1 балл",
        description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born."
    },
    {
        title: "За скорость ответа-плюс баллы",
        description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born."
    },
    {
        title: "5 секунд на ознакомление с вопросом, 15 секунд на ответ",
        description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born."
    }
]

export const WinnerRules = () => (
    <InfoSectionLayout
        className={styles.root}
        title="Как определяется победитель"
        data={data}
        isIcon={false}
    />
)